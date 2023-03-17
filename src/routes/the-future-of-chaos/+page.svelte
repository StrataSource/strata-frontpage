<script>
	import Meta from '$lib/components/Meta.svelte';
	import PostImage from '$lib/components/PostImage.svelte';
	import PostText from '$lib/components/PostText.svelte';

	import chaosIcon from '$lib/images/logos/chaos.svg';
</script>

<Meta
	title="The future of Chaos"
	description="Chaos Initiative is evolving into something more, read more here."
/>

<div class="wrapper">
	<div class="hero">
		<img src={chaosIcon} alt="Chaos Initiative" class="icon" />
		<div class="mdi mdi-arrow-right icon" />
		<img
			src="https://branding.stratasource.org/i/strata/icon/ondark/mono.svg"
			alt="Strata"
			class="icon"
		/>
	</div>

	<PostText>
		<div>
			<p>Hey everyone,</p>
			<p>
				We are excited to announce that Chaos Initiative is evolving into something even greater! As
				we continue to develop our own branch of the Source Engine, we have decided to rebrand
				ourselves as
				<strong>Strata</strong>. This new name represents our hard work digging deep through the
				Source Engine's code.
			</p>
			<p>
				And while our name may be changing, we want to reassure you that our passion for building
				amazing mods remains stronger than ever. We believe that the future of gaming is built on
				collaboration and innovation, and we are excited to be a part of that future. With Strata,
				we will continue to push the boundaries of what is possible, and we look forward to sharing
				our journey with all of you.
			</p>
			<p>Thank you for your support and for being a part of this incredible community.</p>
			<p />
			<p>Sincerely,</p>
			<p>The Strata Team</p>
		</div>
	</PostText>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.hero {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;

		& .icon {
			height: 5rem;
			font-size: 4.5rem;
			line-height: 1;
		}
	}
</style>
