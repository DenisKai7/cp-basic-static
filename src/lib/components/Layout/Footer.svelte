<script lang="ts">
	import { headerData } from '$lib/data/menuData';
	import { footerlabels } from '$lib/data/data';
	import Logo from '$lib/components/Layout/Logo.svelte';
</script>

<footer class="pt-16 bg-darkmode">
	<div class="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
		<div
			class="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16"
		>
			<div class="lg:col-span-4 md:col-span-6 col-span-6">
				<Logo />
				<div class="flex gap-6 items-center mt-8">
					<a href="#top" class="group">
						<!-- Facebook icon -->
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								class="text-white group-hover:text-primary"
								d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 7.834 7.834 0 0 0-.567-.01c-1.669 0-2.388.64-2.388 2.125v1.856h3.379l-.586 3.668h-2.793v7.98C18.265 23.29 22.502 18.645 22.502 13.103c0-6.281-5.09-11.372-11.372-11.372S-.242 6.822-.242 13.103c0 5.543 3.97 10.148 9.343 10.588Z"
							/>
						</svg>
					</a>
					<a href="#top" class="group">
						<!-- Instagram icon -->
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								class="text-white group-hover:text-primary"
								d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3373 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8394.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6794-.8186-.8981-1.3783-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.8979.4227-.1651 1.0573-.3631 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.8983 1.3783.1644.4233.3623 1.0582.4172 2.2278.0592 1.2648.0722 1.6447.079 4.8484.007 3.2037-.006 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.8979-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
							/>
						</svg>
					</a>
					<a href="#top" class="group">
						<!-- X/Twitter icon -->
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								class="text-white group-hover:text-primary"
								d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
							/>
						</svg>
					</a>
				</div>
				<h3 class="text-white text-24 font-medium sm:mt-20 mt-12">2025 Copright | Crypgo</h3>
				<h3 class="text-white text-24 font-medium sm:mt-20 mt-12">
					Distributed by <a href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
				</h3>
			</div>
			<div class="lg:col-span-2 md:col-span-3 col-span-6">
				<h4 class="text-white mb-4 font-medium text-24">Links</h4>
				<ul>
					{#each headerData as item, index}
						<li class="pb-4">
							<a href={item.href} class="text-white hover:text-primary text-17">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="lg:col-span-2 md:col-span-3 col-span-6">
				<h4 class="text-white mb-4 font-medium text-24">Information</h4>
				<ul>
					{#each footerlabels as item, index}
						<li class="pb-4">
							<a href={item.herf} class="text-white hover:text-primary text-17">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="lg:col-span-4 md:col-span-4 col-span-6">
				<h3 class="text-white text-24 font-medium">Subscribe</h3>
				<p class="text-muted text-opacity-60 text-18 mt-5">
					Subscribe to get the latest<br /> news form us
				</p>
				<div class="relative lg:w-80%">
					<input
						type="email"
						name="mail"
						id="mail"
						placeholder="Enter Email"
						class="bg-transparent border border-dark_border border-opacity-60 py-4 text-white rounded-lg w-full mt-6 px-6"
					/>
					<!-- Send icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-primary absolute right-7 bottom-4"
					>
						<line x1="22" y1="2" x2="11" y2="13" />
						<polygon points="22 2 15 22 11 13 2 9 22 2" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</footer>
