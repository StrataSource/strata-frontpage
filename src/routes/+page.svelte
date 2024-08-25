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
	<h2>What is Strata Source?</h2>
	<p>
		Strata Source began as the Source Engine branch behind Portal 2: Community Edition (P2:CE) in
		2020. In late 2020, Momentum Mod joined forces with the P2:CE team with the goal of
		collaborating on this new branch. The aim of Strata is to foster collaboration between licensed
		projects. Today, a team of almost two dozen developers contribute to Strata Source, with three
		licensed projects using the engine.
	</p>
	<h2>How can I use Strata?</h2>
	<p>
		Strata is only accessible as part of the licensed games built using it; we do not provide any
		publicly available SDK. Any licensed Source engine project is welcome to contact us regarding
		collaboration.
	</p>
	<p>
		If you’re interested in making a Portal 2 mod on Strata, check out <a
			href="https://portal2communityedition.com/">P2:CE</a
		>
		or <a href="https://www.portalrevolution.com/">Portal: Revolution.</a>
	</p>
	<h2>Can Strata Help my Project Get Licensed?</h2>
	<p>
		<b>No.</b> Licensing is done entirely by Valve. We cannot license projects and don’t provide any
		source code to unlicensed projects. We cannot influence Valve’s licensing decisions and don’t
		offer legal advice. See Valve’s documentation on Source engine licensing:
		<a href="https://partner.steamgames.com/doc/sdk/uploading/distributing_source_engine"
			>Distributing Source Engine Games / Mods</a
		>.
	</p>
	<h2>Can I use Strata’s Logo or Branding?</h2>
	<p>
		Please don’t use our logo or branding to represent your project. <!--If you are developing a P2:CE mod, see their guidelines on using P2:CE branding (LINK HERE).-->
	</p>
	<p>
		You are welcome to use our logo and branding in material about Strata itself, such as videos or
		articles. See our branding page: <a href="https://stratasource.org/branding">Strata Branding</a
		>.
	</p>
	<h2>Why not Source 2?</h2>
	<p>
		We do not have access to Source 2 and are not licensed to use Source 2. All of the games
		currently using Strata are closely tied to existing Source 1 content, so Source 2 would be a
		poor choice for us.
	</p>
	<p>
		We do have some Source 2 features, such as the Panorama UI system, that were backported by Valve
		to CS:GO. However, Strata is still almost entirely Source 1. Whilst Source 1 does contain
		considerable tech-debt, we’ve been able to improve and modernize it considerably, and we think its
		long-term maintenance is a worthwhile endeavor.
	</p>
	<h2>Where does your name come from?</h2>
	<p>
		The name <em>Strata</em> comes from geology, referring to the rocky layers of a planet's crust. The
		Source Engine is a huge codebase containing decades worth of code, from contemporary titles such
		as CS:GO and Portal 2, going all the way back to the days of Quake.
	</p>
	<p>
		Our work is frequently a process of delving deep into the many layers of the engine and
		modernizing, refactoring, refining and demolishing various sections. So, we felt the analogy to
		geology and mining was apt!
	</p>
	<h2>Wasn't your previous name “Chaos”?</h2>
	<p>
		Yep! When the project started in 2020 it was under the name “Chaos Source” with contributors
		organized under the umbrella of “Chaos Initiative” and the P2:CE team known as “Chaos Studios”.
		This naming was chosen in very early days of the project, and while it was okay for a time, in
		2023 we decided to optimize our branding with input from a wider range of project members and
		decided on Strata Source.
	</p>
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
