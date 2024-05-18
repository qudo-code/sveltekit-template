<script lang="ts">
    import '$lib/styles/app.postcss';

    import { trpc } from '$lib/trpc/';
    import { QueryClientProvider } from '@tanstack/svelte-query';
    import Nav from '$lib/components/nav.svelte';

    import { page } from '$app/stores';
    
    // https://github.com/sveltejs/language-tools/issues/1026
    const notypecheck = (x:any)=>x;

    const client = trpc.hydrateFromServer($page.data.trpc);
</script>

<QueryClientProvider {...notypecheck({ client })}>
    <div class="h-10">
        <Nav />
    </div>
    <main class="max-w-4xl mx-auto p-4">
        <slot />
    </main>
</QueryClientProvider>