<script lang="ts">
	import { onMount } from 'svelte';

	let left: HTMLElement, right: HTMLElement, container: HTMLElement;

	export let before: string;
	export let after: string;

	let box: DOMRect;
	let perc: number = 50;

	function update(e: MouseEvent) {
		perc = ((e.x - box.x) / box.width) * 100;

		if (perc > 100) {
			perc = 100;
		} else if (perc < 0) {
			perc = 0;
		}
	}

	function updateBox() {
		box = container.getBoundingClientRect();
	}
	onMount(() => {
		updateBox();
		window.addEventListener('resize', updateBox);
	});
</script>

<div class="container" on:mousemove={update} bind:this={container}>
	<div class="left" style="background-image: url({before}); width: {perc}%" />
	<div class="right" style="background-image: url({after}); width: {100 - perc}%" />

	<div class="seperator" style="left: {perc}%">
		<span class="mdi mdi-unfold-more-vertical" />
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		aspect-ratio: 16/9;
		position: relative;
        overflow-x: hidden;
	}

	.left,
	.right {
		height: 100%;
		background-size: cover;
		position: absolute;
		width: 50%;
	}
	.left {
		left: 0;
		border-right: solid white 0.1rem;
	}
	.right {
		right: 0;
		background-position: right;
		border-left: solid white 0.1rem;
	}
	.seperator {
		height: 100%;
		width: 5rem;
		font-size: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 50%;
		transform: translateX(-2.5rem);
	}
</style>
