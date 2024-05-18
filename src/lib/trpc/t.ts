import type { Context } from '$lib/trpc';
import { TRPCError, initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create({
	allowOutsideOfServer: true,
});

const router = t.router;
const middleware = t.middleware;
const publicProcedure = t.procedure;

const authMiddleware = middleware(async ({ next, ctx }) => {
	if (ctx?.isSystemOperation) {
        return next();
    }

	if (!ctx?.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}

	return next();
});

const privateProcedure = t.procedure.use(authMiddleware);
	  
export {
	privateProcedure,
	authMiddleware,
	middleware,
	publicProcedure,
	router,
	t
};
