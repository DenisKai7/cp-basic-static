<script lang="ts">
	import DocNavigation from './DocNavigation.svelte';
	import { getImagePrefix } from '$lib/utils/utils';

	const prefix = getImagePrefix();

	let docNavbarOpen = false;

	const PackageVersions = [
		{ id: '1', packageName: 'SvelteKit', img: 'images/documentation/Categories=Nextjs.svg', version: '2.0.0' },
		{ id: '2', packageName: 'Svelte', img: 'images/documentation/Categories=React.svg', version: '4.0.0' },
		{ id: '3', packageName: 'Tailwindcss', img: 'images/documentation/Categories=Tailwind.svg', version: '3.4.1' },
		{ id: '4', packageName: 'TypeScript', img: 'images/documentation/Categories=Typescript.svg', version: '5.6.3' }
	];
</script>

<div id="version" class="md:scroll-m-[180px] scroll-m-28">
	{#if docNavbarOpen}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
			on:click={() => (docNavbarOpen = false)}
			role="button"
			tabindex="-1"
		/>
	{/if}

	<div class="flex item-center justify-between">
		<h3 class="text-2xl mt-4 font-semibold mb-6 text-white">Pacakge Versions</h3>
		<button on:click={() => (docNavbarOpen = true)} class="p-0">
			<!-- Menu icon -->
			<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white lg:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	<div class="w-full flex justify-between lg:gap-0 gap-6 lg:flex-nowrap flex-wrap p-6 rounded-md border border-dark_border border-opacity-60">
		{#each PackageVersions as item}
			<div class="lg:w-1/5 md:w-full text-center lg:border-b-0 border-b lg:border-e lg:last:border-e-0 last:border-b-0 border-dark_border border-opacity-60">
				<img src="{prefix}{item.img}" alt="npm-package" class="mx-auto w-10 h-10" />
				<h5 class="text-2xl font-bold mt-3.5 text-white">v{item.version}</h5>
				<p class="text-base font-medium text-muted">{item.packageName}</p>
			</div>
		{/each}
	</div>

	<div class="mt-5">
		<p class="text-base font-medium text-muted text-opacity-60">Crypgo Tailwind SvelteKit Template is built with Tailwindcss and SvelteKit.</p>
		<p class="text-base font-medium text-muted text-opacity-60">These theme is ready to use and you can totally customize as per your requirement.</p>
		<p class="text-base font-medium text-muted text-opacity-60">For Customize, You should have knowledge of SvelteKit, Svelte, Tailwind and TypeScript to be able to modify these template.</p>
	</div>
</div>

<!-- Mobile docs nav -->
<div class="lg:hidden block fixed top-0 right-0 h-full w-full bg-white dark:bg-dark shadow-lg transform transition-transform duration-300 max-w-xs {docNavbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50">
	<div class="flex items-center justify-between p-4">
		<h2 class="text-lg font-bold text-midnight_text dark:text-white">Docs Menu</h2>
		<button on:click={() => (docNavbarOpen = false)} aria-label="Close mobile menu">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="dark:text-white">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
	<nav class="px-4">
		<DocNavigation />
	</nav>
</div>
