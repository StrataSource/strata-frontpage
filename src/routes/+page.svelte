<script>
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta description="Introducing Strata Source, the game changer for Source modding." />

<div class="hero">
	<div class="text">
		<h1>Introducing<br />Strata Source</h1>
		<p>
			A community-made branch of the Source engine emphasing modern features and development
			practices
		</p>
	</div>
	<div class="graphics">
		<div class="portal2-background" />
	</div>
</div>

<style lang="scss">
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
		align-items: center;
		min-height: 60vh;

		& .text {
			display: flex;
			flex-direction: column;
			gap: 15px;

			& h1 {
				font-size: 48px;
			}
			& p {
				font-size: 20px;
				color: rgba(255, 255, 255, 0.4);
				line-height: 1.5em;
			}
		}
		& .graphics {
			display: flex;
			justify-content: center;
			align-items: center;

			& .portal2-background {
				width: 80%;
				height: 80%;
				background: url('$lib/images/backgrounds/p2.jpg');
				background-position: center;
				background-size: cover;
				aspect-ratio: 1 / 1;
				-webkit-mask-image: url('https://branding.stratasource.org/i/strata/icon/ondark/mono.svg');
				-webkit-mask-repeat: no-repeat;
				-webkit-mask-position: center;
				mask-image: url('https://branding.stratasource.org/i/strata/icon/ondark/mono.svg');
				mask-repeat: no-repeat;
				mask-position: center;
			}
		}
	}

	@media only screen and (max-width: 900px) {
		.hero {
			grid-template-columns: 1fr;
		}
	}
</style>
