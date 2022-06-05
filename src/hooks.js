import cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
		// return resolve(event)
	try {
		const options = {ssr: false};
		const response = await resolve(event, options);
		console.log(`Working normally status=${response.status}`, event.url)
		return response;
	} catch(err) {
		console.error("Error esquivo", err)
		return resolve(event)
	}
};
