<script lang="ts">
	export let action: string | ((event: MouseEvent) => any);
	export let variant: 'default' | 'secondary' | 'outline' | 'text' = 'default';

	let target = '_self';

	if (
		typeof action == 'string' &&
		action.startsWith('https://') &&
		!action.includes('stratasource.org')
	) {
		target = '_blank';
	}
</script>

{#if typeof action == 'string'}
	<a href={action} {target} class={variant}><slot /></a>
{:else}
	<button on:click={action} class={variant}><slot /></button>
{/if}

<style lang="scss">
	a,
	button {
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		background: transparent;
		display: inline-block;
		cursor: pointer;
		transition: 250ms;
		text-decoration: none;
	}

	.default {
		background: #f0413c;
	}
	.secondary {
		background: white;
		color: #f0413c;
	}
	.outline {
		padding: 0.4rem 0.9rem;
		border: 0.1rem white solid;
	}

	.default:hover {
		background-color: #ef8686;
	}
	.secondary:hover {
		background-color: #e5e5e5;
	}
	.outline:hover {
		background-color: white;
		color: #f0413c;
	}
	.text:hover {
		opacity: 0.7;
	}
</style>
