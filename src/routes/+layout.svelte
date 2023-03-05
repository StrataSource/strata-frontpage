<script lang="ts">
	import MigrationBanner from '$lib/components/MigrationBanner.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

	import '@fontsource/lexend-deca';
	import '@mdi/font/css/materialdesignicons.min.css';
	import '$lib/css/reset.css';
</script>

<MigrationBanner />

<PageHeader />

<main class="wrapper">
	<slot />
</main>

<style>
	:global(body) {
		font-family: 'Lexend Deca', sans-serif;
		font-size: 16px;
		color: #fff;
		background: #111;
	}
	:global(.wrapper) {
		margin: 0 auto;
		display: grid;
		width: calc(100% - 50px);
		max-width: 1140px;
	}
</style>
