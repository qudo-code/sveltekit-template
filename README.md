# Sveltekit Template
- [SvelteKit](https://kit.svelte.dev/)
- [tRPC](https://trpc.io/)
- [tRPC + Tanstack query adapter](https://github.com/ottomated/trpc-svelte-query)
- [Lucia auth](https://lucia-auth.com/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/products/docker-desktop/) db for local dev
## Run
Copy paste the .env.example file into a .env file. you don't need to fill in values for oauth keys but they need to exist as empty vars at least. 
Install docker if you don't have it. 
- `pnpm i`
- `pnpm docker:up` : creates a local postgres db (running `docker:down`  deletes it if you need clean slate)
- `pnpm dev` : Generates prisma client + seeds db with dummy data if not exists + starts dev server
## API Endpoints
Design endpoints using trpc patterns in `/src/lib/trpc/router`. Make new routers and add them to `/router/index` for new categories of requests. Use `privateProcedure` for logged in only routes if needed.
### Example Endpoint
Example endpoint which looks up the logged in user.
```ts
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
```
## Data Fetching/State Management
Consume endpoints in .svelte components like this. Import the trpc client and create a query with your route. This is where trpc tanstack adapter comes in nicely. When you reference your route to create a query like that user const is doing, you get back a Svelte store. You can subscribe to a svelte store value by prefixing it with `$`. Upon first subscription the data will be auto fetched, if anything else in the app uses the same query, then the data will be reused. You also get .isLoading, .isError and states like that on the query thanks to tanstack. 
```ts
<script lang="ts">
    import { trpc } from '$lib/trpc';

    const user = trpc.user.getUser.query();

    $: loadingUser = $user.isLoading || !$user.data;
    $: console.log($user) // log user whenever it changes
</script>
```
## UI Components
Tailwind + DaisyUI has been added so use that when possible.
https://daisyui.com/
### Icons
There's a pattern for managing icons in `src/lib/components/icons`. Use Lucide icons when possible but there's an example pattern of using "other" icons too. 
### Modals
There's a pattern for managing modals in `src/lib/components/modals`.
