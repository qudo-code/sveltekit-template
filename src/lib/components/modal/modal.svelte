<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { clearModal } from ".";

    import { Icon } from "$lib/components/icon";
    
    onMount(() => {
        document.body.style.overflow = "hidden";
    });
    onDestroy(() => {
        document.body.style.overflow = "auto";
    });
</script>

<div class="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-10">
    <button
        class="left-0 top-0 absolute w-full h-full bg-black bg-opacity-60"
        on:click={clearModal}
    ></button>
    
    <div
        class="max-w-xl z-20 bg-base-100 p-5 max-h-[80vh] overflow-auto rounded-xl shadow-xl relative w-full"
    >
        <button class="absolute top-3 right-3 btn btn-xs btn-ghost" on:click={clearModal}>
            <Icon icon="X" />
        </button>
        <slot />
    </div>
</div>