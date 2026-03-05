<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import BuyForm from './BuyForm.svelte';
	import SellForm from './SellForm.svelte';
	import Slider from './Slider.svelte';
	import { getImagePrefix } from '$lib/utils/utils';

	const prefix = getImagePrefix();

	let isBuying = false;
	let isSelling = false;
	let buyRef: HTMLDivElement;
	let sellRef: HTMLDivElement;
	let mounted = false;

	function handleClickOutside(event: MouseEvent) {
		if (buyRef && !buyRef.contains(event.target as Node)) {
			isBuying = false;
		}
		if (sellRef && !sellRef.contains(event.target as Node)) {
			isSelling = false;
		}
	}

	$: if (typeof document !== 'undefined') {
		document.body.style.overflow = isBuying || isSelling ? 'hidden' : '';
	}

	onMount(() => {
		mounted = true;
		document.addEventListener('mousedown', handleClickOutside);
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = '';
		}
	});
</script>

<section class="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1" id="main-banner">
	<div class="container mx-auto lg:max-w-screen-xl px-4">
		<div class="grid grid-cols-12">
			{#if mounted}
				<div
					in:fly={{ x: -300, duration: 600 }}
					class="lg:col-span-5 col-span-12"
				>
					<div class="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
						<img
							src="{prefix}images/icons/icon-bag.svg"
							alt="icon"
							width="40"
							height="40"
						/>
						<p class="text-white sm:text-28 text-18 mb-0">
							Crypto On The <span class="text-primary">Go</span>
						</p>
					</div>
					<h1 class="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
						Buy and Sell <span class="text-primary">Crypto</span> of your{' '}
						<span class="text-primary">choice</span>!
					</h1>
					<div class="flex items-center md:justify-start justify-center gap-8">
						<button
							class="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50"
							on:click={() => (isBuying = true)}
						>
							Buy Crypto
						</button>
						<button
							class="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
							on:click={() => (isSelling = true)}
						>
							Sell Crypto
						</button>
					</div>
					<div class="flex items-center md:justify-start justify-center gap-12 mt-20">
						<a href="#top" class="hover:scale-110 duration-300">
							<img
								src="{prefix}images/hero/playstore.png"
								alt="Play Store"
								width="240"
								height="70"
							/>
						</a>
						<a href="#top" class="hover:scale-110 duration-300">
							<img
								src="{prefix}images/hero/applestore.png"
								alt="App Store"
								width="240"
								height="70"
							/>
						</a>
					</div>
				</div>
				<div
					in:fly={{ x: 300, duration: 600 }}
					class="col-span-7 lg:block hidden"
				>
					<div class="ml-20 -mr-64">
						<img
							src="{prefix}images/hero/banner-image.png"
							alt="Banner"
							width="1150"
							height="1150"
						/>
					</div>
				</div>
			{/if}
		</div>
		<Slider />
	</div>
	<div class="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>

	<!-- Buy Modal -->
	{#if isBuying}
		<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div
				bind:this={buyRef}
				class="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
			>
				<button
					on:click={() => (isBuying = false)}
					class="absolute top-0 right-0 mr-8 mt-8"
					aria-label="Close Buy Modal"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<BuyForm />
			</div>
		</div>
	{/if}

	<!-- Sell Modal -->
	{#if isSelling}
		<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div
				bind:this={sellRef}
				class="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
			>
				<button
					on:click={() => (isSelling = false)}
					class="absolute top-0 right-0 mr-8 mt-8"
					aria-label="Close Sell Modal"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<SellForm />
			</div>
		</div>
	{/if}
</section>
