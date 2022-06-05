import cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
		// return resolve(event)
	try {
		const cookies = cookie.parse(event.request.headers.get('cookie') || '');
		event.locals.userid = Math.random();

		const options = {ssr: true};

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

		console.log(`Working normally status=${response.status}`, event.url)
		return response;
	} catch(err) {
		console.error("Error esquivo", err)
		return resolve(event)
	}
};
