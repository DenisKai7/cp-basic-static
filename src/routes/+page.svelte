<script>
	import Hero from '$lib/components/Home/Hero.svelte';
	import Work from '$lib/components/Home/Work.svelte';
	import Timeline from '$lib/components/Home/Timeline.svelte';
	import Platform from '$lib/components/Home/Platform.svelte';
	import Portfolio from '$lib/components/Home/Portfolio.svelte';
	import Upgrade from '$lib/components/Home/Upgrade.svelte';
	import Perks from '$lib/components/Home/Perks.svelte';
</script>

<svelte:head>
	<title>Jayusha | Company Profile Basic Static</title>
	<link rel="icon" type="image/png" href="/logo/Jayusha_Logo_no_bg.png" />
</svelte:head>

<Hero />
<Work />
<Timeline />
<Platform />
<Portfolio />
<Upgrade />
<Perks />
