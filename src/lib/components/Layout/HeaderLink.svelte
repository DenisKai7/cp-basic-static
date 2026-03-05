<script lang="ts">
	import type { HeaderItem } from '$lib/types/menu';
	import { page } from '$app/stores';

	export let item: HeaderItem;

	let submenuOpen = false;

	function handleMouseEnter() {
		if (item.submenu) {
			submenuOpen = true;
		}
	}

	function handleMouseLeave() {
		submenuOpen = false;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="relative"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<a
		href={item.href}
		class="text-17 flex font-medium hover:text-primary capitalized {$page.url.pathname === item.href ? 'text-primary' : 'text-muted'}"
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
		<div
			class="absolute py-2 left-0 mt-0.5 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg"
			data-aos="fade-up"
			data-aos-duration="500"
		>
			{#each item.submenu as subItem, index}
				<a
					href={subItem.href}
					class="block px-4 py-2 {$page.url.pathname === subItem.href
						? 'bg-primary text-white'
						: 'text-black dark:text-white hover:bg-primary'}"
				>
					{subItem.label}
				</a>
			{/each}
		</div>
	{/if}
</div>
