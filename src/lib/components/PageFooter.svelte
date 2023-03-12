<script lang="ts">
	import githubIcon from '$lib/images/logos/github.svg';
	import twitterIcon from '$lib/images/logos/twitter.svg';
</script>

<div class="footer">
	<div class="wrapper">
		<div class="inner">
			<a href="/" class="logo">
				<img src="https://branding.stratasource.org/i/strata/logo/ondark/mono.svg" alt="Strata" />
			</a>
			<div>©2023 Strata</div>
		</div>
		<div class="inner">
			<nav>
				<a href="/">Home</a>
				<a
					href="https://github.com/StrataSource/qtbase/archive/refs/heads/chaos.zip"
					target="_blank"
					rel="noreferrer">Qt Source Code</a
				>
			</nav>

			<nav class="socials">
				<a href="https://github.com/StrataSource" target="_blank" rel="noreferrer"
					><img src={githubIcon} alt="GitHub" /></a
				>
				<a href="https://twitter.com/StrataSource" target="_blank" rel="noreferrer"
					><img src={twitterIcon} alt="Twitter" /></a
				>
			</nav>
		</div>
	</div>
</div>

<style lang="scss">
	.footer {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
		align-items: center;
	}
	@media only screen and (max-width: 900px) {
		.wrapper {
			grid-template-columns: 1fr;
		}
	}

	.logo {
		opacity: 0.7;
		margin-bottom: 1rem;
		transition: 200ms;
		display: block;
		width: fit-content;
	}
	.logo img {
		height: 2rem;
		max-width: 100%;
	}
	.logo:hover {
		opacity: 1;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: end;
		gap: 1rem;
	}
	nav.socials {
		margin-top: 1rem;
	}
	nav a {
		color: white;
		text-decoration: none;
		opacity: 0.7;
		transition: 250ms;
		text-align: center;
	}
	nav a:hover {
		opacity: 1;
	}
	nav.socials a img {
		filter: invert(1);
		height: 2rem;
	}
</style>
