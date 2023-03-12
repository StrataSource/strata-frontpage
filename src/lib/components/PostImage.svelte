<script lang="ts">
	export let src: string;
	export let description: string = '';

	export let mode = 'static';
</script>

{#if mode == 'static'}
	<img {src} alt={description} />
{:else if mode == 'parallax'}
	<div class="parallax" style="background-image: url({src})" />
{/if}

<style lang="scss">
	img,
	.parallax {
		width: 100%;
		margin-top: -1rem;
		position: relative;
		z-index: -1;
		border-radius: 0.5rem;
		background-color: #333;
	}

	.parallax {
		background-size: cover;
		background-attachment: fixed;
		height: 10rem;
	}
</style>
