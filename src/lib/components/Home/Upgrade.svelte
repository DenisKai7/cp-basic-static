<script lang="ts">
	import { upgradeData } from '$lib/data/data';
	import { getImagePrefix } from '$lib/utils/utils';

	const prefix = getImagePrefix();
</script>

<section class="md:py-40 py-20" id="upgrade">
	<div class="container mx-auto lg:max-w-screen-xl px-4">
		<div class="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
			<div>
				<p class="text-primary sm:text-28 text-18 mb-3">Upgrade</p>
				<h2 class="text-white sm:text-40 text-30 font-medium mb-5">
					Upgrade Your Storage Layer
				</h2>
				<p class="text-muted text-opacity-60 text-18 mb-7">
					Get faster, safer, more affordable cloud object storage with no
					centeral point of failure.
				</p>
				<div class="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
					{#each upgradeData as item}
						<div class="flex gap-5">
							<div>
								<!-- Check circle icon (la:check-circle-solid) -->
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
									<path fill="currentColor" class="text-white group-hover:text-primary" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3zm-2 18.414l-4.707-4.707l1.414-1.414L14 18.586l7.293-7.293l1.414 1.414z"/>
								</svg>
							</div>
							<div>
								<h4 class="text-18 text-muted text-opacity-60">
									{item.title}
								</h4>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<div>
					<img
						src="{prefix}images/upgrade/img-upgrade.png"
						alt="image"
						width="625"
						height="580"
						class="-mr-5"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
