<script lang="ts">
</script>

<div class="migration-banner">
	<img src="https://branding.stratasource.org/i/strata/icon/ondark/mono.svg" alt="Strata Icon" />
	<div class="message">
		<span>Chaos Initiative is now Strata!</span>
		<a href="/the-future-of-chaos">Read the announcement</a>
	</div>
</div>

<style lang="scss">
	.migration-banner {
		background: #a32b2b;
		color: #fff;
		width: 100%;
		padding: 1rem;
		text-align: center;
		gap: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;

		& img {
			height: 20px;
			margin-top: auto;
			margin-bottom: auto;
		}

		@media only screen and (max-width: 400px) {
			& img {
				display: none;
			}
		}

		& a {
			color: #fff;
			font-weight: bold;
			transition: 0.2s ease-in-out all;
			display: inline-block;

			&:hover {
				opacity: 0.6;
			}
		}
		& span {
			display: inline-block;
		}
	}
</style>
