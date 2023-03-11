<script>
	import Meta from '$lib/components/Meta.svelte';

	import chaosIcon from '$lib/images/logos/chaos.svg';
</script>

<Meta
	title="The future of Chaos"
	description="Chaos Initiative is evolving into something more, read more here."
/>

<div class="hero">
	<img src={chaosIcon} alt="Chaos Initiative" class="icon" />
	<div class="mdi mdi-arrow-right icon" />
	<img
		src="https://branding.stratasource.org/i/strata/icon/ondark/mono.svg"
		alt="Strata"
		class="icon"
	/>
</div>

<h1>Someone needs to write this</h1>

<style lang="scss">
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 50px;

		& .icon {
			height: 5rem;
			font-size: 4.5rem;
			line-height: 1;
			margin: 1.5rem;
		}
	}
</style>
