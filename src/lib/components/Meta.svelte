<script lang="ts">
	import { page } from '$app/stores';

	export let title = '';
	export let description =
		'A community-made branch of the Source engine emphasing modern features and development practices';
	export let theme = 'default';

	let img: HTMLImageElement;
</script>

<svelte:head>
	{#if title == ''}
		<title>Strata Source</title>
		<meta property="og:title" content="Home" />
	{:else}
		<title>{title} - Strata Source</title>
		<meta property="og:title" content={title} />
	{/if}
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Strata Source" />
	<meta property="og:url" content={$page.url.href} />
	<meta name="theme-color" content="#f0413c" />
</svelte:head>

<style>
	img {
		height: 1px;
		width: 1px;
		pointer-events: none;
		position: fixed;
		z-index: -999;
		opacity: 0;
	}
</style>
