<script lang="ts">
	import { navigating } from '$app/stores';

	let nav: boolean;
	let navIcon: HTMLElement;

	$: if ($navigating) {
		nav = false;
	}

	import githubIcon from '$lib/images/logos/github.svg';
	import twitterIcon from '$lib/images/logos/twitter.svg';
</script>

<header>
	<div class="wrapper">
		<div class="logo-wrapper">
			<a href="/">
				<img
					src="https://branding.stratasource.org/i/strata/logo/ondark/color.svg"
					alt="Strata Source Logo"
				/>
			</a>
		</div>

		<button class="menu-opener" on:click={() => (nav = !nav)}>
			<span bind:this={navIcon} class="mdi" class:mdi-menu={!nav} class:mdi-close={nav} />
		</button>

		<div>
			<nav class:active={nav}>
				<a class="link" href="/">Home</a>
				<!--<a href="/news">News</a>-->
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a class="link" href="https://stratasource.github.io/Wiki/" target="_blank">Wiki</a>

				<div class="socials link">
					<a href="https://github.com/StrataSource" target="_blank" rel="noreferrer"
						><img src={githubIcon} alt="GitHub" /></a
					>
					<a href="https://twitter.com/StrataSource" target="_blank" rel="noreferrer"
						><img src={twitterIcon} alt="Twitter" /></a
					>
				</div>
			</nav>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		padding: 50px 0px;

		& .wrapper {
			grid-template-columns: 1fr auto;
			gap: 15px;
			align-items: center;

			& .logo-wrapper {
				width: fit-content;
			}

			& .menu-opener {
				font-size: 1rem;
				color: white;
				background: none;
				border: none;
				cursor: pointer;
				display: none;
				scale: 3;
				line-height: 1;
			}

			& nav {
				display: flex;
				gap: 1rem;

				& .socials {
					display: flex;
					align-items: center;
					filter: invert(1);
					height: 1rem;
					gap: 1rem;
				}

				& a {
					font-size: 14px;
					color: #fff;
					text-decoration: none;
					font-weight: bold;
					text-transform: uppercase;
					transition: 0.2s ease-in-out all;

					&:hover {
						opacity: 0.6;
					}
				}
			}

			@media only screen and (max-width: 700px) {
				& .menu-opener {
					display: block;
				}

				& nav {
					max-height: 0;
					display: block;
					background: #222222;
					position: absolute;
					left: 0;
					width: 100%;
					overflow: hidden;

					transition: 250ms linear;

					& .link {
						display: block;
						width: 100%;
						text-align: center;
						padding: 0.75rem;
					}

					& .socials {
						display: flex;
						justify-content: center;
						height: auto;
					}
				}

				& nav:global(.active) {
					max-height: 30vh;
					overflow-y: auto;
				}
			}
		}

		& img {
			height: 2rem;
		}
	}
</style>
