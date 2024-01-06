<script lang="ts">
	import type { BrandColors } from '$lib/types';

	export let theme: BrandColors;
	export let background: string;
	export let href: string;
	export let title: string = '';
	export let logo: string | undefined = undefined;
	export let logoPadding: number = 0;
	export let description: string;
	export let cta = 'Learn more';
</script>

<a
	class="card"
	{href}
	target={href.startsWith('/') ? '_self' : '_blank'}
	style:--theme={theme}
	style:--themeTransparent="{theme}44"
	style:--bg="url({background})"
>
	{#if logo == undefined}
		<div class="title">{title}</div>
	{:else}
		<img src={logo} alt={title} class="logo" style:padding="{logoPadding}em 0" />
	{/if}
	<div>
		<div class="description">{description}</div>
		<div class="cta">{cta}</div>
	</div>
</a>

<style lang="scss">
	.card {
		background-image: linear-gradient(0deg, var(--themeTransparent), var(--themeTransparent)),
			linear-gradient(0deg, #00000099, #00000099), var(--bg);
		background-position: center;
		background-size: 100%;

		display: flex;
		flex-direction: column;
		cursor: pointer;
		align-items: start;
		justify-content: space-between;

		border-bottom: var(--theme) 0.2rem solid;

		color: white;
		text-decoration: none;
		padding: 1rem;

		transition: 250ms;
	}

	.card:hover {
		background-size: 110%;
	}

	.logo {
		height: 5rem;
		max-width: 100%;

		filter: grayscale(1) brightness(99);
	}

	.title {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.description {
		text-wrap: balance;
	}

	.cta {
		border: 0.1rem white solid;
		padding: 0.25rem;
		width: fit-content;
		margin-top: 1rem;
		transition: 250ms;
	}
	.cta:hover {
		background: white;
		color: black;
	}
</style>
