<script lang="ts">
	import graphic from '$lib/images/backgrounds/chaos-flurry.svg';
	import logo from '$lib/images/logos/chaos.svg';
</script>

<div class="banner">
	<img class="logo" src={logo} title="Chaos Initiative" alt="Chaos Initiative" />
	<div class="message">
		Chaos Initiative is now Strata Source! <a href="/were-strata">Read the announcement</a>
	</div>
	<div class="filler" style="--url: url({graphic});" />
</div>

<style>
	.banner {
		height: 4rem;
		width: 100%;
		display: flex;
		align-items: center;
		background: #191919;
		color: white;
	}
	.logo {
		height: 3rem;
		padding: 1rem;
	}
	.filler {
		height: 100%;
		flex-grow: 1;
		background-image: linear-gradient(90deg, #191919 0%, transparent 60%), var(--url);
		background-size: cover;
		background-position: center;
	}
	a {
		color: #ce3d3d;
		text-decoration: none;
	}
</style>
