<script lang="ts">
	import { navigating } from '$app/stores';

	let nav: boolean;
	let navIcon: HTMLElement;

	$: if ($navigating) {
		nav = false;
	}

	import githubIcon from '$lib/images/logos/github.svg';
	import twitterIcon from '$lib/images/logos/twitter.svg';
	import MainContainer from '../../lib/components/MainContainer.svelte';
</script>

<header>
	<MainContainer>
		<button class="menu-opener" on:click={() => (nav = !nav)}>
			<span bind:this={navIcon} class="mdi" class:mdi-menu={!nav} class:mdi-close={nav} />
		</button>

		<div>
			<nav class:active={nav}>
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a class="link" href="https://wiki.stratasource.org" target="_blank">Wiki</a>

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
	</MainContainer>
</header>

<style lang="scss">
	header {
		padding: 2rem;
	}

	img {
		height: 2rem;
	}

	.menu-opener {
		margin-left: auto;
		color: white;
		background: none;
		border: none;
		cursor: pointer;
		display: none;
		line-height: 1;
		font-size: 3rem;
	}

	nav {
		display: flex;
		justify-content: right;
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

			& img {
				height: 32px;
			}
		}
	}

	@media only screen and (max-width: 700px) {
		header {
			padding: 1rem 0 1rem 0;
		}
		
		.menu-opener {
			display: block;
		}

		nav {
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

			& img {
				height: 2.5rem;
			}
		}

		nav:global(.active) {
			max-height: 30vh;
		}
	}
</style>
