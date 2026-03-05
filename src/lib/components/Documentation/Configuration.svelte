<script lang="ts">
	import ColorConfiguration from './ColorConfiguration.svelte';
	import TypographyConfiguration from './TypographyConfiguration.svelte';
	import LogoConfiguration from './LogoConfiguration.svelte';
</script>

<div class="pb-10 md:scroll-m-[180px] scroll-m-28" id="configuration">
	<h3 class="text-2xl font-semibold mt-4 text-white">Project Configuration</h3>
	<ColorConfiguration />
	<TypographyConfiguration />
	<LogoConfiguration />
</div>
