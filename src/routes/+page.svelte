<script>
	import LinkCard from '$lib/components/LinkCard.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { BrandColors } from '$lib/types';

	import p2ceBG from '$lib/images/backgrounds/p2.jpg';
	import p2ceLogo from '$lib/images/logos/p2ce_full_mw.svg';

	import momentumBG from '$lib/images/backgrounds/momentum.jpg';
	import momentumLogo from '$lib/images/logos/momentum_full_mw.svg';

	import revolutionBG from '$lib/images/backgrounds/revolution.jpg';
	import revolutionLogo from '$lib/images/logos/revolution_full.svg';
</script>

<Meta description="Introducing Strata Source, a game changer for Source modding" />

<div class="hero">
	<img
		src="https://branding.stratasource.org/i/strata-source/logo/ondark/color.svg"
		alt="Strata Source Logo"
	/>
</div>

<div class="games">
	<LinkCard
		theme={BrandColors.P2CE}
		background={p2ceBG}
		href="https://portal2communityedition.com"
		title="Portal 2: CE"
		description="The best way to Play and Create Portal community content."
	/>
	<LinkCard
		theme={BrandColors.MOMENTUM}
		background={momentumBG}
		href="https://momentum-mod.org"
		title="Momentum Mod"
		description="Source movement speedrunning at its finest."
	/>
	<LinkCard
		theme={BrandColors.REVOLUTION}
		background={revolutionBG}
		href="https://www.portalrevolution.com/"
		title="Portal: Revolution"
		description="All-encompassing story campaign mod for Portal 2."
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
			Source is a closed-source engine, and historically speaking Source 1 game developers have been
			isolated from one another. This has led to a lot of overlapping work, which is especially
			unfortunate given that we're typically not-for-profit projects, working in our free time.
			The aim of Strata is to foster more open communication between licensed projects and share engine
			changes where possible. To be clear, we <i>only</i> work with existing licensees.
		</p>
		<h2>We have nothing to do with Source licensing.</h2>
		<p>
			This isn't a question, we just want to make it 100% clear. Valve provide a very clear
			explanation of the Source 1 licensing situation <a
				href="https://partner.steamgames.com/doc/sdk/uploading/distributing_source_engine"
				>on the Steamworks documentation</a
			>, we don't have anything to add. We have no say whatsoever in who gets licensed, nor can we
			offer any kind of advice (legal or otherwise) related to licensing.
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
			Source 2 is clearly modernized and the engine has a lot of impressive features, but we have
			a sincere interest in the long-term maintenance of Source 1. There are numerous places where
			more modern technologies can be implemented, the engine and its many bugs can be refined, and
			piles of tech-debt to extract and demolish; we think this is a worthwhile endeavor!
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
		display: flex;
		gap: 50px;
		align-items: center;
		justify-content: center;
		padding: 2rem 0;

		> img {
			width: 50%;
		}
	}

	.games {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;
	}

	.faq {
		grid-column: 1 / -1;
		margin-top: 1rem;
		margin-bottom: 2rem;
		margin-inline: auto;

		& h2 {
			color: #f0413c;
			font-size: 2rem;
			margin-top: 2.5rem;
		}

		& p {
			margin: 0.5rem 0;
			font-weight: 300;
			line-height: 1.4rem;
			text-align: justify;
		}

		& a {
			color: rgb(255, 231, 231);
			text-decoration: underline;
		}
	}

	@media only screen and (max-width: 768px) {
		.hero {
			padding: 0 0 1rem 0;

			img {
				width: 100%;
			}
		}

		.games {
			grid-template-columns: 1fr;
		}

		.faq {
			width: 100%;
			margin-bottom: 0;
			padding-bottom: 0;

			& h2 {
				font-size: 2rem;
			}

			& p {
				// When screen is super low width, `left` feels much easier to read
				text-align: left;
			}
		}
	}
</style>
