import cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
	try {
		const cookies = cookie.parse(event.request.headers.get('cookie') || '');
		event.locals.userid = Math.random();

		const options = {ssr: false};

		const response = await resolve(event, options);

		if (!cookies.userid) {
			// if this is the first time the user has visited this app,
			// set a cookie so that we recognise them when they return
			response.headers.set(
				'set-cookie',
				cookie.serialize('userid', event.locals.userid, {
					path: '/',
					httpOnly: true
				})
			);
		}

		console.error("Working normally")
		return response;
	} catch(err) {
		console.error("Error esquivo", err)
		return resolve(event)
	}
};
