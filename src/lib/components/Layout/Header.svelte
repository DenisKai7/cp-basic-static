<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { headerData } from '$lib/data/menuData';
	import Logo from './Logo.svelte';
	import HeaderLink from './HeaderLink.svelte';
	import MobileHeaderLink from './MobileHeaderLink.svelte';
	import SignIn from '$lib/components/Auth/SignIn.svelte';
	import SignUp from '$lib/components/Auth/SignUp.svelte';

	let navbarOpen = false;
	let sticky = false;
	let isSignInOpen = false;
	let isSignUpOpen = false;

	let signInRef: HTMLDivElement;
	let signUpRef: HTMLDivElement;
	let mobileMenuRef: HTMLDivElement;

	function handleScroll() {
		sticky = window.scrollY >= 80;
	}

	function handleClickOutside(event: MouseEvent) {
		if (signInRef && !signInRef.contains(event.target as Node)) {
			isSignInOpen = false;
		}
		if (signUpRef && !signUpRef.contains(event.target as Node)) {
			isSignUpOpen = false;
		}
		if (mobileMenuRef && !mobileMenuRef.contains(event.target as Node) && navbarOpen) {
			navbarOpen = false;
		}
	}

	$: {
		if (typeof document !== 'undefined') {
			if (isSignInOpen || isSignUpOpen || navbarOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		document.addEventListener('mousedown', handleClickOutside);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mousedown', handleClickOutside);
		}
	});
</script>

<header
	class="fixed top-0 z-40 w-full pb-5 transition-all duration-300 {sticky
		? 'shadow-lg bg-darkmode pt-5'
		: 'shadow-none md:pt-14 pt-5'}"
>
	<div class="lg:py-0 py-2">
		<div
			class="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4"
		>
			<Logo />
			<nav class="hidden lg:flex flex-grow items-center gap-8 justify-center">
				{#each headerData as item, index}
					<HeaderLink {item} />
				{/each}
			</nav>
			<div class="flex items-center gap-4">
				<a
					href="#top"
					class="hidden lg:block bg-transparent text-primary border hover:bg-primary border-primary hover:text-darkmode px-4 py-2 rounded-lg"
					on:click|preventDefault={() => {
						isSignInOpen = true;
					}}
				>
					Sign In
				</a>
				{#if isSignInOpen}
					<div
						class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
					>
						<div
							bind:this={signInRef}
							class="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
						>
							<button
								on:click={() => (isSignInOpen = false)}
								class="absolute top-0 right-0 mr-8 mt-8 dark:invert"
								aria-label="Close Sign In Modal"
							>
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
									class="text-white hover:text-primary inline-block me-2"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
							<SignIn />
						</div>
					</div>
				{/if}
				<a
					href="#top"
					class="hidden lg:block bg-primary text-darkmode hover:bg-transparent hover:text-primary border border-primary px-4 py-2 rounded-lg"
					on:click|preventDefault={() => {
						isSignUpOpen = true;
					}}
				>
					Sign Up
				</a>
				{#if isSignUpOpen}
					<div
						class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
					>
						<div
							bind:this={signUpRef}
							class="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-dark_grey bg-opacity-90 backdrop-blur-md px-8 pt-14 pb-8 text-center"
						>
							<button
								on:click={() => (isSignUpOpen = false)}
								class="absolute top-0 right-0 mr-8 mt-8 dark:invert"
								aria-label="Close Sign Up Modal"
							>
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
									class="text-white hover:text-primary inline-block me-2"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
							<SignUp />
						</div>
					</div>
				{/if}
				<button
					on:click={() => (navbarOpen = !navbarOpen)}
					class="block lg:hidden p-2 rounded-lg"
					aria-label="Toggle mobile menu"
				>
					<span class="block w-6 h-0.5 bg-white"></span>
					<span class="block w-6 h-0.5 bg-white mt-1.5"></span>
					<span class="block w-6 h-0.5 bg-white mt-1.5"></span>
				</button>
			</div>
		</div>
		{#if navbarOpen}
			<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"></div>
		{/if}
		<div
			bind:this={mobileMenuRef}
			class="lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs {navbarOpen
				? 'translate-x-0'
				: 'translate-x-full'} z-50"
		>
			<div class="flex items-center justify-between p-4">
				<h2 class="text-lg font-bold text-midnight_text dark:text-midnight_text">
					<Logo />
				</h2>
				<button
					on:click={() => (navbarOpen = false)}
					class="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
					aria-label="Close menu Modal"
				></button>
			</div>
			<nav class="flex flex-col items-start p-4">
				{#each headerData as item, index}
					<MobileHeaderLink {item} />
				{/each}
				<div class="mt-4 flex flex-col space-y-4 w-full">
					<a
						href="#top"
						class="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
						on:click|preventDefault={() => {
							isSignInOpen = true;
							navbarOpen = false;
						}}
					>
						Sign In
					</a>
					<a
						href="#top"
						class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
						on:click|preventDefault={() => {
							isSignUpOpen = true;
							navbarOpen = false;
						}}
					>
						Sign Up
					</a>
				</div>
			</nav>
		</div>
	</div>
</header>
