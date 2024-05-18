// import { redirect } from '@sveltejs/kit';
// import { auth } from '$lib/auth/lucia';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url, cookies }) => {
	// Send them to home page if already logged in
	// if (locals?.session) {
	// 	const { session } = await auth.validateSession(locals?.session?.id || "");

	// 	if (session) {
	// 		throw redirect(302, '/');
	// 	}
	// }
};
