<script lang="ts">
	import Logo from '$lib/components/Layout/Logo.svelte';
	import Loader from '$lib/components/Common/Loader.svelte';
	import SocialSignUp from '$lib/components/Auth/SocialSignUp.svelte';

	let loading = false;

	function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		setTimeout(() => {
			alert('Successfully registered');
			loading = false;
		}, 2000);
	}
</script>

<div class="mb-10 text-center mx-auto inline-block max-w-[160px]">
	<Logo />
</div>

<SocialSignUp />

<span
	class="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0"
>
	<span class="text-body-secondary relative z-10 inline-block px-3 text-base text-white"> OR </span>
</span>

<form on:submit|preventDefault={handleSubmit}>
	<div class="mb-[22px]">
		<input
			type="text"
			placeholder="Name"
			name="name"
			required
			class="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
		/>
	</div>
	<div class="mb-[22px]">
		<input
			type="email"
			placeholder="Email"
			name="email"
			required
			class="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
		/>
	</div>
	<div class="mb-[22px]">
		<input
			type="password"
			placeholder="Password"
			name="password"
			required
			class="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
		/>
	</div>
	<div class="mb-9">
		<button
			type="submit"
			class="flex w-full items-center text-18 font-medium justify-center rounded-md bg-primary px-5 py-3 text-darkmode transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border"
		>
			Sign Up {#if loading}<Loader />{/if}
		</button>
	</div>
</form>

<p class="text-body-secondary mb-4 text-white text-base">
	By creating an account you are agree with our{' '}
	<a href="/#" class="text-primary hover:underline"> Privacy </a>{' '}
	and{' '}
	<a href="/#" class="text-primary hover:underline"> Policy </a>
</p>

<p class="text-body-secondary text-white text-base">
	Already have an account?
	<a href="/" class="pl-2 text-primary hover:underline"> Sign In </a>
</p>
