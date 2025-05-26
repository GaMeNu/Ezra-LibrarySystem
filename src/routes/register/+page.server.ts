import type { Actions } from '@sveltejs/kit';

function verifyStringField (entry: FormDataEntryValue | null): boolean {
	if (entry == null) return false;
	if (!(typeof entry === 'string')) return false;
	return entry !== "";
}

export const actions = {
	register: async (event) => {
		const data = await event.request.formData();

		const display_name = data.get("name");
		const username = data.get("username");

		if (!verifyStringField(display_name)) {
			return {
				success: false,
				
			}
		}

		const formData = {
			name: display_name,
			username,
		}

		await fetch("/api/auth/register", {
			method: "POST",
			body: JSON.stringify(formData),
		})

		return {success: true, data: formData}
	}
} satisfies Actions