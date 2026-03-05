<script lang="ts">
	import { onMount } from 'svelte';

	let isVisible = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		const toggleVisibility = () => {
			isVisible = window.pageYOffset > 300;
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	});
</script>

<div class="fixed bottom-8 right-8 z-[999]">
	{#if isVisible}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:click={scrollToTop}
			aria-label="scroll to top"
			class="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
		>
			<span class="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
		</div>
	{/if}
</div>
