<script lang="ts">
	import MigrationBanner from '$lib/components/migrationBanner.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Footer from '$lib/components/PageFooter.svelte';

	import '@fontsource/lexend-deca';
	import '@mdi/font/css/materialdesignicons.min.css';
	import '$lib/css/reset.css';
	import '$lib/css/app.scss';
	import Spinner from '$lib/components/spinner.svelte';
	import { navigating } from '$app/stores';

	let loader: HTMLElement;
</script>

<div class="loader" bind:this={loader} class:hidden={!$navigating}>
	<Spinner />
</div>

<MigrationBanner />

<PageHeader />

<main class="wrapper">
	<slot />
</main>

<Footer />

<style lang="scss">
	:global(body) {
		font-family: 'Lexend Deca', sans-serif;
		font-size: 16px;
		color: #fff;
		background: #111;
		max-width: 100vw;
	}
	:global(.wrapper) {
		margin: 0 auto;
		display: grid;
		width: calc(100% - 50px);
		max-width: 1140px;
	}

	.loader {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: #111;

		overflow: hidden;

		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;

		transition: 100ms;

		&.hidden {
			opacity: 0;
			pointer-events: none;
		}
	}
</style>
