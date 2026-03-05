<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { fly, scale } from 'svelte/transition';
	import { timelineData } from '$lib/data/data';
	import { getImagePrefix } from '$lib/utils/utils';

	const prefix = getImagePrefix();

	let headerInView = false;
	let contentInView = false;
</script>

<section class="md:pt-40 pt-9" id="development">
	<div class="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
		<div class="text-center">
			<div
				use:inview={{ threshold: 0.2 }}
				on:inview_enter={() => (headerInView = true)}
			>
				{#if headerInView}
					<div in:fly={{ y: -100, duration: 600 }}>
						<p class="text-muted sm:text-28 text-18 mb-9">
							Development <span class="text-primary">timeline</span>
						</p>
						<h2 class="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
							We can enter at any point or help you all the way through the
							development cycle.
						</h2>
					</div>
				{/if}
			</div>

			<div
				use:inview={{ threshold: 0.1 }}
				on:inview_enter={() => (contentInView = true)}
			>
				{#if contentInView}
					<div in:scale={{ start: 0.8, duration: 600 }}>
						<!-- Desktop layout -->
						<div class="md:block hidden relative">
							<div>
								<img
									src="{prefix}images/timeline/img-timeline.png"
									alt="image"
									width="1220"
									height="1000"
									class="w-80% mx-auto"
								/>
							</div>
							<div class="absolute lg:top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
								<div class="text-right">
									<h5 class="text-muted text-28 mb-3">Planning</h5>
									<p class="text-18 text-muted text-opacity-60">
										Map the project's scope and architecture
									</p>
								</div>
								<div class="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
									<img
										src="{prefix}images/timeline/icon-planning.svg"
										alt="Planning"
										width="44"
										height="44"
										class="w-16 h-16"
									/>
								</div>
							</div>
							<div class="absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
								<div class="bg-light_grey bg-opacity-45 backdrop-blur-sm p-6 h-fit rounded-full">
									<img
										src="{prefix}images/timeline/icon-refinement.svg"
										alt="Refinement"
										width="44"
										height="44"
									/>
								</div>
								<div class="text-left">
									<h5 class="text-muted text-28 mb-3">Refinement</h5>
									<p class="text-18 text-muted text-opacity-60">
										Refine and improve your solution
									</p>
								</div>
							</div>
							<div class="absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
								<div class="text-right">
									<h5 class="text-muted text-28 mb-3">Prototype</h5>
									<p class="text-18 text-muted text-opacity-60">
										Build a working prototype to test your product
									</p>
								</div>
								<div class="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
									<img
										src="{prefix}images/timeline/icon-prototype.svg"
										alt="Prototype"
										width="44"
										height="44"
										class="w-16 h-16"
									/>
								</div>
							</div>
							<div class="absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
								<div class="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
									<img
										src="{prefix}images/timeline/icon-support.svg"
										alt="Scale and support"
										width="44"
										height="44"
										class="w-16 h-16"
									/>
								</div>
								<div class="text-left">
									<h5 class="text-muted text-nowrap text-28 mb-3">Support</h5>
									<p class="text-18 text-muted text-opacity-60">
										Deploy the product and ensure full support by us
									</p>
								</div>
							</div>
						</div>

						<!-- Mobile layout -->
						<div class="grid sm:grid-cols-2 gap-8 md:hidden">
							{#each timelineData as item}
								<div class="flex items-center gap-6">
									<div class="bg-light_grey bg-opacity-45 p-6 rounded-full">
										<img
											src="{prefix}{item.icon}"
											alt={item.title}
											width="44"
											height="44"
										/>
									</div>
									<div class="text-start">
										<h4 class="text-28 text-muted mb-2">{item.title}</h4>
										<p class="text-muted text-opacity-60 text-18">{item.text}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
