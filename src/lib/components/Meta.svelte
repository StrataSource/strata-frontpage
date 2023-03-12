<script lang="ts">
	import { page } from '$app/stores';

	export let title = 'Strata';
	export let description = 'Trust us, we have cool stuff';
	export let theme = 'default';

	let img: HTMLImageElement;
</script>

<svelte:head>
	<title>{title} - Strata</title>
    <meta name="description" content={description}>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Strata" />
	<meta property="og:url" content={$page.url.href} />
	<meta
		property="og:image"
		content="https://stratasource.org/api/og/{title}/{description}/{theme}.png"
	/>
	<meta name="theme-color" content="#f0413c" />
</svelte:head>

<!-- Funky HTML to make the prerender work -->
<img
	bind:this={img}
	on:load={img.remove}
	src="/api/og/{title}/{description}/{theme}.png"
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
