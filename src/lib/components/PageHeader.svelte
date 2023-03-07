<script lang="ts">
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

		<nav>
			<a href="/">Home</a>
			<!--<a href="/news">News</a>-->
			<!-- svelte-ignore security-anchor-rel-noreferrer -->
			<a href="https://stratasource.github.io/Wiki/" target="_blank">Wiki</a>
			<a
				href="https://github.com/StrataSource/qtbase/archive/refs/heads/chaos.zip"
				target="_blank"
				rel="noreferrer">Qt Source Code</a
			>

			<div class="socials" />
		</nav>
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

			& nav {
				display: flex;
				gap: 25px;

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
		}

		& img {
			height: 35px;
		}
	}
</style>
