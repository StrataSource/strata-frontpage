<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import hammerSc from '$lib/images/screenshots/hammer.png';
</script>

<Meta title="Making Source modding fun again" />

<div class="header">
	<div>
		<div class="content">
			<h1>Making Source modding fun again</h1>
			<div class="actions">
				<Button action="/quick-start" variant="secondary">Getting started</Button>
				<Button action="/docs" variant="text">Read the Docs</Button>
			</div>
		</div>
	</div>
	<div class="hammer">
		<img src={hammerSc} alt="A screenshot of Hammer" />
	</div>
</div>

<style lang="scss">
	.header {
		height: calc(100vh - 4rem);
		display: grid;
		grid-template-columns: 1fr 2fr;
		overflow: hidden;
		width: 100vw;

		& .hammer {
			width: 1px;
			height: calc(100vh - 4rem);

			& img {
				height: 150%;
			}
		}

		& .content {
			background: #f0413c;
			height: fit-content;
			width: calc(100% + 4rem);
			padding: 2rem;
			position: relative;
			z-index: 1;
			margin-top: 15vh;

			& h1 {
				font-size: 3rem;
			}

			& .actions {
				margin-top: 1.1rem;
				font-size: 1.1rem;
			}
		}

		@media only screen and (max-width: 768px) {
			grid-template-columns: 1fr;
			height: fit-content;

			& .content {
				width: calc(100vw - 65px);
				margin-bottom: 2rem;
			}

			& .hammer img {
				width: calc(100vw - 65px);
				height: auto;
			}
		}

		@media only screen and (max-width: 1000px) {
			& .content h1 {
				font-size: 2rem;
			}
		}
	}
</style>
