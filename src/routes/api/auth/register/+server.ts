import type { RequestHandler } from '@sveltejs/kit';
import config from '../../../../config/config';

export const POST: RequestHandler = async (event) => {
	return await fetch(`${config.apiUrl}/user/signup`, {
		method: event.request.method,
		headers: event.request.headers,
		body: event.request.body,
		// @ts-expect-error: Duplex is necessary
		duplex: "half",
	});
}