<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { fly } from 'svelte/transition';
	import { getImagePrefix } from '$lib/utils/utils';

	const prefix = getImagePrefix();

	const services = [
		{ icon: 'images/icons/icon-consulting.svg', text: 'Blockchain Consulting' },
		{ icon: 'images/icons/icon-blockchain.svg', text: 'Blockchain Solutions' },
		{ icon: 'images/icons/icon-Services.svg', text: 'Custom Development' }
	];

	let inView = false;
</script>

<section class="md:pt-28" id="work">
	<div class="container mx-auto lg:max-w-screen-xl px-4">
		<div
			class="grid grid-cols-12 items-center"
			use:inview={{ threshold: 0.2 }}
			on:inview_enter={() => (inView = true)}
		>
			{#if inView}
				<div
					in:fly={{ y: 200, duration: 600, delay: 400 }}
					class="lg:col-span-7 col-span-12"
				>
					<p class="sm:text-28 text-18 text-white">
						Work with <span class="text-primary">us</span>
					</p>
					<h2 class="sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium">
						Successfully launch your blockchain project.
					</h2>
					<div class="grid md:grid-cols-2 gap-7 mt-11">
						{#each services as service}
							<div class="flex items-center gap-5">
								<div class="px-5 py-5 bg-light_grey bg-opacity-30 rounded-full">
									<img
										src="{prefix}{service.icon}"
										alt="{service.text} icon"
										width="40"
										height="40"
									/>
								</div>
								<p class="text-24 text-muted">{service.text}</p>
							</div>
						{/each}
					</div>
				</div>
				<div
					in:fly={{ y: -200, duration: 600, delay: 400 }}
					class="lg:col-span-5 col-span-12"
				>
					<div class="2xl:-mr-40 mt-9 flex justify-center">
						<img
							src="{prefix}images/work/img-work-with-us.png"
							alt="image"
							width="600"
							height="425"
							class="lg:w-full"
						/>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
