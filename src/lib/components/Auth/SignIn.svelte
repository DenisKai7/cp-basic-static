<script lang="ts">
	import Logo from '$lib/components/Layout/Logo.svelte';
	import Loader from '$lib/components/Common/Loader.svelte';
	import SocialSignIn from '$lib/components/Auth/SocialSignIn.svelte';

	let loginData = {
		email: '',
		password: '',
		checkboxToggle: false
	};
	let loading = false;

	function loginUser(e: Event) {
		e.preventDefault();
		loading = true;
		// Simulated login
		setTimeout(() => {
			alert('Login successful');
			loading = false;
		}, 2000);
	}
</script>

<div class="mb-10 text-center mx-auto inline-block max-w-[160px]">
	<Logo />
</div>

<SocialSignIn />

<span
	class="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0"
>
	<span class="text-body-secondary relative z-10 inline-block px-3 text-base text-white"> OR </span>
</span>

<form on:submit|preventDefault>
	<div class="mb-[22px]">
		<input
			type="email"
			placeholder="Email"
			bind:value={loginData.email}
			class="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
		/>
	</div>
	<div class="mb-[22px]">
		<input
			type="password"
			placeholder="Password"
			bind:value={loginData.password}
			class="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
		/>
	</div>
	<div class="mb-9">
		<button
			on:click={loginUser}
			type="submit"
			class="bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent"
		>
			Sign In {#if loading}<Loader />{/if}
		</button>
	</div>
</form>

<a
	href="/forgot-password"
	class="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary"
>
	Forgot Password?
</a>
<p class="text-body-secondary text-white text-base">
	Not a member yet?{' '}
	<a href="/" class="text-primary hover:underline"> Sign Up </a>
</p>
