import type { RequestHandler } from '@sveltejs/kit';
import config from '../../../config/config';

export const GET: RequestHandler = async (event) => {
	console.log(`Recieved GET at ${event.url.pathname}`);
	console.log(`Search params: ${event.url.searchParams}`);
	console.log(`API URL: ${config.apiUrl}${event.url.searchParams.get("url")}`)
	return await fetch(`${config.apiUrl}${event.url.searchParams.get("url")}`, {
		method: event.request.method,
		headers: event.request.headers,
	});
}

export const HEAD: RequestHandler = async (event) => {
	console.log(`Recieved GET at ${event.url.pathname}`);
	console.log(`Search params: ${event.url.searchParams}`);
	console.log(`API URL: ${config.apiUrl}${event.url.searchParams.get("url")}`)
	return await fetch(`${config.apiUrl}${event.url.searchParams.get("url")}`, {
		method: event.request.method,
		headers: event.request.headers,
	});
}

export const POST: RequestHandler = async (event) => {
	console.log(`Recieved GET at ${event.url.pathname}`);
	console.log(`Search params: ${event.url.searchParams}`);
	console.log(`API URL: ${config.apiUrl}${event.url.searchParams.get("url")}`)
	return await fetch(`${config.apiUrl}${event.url.searchParams.get("url")}`, {
		method: event.request.method,
		headers: event.request.headers,
		body: event.request.body,
	});
}


export const PUT: RequestHandler = async (event) => {
	console.log(`Recieved GET at ${event.url.pathname}`);
	console.log(`Search params: ${event.url.searchParams}`);
	console.log(`API URL: ${config.apiUrl}${event.url.searchParams.get("url")}`)
	return await fetch(`${config.apiUrl}${event.url.searchParams.get("url")}`, {
		method: event.request.method,
		headers: event.request.headers,
		body: event.request.body,
	});
}

export const DELETE: RequestHandler = async (event) => {
	console.log(`Recieved GET at ${event.url.pathname}`);
	console.log(`Search params: ${event.url.searchParams}`);
	console.log(`API URL: ${config.apiUrl}${event.url.searchParams.get("url")}`)
	return await fetch(`${config.apiUrl}${event.url.searchParams.get("url")}`, {
		method: event.request.method,
		headers: event.request.headers,
		body: event.request.body,
	});
}

export const OPTIONS: RequestHandler = async (event) => {
	console.log(`Recieved GET at ${event.url.pathname}`);
	console.log(`Search params: ${event.url.searchParams}`);
	console.log(`API URL: ${config.apiUrl}${event.url.searchParams.get("url")}`)
	return await fetch(`${config.apiUrl}${event.url.searchParams.get("url")}`, {
		method: event.request.method,
		headers: event.request.headers,
	});
}

export const PATCH: RequestHandler = async (event) => {
	console.log(`Recieved GET at ${event.url.pathname}`);
	console.log(`Search params: ${event.url.searchParams}`);
	console.log(`API URL: ${config.apiUrl}${event.url.searchParams.get("url")}`)
	return await fetch(`${config.apiUrl}${event.url.searchParams.get("url")}`, {
		method: event.request.method,
		headers: event.request.headers,
		body: event.request.body,
	});
}

