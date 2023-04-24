<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import hammerSc from '$lib/images/screenshots/hammer.png';

	import beforeTest from './_assets/before.jpg';
	import afterTest from './_assets/after.jpg';
</script>

<Meta title="Making Source modding fun again" />
<div>
	<div class="header">
		<div>
			<div class="content">
				<h1>Making Source modding fun again</h1>
				<div class="actions">
					<Button action="/engine/quickstart" variant="secondary">Getting started</Button>
					<Button action="https://wiki.stratasource.org/strata" variant="text">Read the Docs</Button
					>
				</div>
			</div>
		</div>
		<div class="hammer">
			<img src={hammerSc} alt="A screenshot of Hammer" />
		</div>
	</div>
	<div class="header-spacer" />

	<div class="feature">
		<div class="screenshot">
			<img
				src="https://source.unsplash.com/random?code"
				alt="A screenshot of the improved Model browser"
			/>
		</div>
		<div class="content">
			<h2>Improved Tooling</h2>
			<div>
				We like suffering. Do you too? Great! Use Strata Source today to improve your Source
				suffering level.
			</div>
			<div class="actions">
				<Button action="/engine/model-browser">Discover the model browser</Button>
			</div>
		</div>
	</div>

	<div class="feature inverted">
		<div class="screenshot">
			<img
				src="https://source.unsplash.com/random?retrogame"
				alt="A screenshot of the improved Model browser"
			/>
		</div>
		<div class="content">
			<h2>Run anything from any era</h2>
			<div>
				Strata Source supports loading maps as old as from Counter Strike: Source with near perfect
				compatibility.
			</div>
			<div class="actions">
				<Button action="/engine/compatibility">See what games are supported</Button>
			</div>
		</div>
	</div>

	<div class="rendering">
		<div class="slider">
			<div class="inner">
				<Slider before={beforeTest} after={afterTest} />
			</div>
		</div>
		<div class="card">
			<h2>Prettier than ever before</h2>
			<div>
				Strata Source utilises DirectX11 as well as PBR to look amazing without compromising
				performance.
			</div>
		</div>
	</div>

	<div class="limits">
		<div class="card">
			<div>
				<h2>Limitless potential</h2>
				<div>
					Strata Source raises almost all limits present in Source to current standards, drastically
					increasing how creative you can be while mapping.
				</div>
			</div>
		</div>
	</div>

	<div class="cta">
		<h2>Ready to upgrade your Source experience?</h2>
		<Button action="/engine/quickstart">Get started</Button>
	</div>
</div>

<style lang="scss">
	.header {
		height: calc(100vh - 4rem);
		display: grid;
		grid-template-columns: 1fr 2fr;
		overflow: hidden;
		width: 100vw;
		position: absolute;

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
	}
	.header-spacer {
		height: calc(100vh - 4rem);
	}

	.feature {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;

		@media only screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr;

			&.inverted {
				grid-auto-flow: row dense;

				& .screenshot {
					box-shadow: #f0413c 1rem 1rem 0rem;
					order: 2;
					&:hover {
						box-shadow: #f0413c 0.5rem 0.5rem 0rem;
					}
				}
			}
		}

		& .screenshot {
			width: calc(100% - 4rem);
			margin: 2rem;
			position: relative;
			box-shadow: #f0413c -1rem 1rem 0rem;
			transition: 250ms;

			& img {
				width: 100%;
			}

			/* While this code works, it's seriously stupid, don't be like me and use box-shadow instead
			&::before {
				content: ' ';
				height: 100%;
				width: 100%;
				background: #f0413c;
				display: block;
				position: absolute;
				z-index: -1;
				transform: translate(-1rem, 1rem);
				transition: 250ms;
			}*/

			&:hover {
				box-shadow: #f0413c -0.5rem 0.5rem 0rem;
			}
		}

		& .actions {
			margin-top: 1rem;
		}
	}
	.rendering {
		margin-top: 2rem;

		& .slider {
			display: flex;
			justify-content: center;
			& .inner {
				width: 50rem;
				min-width: 75%;
				max-width: calc(100vw - 50px);
			}
		}

		& .card {
			background: #f0413c;
			padding: 1rem;
			padding-top: 1.5rem;
			margin: 0 3rem;
			margin-top: -1rem;
			text-align: center;

			@media only screen and (max-width: 768px) {
				margin: 0;
				margin-top: -1rem;
			}
		}
	}
	.limits {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10rem 0;
		margin-top: 2rem;
		max-width: calc(100vw - 50px);

		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDgwMCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiPjxnIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9ImhzbGEoMCwgMCUsIDEwMCUsIDEuMDApIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeD0iMCIgeT0iMCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB4PSI0MDAiIHk9IjAiPjwvcmVjdD48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeD0iODAwIiB5PSIwIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIHg9IjAiIHk9IjQwMCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB4PSI0MDAiIHk9IjQwMCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB4PSI4MDAiIHk9IjQwMCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB4PSIwIiB5PSI4MDAiPjwvcmVjdD48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeD0iNDAwIiB5PSI4MDAiPjwvcmVjdD48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeD0iODAwIiB5PSI4MDAiPjwvcmVjdD48L2c+PC9zdmc+');
		background-size: 4rem;
		background-repeat: repeat;
		background-position: center;

		& .card {
			border: solid #f0413c 0.1rem;
			box-shadow: 0 0 1rem #f0413c;
			padding: 1rem;
			width: 28rem;
			min-height: 8rem;
			max-width: 100%;
			text-align: center;
			margin: 1rem 0;
			background: #111;
			display: flex;
			align-items: center;
		}
	}
	.cta {
		margin-top: 2rem;
		padding: 2rem 3rem;
		background: #333333;

		& h2 {
			float: left;
		}
		text-align: right;
		font-size: 1.5rem;
	}
</style>
