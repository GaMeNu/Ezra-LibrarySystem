import type { RequestHandler } from '@sveltejs/kit';
import config from '../../../../config/config';

export const GET: RequestHandler = async (event) => {
	return new Response(event.request.body);
	// return await fetch(`${config.apiUrl}}`, {
	// 	method: event.request.method,
	// 	headers: event.request.headers,
	// });
}