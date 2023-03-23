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
	<meta
		property="og:image"
		content="https://stratasource.org/api/og/{title == ''
			? 'Strata Source'
			: title}/{description}/{theme}.png"
	/>
	<meta name="twitter:card" content="summary_large_image">
	<meta name="theme-color" content="#f0413c" />
</svelte:head>

<!-- Funky HTML to make the prerender work -->
<img
	bind:this={img}
	on:load={img.remove}
	src="/api/og/{title == '' ? 'Strata Source' : title}/{description}/{theme}.png"
	alt="Preview"
/>

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
