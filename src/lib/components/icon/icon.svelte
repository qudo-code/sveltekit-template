<script lang="ts">
    import { icons, type IconName, type IconSize } from "$lib/components/icon";

    export let icon: IconName;
    export let size: IconSize = "sm";

    const sizes = {
        sm: 14,
        md: 18,
        lg: 32,
    }

    $: props = {
        size: sizes[size],
    }
</script>

{#if icons[icon]}
    <svelte:component
        this={icons[icon]} {...props} {...$$props} />
{/if}

