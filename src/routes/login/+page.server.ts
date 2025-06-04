import type { Actions } from '@sveltejs/kit';

function verifyStringField (entry: FormDataEntryValue | null): boolean {
	if (entry == null) return false;
	if (!(typeof entry === 'string')) return false;
	return entry.trim() !== "";
}

export const actions = {
	login: async (event) => {
		const data = await event.request.formData();

		// get data
		const username = data.get("username");
		const password = data.get("password");

		// construct form data
		const formData: {[key: string]: FormDataEntryValue | null} = {
			username,
			password
		}


		Object.keys(formData).forEach((fieldName) => {
			if (!verifyStringField(formData[fieldName])) {
				return {
					success: false,
					response: {
						message: "Invalid field",
						offending_field: fieldName,
					}
				}
			}
		});

		const headers = new Headers();
		headers.set('content-type', 'application/json');

		const req: {input: RequestInfo | URL, init?: RequestInit} = {
			input: "/api/auth/login",
			init: {
				method: "POST",
				headers,
				body: JSON.stringify(formData),
			}
		}

		const res = await event.fetch(req.input, req.init)

		if (res == null) {
			return {
				success: false,
				response: {
					message: "Internal Error - recieved NULL as response"
				}
			};
		}

		if (res.headers.get('content-type') !== 'application/json') {
			return {
				success: false, response: {
					message: "Internal Error - response content type not JSON"
				}};
		}

		const res_json = await res.json();

		if (!res.ok) {
			return {
				success: false,
				response: {
					message: res_json.message,
					offending_field: "offending_field" in res_json ? res_json.offending_field : null
				}
			};
		}

		return { success: true, response: res_json };

	}
} satisfies Actions