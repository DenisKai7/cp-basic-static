<script lang="ts">
	import DocNavigation from './DocNavigation.svelte';
	import Introduction from './Introduction.svelte';
	import PackageStructure from './PackageStructure.svelte';
	import QuickStart from './QuickStart.svelte';
	import Configuration from './Configuration.svelte';
</script>

<div class="bg-darkmode md:pt-0 pt-12">
	<div class="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:pt-44 pt-16">
		<div class="grid grid-cols-12 gap-6">
			<div class="lg:col-span-3 col-span-12 lg:block hidden">
				<DocNavigation />
			</div>
			<div class="lg:col-span-9 col-span-12">
				<Introduction />
				<PackageStructure />
				<QuickStart />
				<Configuration />
			</div>
		</div>
	</div>
</div>
