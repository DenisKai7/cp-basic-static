<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { fly } from 'svelte/transition';
	import { portfolioData } from '$lib/data/data';
	import { getImagePrefix } from '$lib/utils/utils';

	const prefix = getImagePrefix();

	let leftInView = false;
	let rightInView = false;
</script>

<section class="md:pt-48 sm:pt-28 pt-12" id="portfolio">
	<div class="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
		<div class="grid lg:grid-cols-2 items-center gap-20">
			<div
				use:inview={{ threshold: 0.2 }}
				on:inview_enter={() => (leftInView = true)}
				class="lg:-ml-32"
			>
				{#if leftInView}
					<div in:fly={{ y: -200, duration: 600 }}>
						<img
							src="{prefix}images/portfolio/img-portfolio.png"
							alt="Crypto Portfolio"
							width="780"
							height="700"
						/>
					</div>
				{/if}
			</div>

			<div
				use:inview={{ threshold: 0.2 }}
				on:inview_enter={() => (rightInView = true)}
			>
				{#if rightInView}
					<div in:fly={{ y: 200, duration: 600 }}>
						<p class="sm:text-28 text-18 text-muted mb-4">
							Cryptocurrency <span class="text-primary">Portfolio</span>
						</p>
						<h2 class="text-white sm:text-40 text-30 mb-4 font-medium">
							Create your crypto portfolio today with Cryp<span class="text-primary">Go</span>!
						</h2>
						<p class="text-muted text-opacity-60 text-18">
							Coinbase has a variety of features that make it the best
							<br class="md:block hidden" /> place to start trading.
						</p>

						<table class="w-full sm:w-[80%]">
							<tbody>
								{#each portfolioData as item}
									<tr class="border-b border-dark_border border-opacity-10">
										<td class="py-5">
											<div class="bg-primary p-4 rounded-full bg-opacity-20 w-fit">
												<img
													src="{prefix}{item.image}"
													alt={item.title}
													width="35"
													height="35"
												/>
											</div>
										</td>
										<td class="py-5">
											<h4 class="text-muted sm:text-28 text-22 ml-5">
												{item.title}
											</h4>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
