<script lang="ts">
	let navItem = 'version';

	const DocsNav = [
		{ id: 1, navItem: 'Package Versions', hash: 'version' },
		{ id: 2, navItem: 'Pacakge Structure', hash: 'structure' },
		{ id: 3, navItem: 'Quick Start', hash: 'start' },
		{ id: 4, navItem: 'Project Configuration', hash: 'configuration' }
	];

	function getNavItem(item: string) {
		navItem = item;
	}
</script>

<div class="flex flex-col gap-0.5 mt-4 items-start fixed pe-4">
	{#each DocsNav as item}
		<a
			href="#{item.hash}"
			on:click={() => getNavItem(item.hash)}
			class="py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium {item.hash === navItem ? 'bg-primary text-darkmode' : 'text-muted text-opacity-60'}"
		>
			{item.navItem}
		</a>
	{/each}
</div>
