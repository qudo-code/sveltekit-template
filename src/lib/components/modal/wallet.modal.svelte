<script>
    import Modal from './modal.svelte';

    import { Icon } from '$lib/components/icon';

    let copied = false;

    const copyWallet = () => {
        copied = true;

        navigator.clipboard.writeText("2bLdWQsVdUpQsfCi2jYg9UHGUVn4y6FbA9KsUjVmfmub");

        setTimeout(() => {
            copied = false;
        }, 1000);
    };
</script>

<Modal>
    <h2 class="text-3xl">My Wallet</h2>
    <div class="flex items-center gap-1 text-xs">
        <p class="text-faded">2bLdWQsVdUpQsfCi2jYg9UHGUVn4y6FbA9KsUjVmfmub</p>
        <button on:click={copyWallet} class="flex gap-1" class:text-green-300={copied}>
            {#if copied}
                <p>Copied!</p>
            {/if}

            <Icon icon={copied ? "Check" : "Copy"} size="sm" />
        </button>
    </div>

    <div class="border-b border-base-200">
        <div class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
                <img src="/solana.png" class="h-8 w-8" alt="" />
    
                <div>
                    <h3 class="text-xl -mb-1">Solana</h3>
                    <p class="text-faded">0.0001</p>
                </div>
            </div>
            <div>
                <div class="flex justify-end gap-3 w-full">
                    <button class="btn btn-sm btn-outline">Deposit</button>
                    <button class="btn btn-sm btn-outline">Withdraw</button>
                </div>
            </div>
        </div>
        <div class="flex justify-end">
            
        </div>
    </div>
</Modal>