<script lang="ts">
    import '$lib/styles/app.postcss';

    import { modal } from '$lib/components/modal';
</script>

<slot></slot>

{#if $modal}
    <svelte:component this={$modal.component} {...$modal} />
{/if}