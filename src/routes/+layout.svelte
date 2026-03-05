<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Header from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import ScrollToTop from '$lib/components/Common/ScrollToTop.svelte';
	import { theme } from '$lib/stores/theme';

	// Subscribe to theme to ensure store is initialized
	$: $theme;

	onMount(async () => {
		// Initialize AOS
		const AOS = (await import('aos')).default;
		await import('aos/dist/aos.css');
		AOS.init({
			duration: 800,
			once: false,
		});
	});
</script>

<Header />
<slot />
<Footer />
<ScrollToTop />
