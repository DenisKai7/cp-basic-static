<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { pricedeta } from '$lib/data/data';
	import { getImagePrefix } from '$lib/utils/utils';

	let currentIndex = 0;
	let intervalId: ReturnType<typeof setInterval>;
	let trackEl: HTMLDivElement;
	let slidesPerView = 4;

	const prefix = getImagePrefix();

	function updateSlidesPerView() {
		if (typeof window === 'undefined') return;
		const w = window.innerWidth;
		if (w < 640) slidesPerView = 1;
		else if (w < 1024) slidesPerView = 2;
		else slidesPerView = 4;
		// Ensure currentIndex is still valid
		const maxIndex = Math.max(0, pricedeta.length - slidesPerView);
		if (currentIndex > maxIndex) currentIndex = maxIndex;
	}

	function next() {
		const maxIndex = Math.max(0, pricedeta.length - slidesPerView);
		currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
	}

	function startAutoplay() {
		intervalId = setInterval(next, 3000);
	}

	function stopAutoplay() {
		if (intervalId) clearInterval(intervalId);
	}

	$: offset = -(currentIndex * (100 / slidesPerView));

	onMount(() => {
		updateSlidesPerView();
		startAutoplay();
		window.addEventListener('resize', updateSlidesPerView);
	});

	onDestroy(() => {
		stopAutoplay();
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', updateSlidesPerView);
		}
	});
</script>

<div
	class="overflow-hidden relative mt-10"
	on:mouseenter={stopAutoplay}
	on:mouseleave={startAutoplay}
	role="region"
	aria-label="Crypto price slider"
>
	<div
		bind:this={trackEl}
		class="flex transition-transform duration-[1500ms] ease-in-out"
		style="transform: translateX({offset}%)"
	>
		{#each pricedeta as item}
			<div
				class="flex-shrink-0 px-2"
				style="width: {100 / slidesPerView}%"
			>
				<div class="bg-[#0d1526] rounded-2xl p-6">
					<div class="flex items-center gap-3 mb-4">
						<img
							src={prefix + item.image}
							alt={item.name}
							class="w-10 h-10"
						/>
						<div>
							<h4 class="text-white font-medium text-17">{item.name}</h4>
							<p class="text-white text-opacity-60 text-15">{item.short}</p>
						</div>
					</div>
					<div class="flex items-center justify-between">
						<p class="text-white font-semibold text-20">${item.price.toLocaleString()}</p>
						<p class="text-15 {item.change >= 0 ? 'text-primary' : 'text-red-500'}">
							{item.change >= 0 ? '+' : ''}{item.change}%
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Navigation dots -->
	<div class="flex justify-center gap-2 mt-6">
		{#each Array(Math.max(1, pricedeta.length - slidesPerView + 1)) as _, i}
			<button
				on:click={() => (currentIndex = i)}
				class="w-2.5 h-2.5 rounded-full transition-colors {currentIndex === i ? 'bg-primary' : 'bg-white bg-opacity-30'}"
				aria-label="Go to slide {i + 1}"
			/>
		{/each}
	</div>
</div>
