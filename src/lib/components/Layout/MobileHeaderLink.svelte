<script lang="ts">
	import type { HeaderItem } from '$lib/types/menu';

	export let item: HeaderItem;
	let submenuOpen = false;

	function handleToggle() {
		submenuOpen = !submenuOpen;
	}
</script>

<div class="relative w-full">
	<a
		href={item.href}
		on:click={item.submenu ? handleToggle : undefined}
		class="flex items-center justify-between w-full py-2 text-muted focus:outline-none"
	>
		{item.label}
		{#if item.submenu}
			<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="m7 10l5 5l5-5"
				/>
			</svg>
		{/if}
	</a>
	{#if submenuOpen && item.submenu}
		<div class="bg-white p-2 w-full">
			{#each item.submenu as subItem, index}
				<a href={subItem.href} class="block py-2 text-gray-500 hover:bg-gray-200">
					{subItem.label}
				</a>
			{/each}
		</div>
	{/if}
</div>
