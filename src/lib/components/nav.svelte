<script>
	import { page } from '$app/stores';

	import { Icon } from '$lib/components/icon';

	import { openModal } from '$lib/components/modal';

	const user = $page.data?.user;
</script>

<nav class="sticky w-full top-0">
	<div class="mx-auto p-1 px-2 items-center grid md:grid-cols-3 border-b border-secondary">
		<div class="flex gap-1 items-center">
			<a href="/" class="text-sm font-bold">Sveltekit</a> 
			<span>|</span>
			<p class="text-xs text-secondary-content">Template</p>
		</div>
		<div class="text-center text-sm">
			
		</div>
		<div class="flex items-center justify-end gap-2">
			<button class="btn btn-sm btn-ghost" on:click={() => openModal("wallet")}>
				<Icon icon="Wallet" />
				$42.00
			</button>
			{#if $page.url.pathname !== "/login"}
				{#if user}
					<a
						href="/api/auth/logout"
						class="flex items-center gap-2 btn btn-sm btn-ghost"
					>
                        Logout
						<Icon icon="LogOut" />
                    </a>
				{:else}
                    <a
                        href="/api/auth/logout"
						class="flex items-center gap-2 btn-ghost btn-sm"
                    >
                        Login
						<Icon icon="LogIn" />
                    </a>
				{/if}
			{/if}
		</div>
	</div>
</nav>
