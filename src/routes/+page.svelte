<script>
	import LinkCard from '$lib/components/LinkCard.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { BrandColors } from '$lib/types';

	import p2ceBG from '$lib/images/backgrounds/p2.jpg';
	import p2ceLogo from '$lib/images/logos/p2ce_full_mw.svg';

	import momentumBG from '$lib/images/backgrounds/momentum.png';
	import momentumLogo from '$lib/images/logos/momentum_full_mw.svg';
</script>

<Meta description="Introducing Strata Source, a game changer for Source modding" />

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

<div class="games">
	<LinkCard
		theme={BrandColors.P2CE}
		background={p2ceBG}
		href="https://portal2communityedition.com"
		description="Portal 2, but gooder"
		logo={p2ceLogo}
	/>
	<LinkCard
		theme={BrandColors.MOMENTUM}
		background={momentumBG}
		href="https://momentum-mod.org"
		description="Source, but fast"
		logo={momentumLogo}
	/>
	<LinkCard
		theme={BrandColors.STRATA}
		background={p2ceBG}
		href="https://store.steampowered.com/app/601360/Portal_Revolution/"
		description="Placeholder for Revo"
		logo={momentumLogo}
	/>
</div>

<div id="faq" class="faq">
	<div class="title">
		FAQ
		<span class="tint" aria-hidden="true">FAQ</span>
		<span aria-hidden="true">FAQ</span>
	</div>
	<div class="content">
		<h2>What is Strata Source?</h2>
		<p>
			Strata Source began as the Source Engine branch behind Portal 2: Community Edition (P2:CE) in
			2020. In late 2020, Momentum Mod joined forces with the P2:CE team with the goal of
			collaborating on this new branch. Today, a team of almost two dozen developers contribute to
			Strata Source, with three licensed projects using the engine.
		</p>
		<p>
			The aim of Strata is to foster an open and sharing community for all Source Engine licensees.
			Whilst licensing restrictions mean the engine code must be kept strictly private — all
			developers must have signed prior legal agreements with Valve — we encourage usage of our code
			and accept contributions by any interested licensed developer, even those not directly built
			on top of Strata. Lastly, wherever we can open source our software freely, we do so, releasing
			all non-engine related code under the permissible MIT license.
		</p>
		<h2>Why not Source 2?</h2>
		<p>
			Elephant in the room: we don't have access to Source 2! So far Source 2 has had a limited
			release without a public code SDK, and <a
				href="https://twitter.com/phys_ballsocket/status/1616204680979222528?s=20"
				>we have no idea what Valve's plans are in the future.</a
			>
			If we did have access we'd certainly evaluate it, but it's not immediately certain whether P2:CE
			or Momentum could practically be able to, or even want to switch.
		</p>
		<p>
			Source 2 introduces a new engine infrastructure and new physics library that could negatively
			impact the game feel that players are used to with Source 1. While having access to both
			Source 1 and 2 would help us fix this, this would be a monumental effort from developers to
			get right.
		</p>
		<p>
			Momentum Mod and P2:CE build on a large amount of existing Source 1 content. There are
			thousands of maps, models, textures, and other assets that we want to maintain compatibility
			with. In addition, Source 1 has tried-and-tested tooling workflow, in particular Hammer.
			Source 2 doesn't currently support Source 1 assets or the aforementioned workflow, so moving
			to Source 2 would be a monumental effort for creators as well.
		</p>
		<p>
			We already make use of some modern Valve technologies, some of which are from Source 2. For
			example, we have access to Valve's Panorama UI framework, originally for Source 2 but
			backported to Source 1 for CS:GO, and have gotten an enormous amount of use out of it.
		</p>
		<p>
			While Source 2 is clearly modernized and the engine has a lot of impressive features, we have
			a sincere interest in the long-term maintenance of Source 1. There are numerous places where
			more modern technologies can be implemented, the engine and its many bugs can be refined, and
			piles of tech-debt to extract and demolish; we think this is a genuine worthwhile endeavor.
		</p>

		<h2>Where does your name come from?</h2>
		<p>
			The name <em>Strata</em> comes from geology, referring to the rocky layers of a planet's crust.
			The Source Engine is a huge codebase containing decades worth of code, from contemporary titles
			such as CS:GO and Portal 2, going all the way back to the days of Quake. The engine therefore consists
			of many layers of systems and features, and with it, many layers of tech debt. Our work is frequently
			a process of delving deep into the many layers of the engine and modernizing, refactoring, refining
			and demolishing various sections. So, we felt the analogy to geology and mining was apt!
		</p>

		<h2>Wasn't your previous name “Chaos”?</h2>
		<p>
			Yep! When the project started in 2020 it was under the name “Chaos Source” with contributors
			organized under the umbrella of “Chaos Initiative” and the P2:CE team known as “Chaos
			Studios”. This naming was chosen in very early days of the project, and while it was okay for
			a time, in 2023 we decided to optimize our branding with input from a wider range of project
			members and decided on <strong>Strata Source</strong>.
		</p>
	</div>
