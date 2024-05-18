<script lang="ts">
    import { Icon, icons, type IconName } from '$lib/components/icon';

    const daisyTheme = {
        "primary": "#E0E0E0",
        "secondary": "#292929",
        "base-100": "#131313",
        "base-200": "#292929",
        "base-300": "#4D4D4D",
        "primary-content": "#131313",
        "secondary-content": "#8A8888",
    };

    const buttons = [
        "btn-primary",
        "btn-secondary",
        "btn-outline",
        "btn-ghost",
    ];

    const textColors = [
        "text-primary",
        "text-secondary",
    ];

    const textSizes = [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
        "text-6xl",
    ];

    $: iconKeys = Object.keys(icons) as IconName[];
</script>

<nav>
    <a href="/">Go back</a>
</nav>

<div class="max-w-4xl mx-auto flex flex-col gap-5">
    <section>
        <h1>Buttons</h1>
        <div class="flex gap-3 flex-wrap gap-3 mb-4">
            {#each buttons as btnClass}
                <button class="btn {btnClass}">.btn {btnClass}</button>
            {/each}
        </div>

        <div class="flex flex-wrap gap-3 mb-4">
            {#each buttons.map(btn => `btn-sm`) as btnClass}
                <button class="btn {btnClass}">.btn {btnClass}</button>
            {/each}
        </div>
        
        <div class="flex flex-wrap gap-3">
            {#each buttons.map(btn => `btn-lg`) as btnClass}
                <button class="btn {btnClass}">.btn {btnClass}</button>
            {/each}
        </div>
    </section>

    <section>
        <h1>Icons</h1>
        <div class="flex gap-3">
            {#each iconKeys as icon}
                <div>
                    <div class="text-xs">
                        {icon}
                    </div>
                    <Icon {icon} size="sm" />
                </div>
            {/each}
        </div>
    </section>

    <section>
        <h1>Text</h1>
        {#each textSizes as textSize}
            <p class="{textSize}">.text {textSize}</p>
        {/each}
        {#each textSizes as textSize}
            <p class="{textSize} text-secondary">.text {textSize} .text-secondary</p>
        {/each}
    </section>
</div>
