// import { redirect } from '@sveltejs/kit';
import { trpcServer } from '$lib/trpc/';

export const load = async (event) => {
	const { locals } = event;
	
	// Send them to login if not logged in
	// if(!locals?.session && url.pathname !== "/login") throw redirect(302, '/login');

	return {
		user: locals.user,
		trpc: await trpcServer.hydrateToClient(event),
	}
};