</div>

<style lang="scss">
	.hero {
		grid-column: 1 / -1;
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
				background: url('$lib/images/backgrounds/blend.jpg');
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

	.games {
		padding-top: 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;
	}

	.faq {
		$padding-inline: 6rem;
		$polygon-height: 2rem;
		$title-offset: 3rem;
		grid-column: 1 / -1;
		margin-top: 5rem;
		margin-bottom: 2rem;
		width: 80%;
		margin-inline: auto;
		padding-inline: $padding-inline;
		padding-bottom: 3rem;
		position: relative;
		font-size: 1.1em;

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			inset: 0;
			background-color: #a32b2b;
			clip-path: polygon(0 $polygon-height, 100% 0, 100% 100%, 0 100%);
		}

		& .title {
			font-weight: 1000;
			font-size: 8rem;
			transform: translateY(#{-$title-offset});
			margin-bottom: -$title-offset;
			color: transparent;

			& > * {
				position: absolute;
				inset: 0;
			}

			& span {
				color: white;
				pointer-events: none;
				user-select: none;

				&:not(.tint) {
					clip-path: polygon(
						0 0,
						100% 0,
						calc(100% + #{$padding-inline}) $title-offset,
						-$padding-inline $title-offset + $polygon-height
					);
				}

				&.tint {
					color: rgb(236, 174, 174);
				}
			}
		}

		& h2 {
			font-size: 2.5rem;
			margin-top: 3rem;
			margin-bottom: 1rem;
			margin-inline: 4rem;
			text-align: center;
		}

		& p {
			font-size: 1.1rem;
			margin: 1rem 0;
			font-weight: 300;
			line-height: 1.4rem;
			text-align: justify;
			text-indent: 0.5rem;
		}

		& a {
			color: rgb(255, 231, 231);
			text-decoration: underline;
		}
	}

	@media only screen and (max-width: 768px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 16px;

			& .graphics {
				& .portal2-background {
					max-height: 300px;
				}
			}
		}

		.games{
			grid-template-columns: 1fr;
		}

		.faq {
			width: 100%;
			margin-top: 8rem;
			margin-bottom: 0;
			padding-bottom: 1rem;

			$padding-inline: 1rem;
			$polygon-height: 1.5rem;
			$title-offset: 3.5rem;

			padding-inline: $padding-inline;

			&::before {
				clip-path: polygon(0 $polygon-height, 100% 0, 100% 100%, 0 100%);
			}

			& .title {
				$offset: 3rem;
				transform: translateY(#{-$title-offset});
				margin-bottom: -$title-offset;

				& span:not(.tint) {
					clip-path: polygon(
						0 0,
						100% 0,
						calc(100% + #{$padding-inline}) $title-offset,
						-$padding-inline $title-offset + $polygon-height
					);
				}
			}

			& h2 {
				font-size: 2rem;

				margin-inline: 1rem;
			}

			& p {
				// When screen is super low width, `left` feels much easier to read
				text-align: left;
			}
		}
	}
</style>
