import z from 'zod';
import { privateProcedure } from '$lib/trpc/t';
import { router } from '$lib/trpc/t';
import { prisma } from '$lib/prisma';

export const getUser =
    privateProcedure
    .query(async ({ ctx }) => {
        const user = await prisma.user.findFirst({
            where: {
                id: ctx?.user?.id
            },
            select: {
                avatar: true,
                id: true,
                name: true,
            }
        })

        return user;
    });

export const userRouter = router({
	getUser,
});
