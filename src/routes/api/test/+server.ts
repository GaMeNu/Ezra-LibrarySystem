import type { RequestHandler } from '@sveltejs/kit';
import config from '../../../config/config';

export const GET: RequestHandler = async ({url}) => {
	console.log(url);
	console.log("awajoiah")
	return await fetch(config.apiUrl);
}