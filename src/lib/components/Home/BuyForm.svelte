<script lang="ts">
	import { CryptoData } from '$lib/data/data';

	let selectedCrypto = CryptoData[0];
	let amount = 0;
	let dropdownOpen = false;

	$: total = amount * selectedCrypto.price;

	function selectCrypto(crypto: typeof CryptoData[0]) {
		selectedCrypto = crypto;
		dropdownOpen = false;
	}
</script>

<div class="sm:px-10 px-4">
	<div class="mt-8 flex items-center justify-between relative">
		<button
			on:click={() => (dropdownOpen = !dropdownOpen)}
			class="flex items-center gap-2 bg-[#0d1526] rounded-lg px-4 py-3 text-white text-15 cursor-pointer"
		>
			<img src={selectedCrypto.image} alt={selectedCrypto.name} class="w-6 h-6" />
			{selectedCrypto.short}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 transition-transform {dropdownOpen ? 'rotate-180' : ''}"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>

		{#if dropdownOpen}
			<div class="absolute top-14 left-0 bg-[#0d1526] rounded-lg shadow-lg z-10 w-48">
				{#each CryptoData as crypto}
					<button
						on:click={() => selectCrypto(crypto)}
						class="flex items-center gap-2 px-4 py-3 text-white hover:bg-[#1a2744] w-full text-left text-15"
					>
						<img src={crypto.image} alt={crypto.name} class="w-6 h-6" />
						{crypto.short}
					</button>
				{/each}
			</div>
		{/if}

		<div class="text-white text-15">
			1 {selectedCrypto.short} = ${selectedCrypto.price.toLocaleString()}
		</div>
	</div>

	<div class="mt-6">
		<label for="buy-amount" class="text-white text-15 mb-2 block">Amount</label>
		<div class="relative">
			<input
				id="buy-amount"
				type="number"
				bind:value={amount}
				placeholder="0.00"
				class="w-full bg-[#0d1526] rounded-lg px-4 py-3 text-white text-15 outline-none border border-transparent focus:border-primary"
			/>
			<span class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-opacity-50 text-15">
				{selectedCrypto.short}
			</span>
		</div>
	</div>

	<div class="mt-6">
		<label for="buy-total" class="text-white text-15 mb-2 block">Total</label>
		<div class="relative">
			<input
				id="buy-total"
				type="text"
				value={total ? `$${total.toLocaleString()}` : '$0.00'}
				readonly
				class="w-full bg-[#0d1526] rounded-lg px-4 py-3 text-white text-15 outline-none border border-transparent"
			/>
			<span class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-opacity-50 text-15">
				USD
			</span>
		</div>
	</div>

	<button
		class="mt-8 w-full py-4 bg-primary text-darkmode font-semibold rounded-lg hover:bg-opacity-90 transition-colors text-15"
	>
		Buy {selectedCrypto.short}
	</button>
</div>
