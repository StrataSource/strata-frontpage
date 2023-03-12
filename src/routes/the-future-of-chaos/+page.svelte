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
		Hey everyone,
		<br />
		We are excited to announce that Chaos Initiative is evolving into something even greater! As we continue
		to develop our own branch of the Source Engine, we have decided to rebrand ourselves as
		<strong>Strata</strong>. This new name represents our hard work digging deep through the Source
		Engine's code.
		<br />
		And while our name may be changing, we want to reassure you that our passion for building amazing
		mods remains stronger than ever. We believe that the future of gaming is built on collaboration and
		innovation, and we are excited to be a part of that future. With Strata, we will continue to push
		the boundaries of what is possible, and we look forward to sharing our journey with all of you.
		<br />
		Thank you for your support and for being a part of this incredible community.
		<br /><br />
		Sincerely,
		<br />
		The Strata Team
	</div>
</PostText>
<PostImage src="https://source.unsplash.com/random?dark" mode="parallax" />
<PostText>
	<div>This would be an excelent place for some Q&A after we finish this</div>
</PostText>

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
