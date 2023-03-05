<script lang="ts">
	import StrataIconOnDarkMono from '$lib/images/logos/strata-icon-ondark-mono.svg';
</script>

<div class="migration-banner">
	<img src={StrataIconOnDarkMono} alt="Strata Icon" />
	<span>Chaos Initiative is now Strata Source!</span>
	<a href="/hello-from-strata">Read the announcement</a>
</div>

<style lang="scss">
	.migration-banner {
		background: #a32b2b;
		color: #fff;
		width: 100%;
		padding: 15px;
		display: flex;
		justify-content: center;
		gap: 15px;

		& img {
			height: 20px;
		}
		& a {
			color: #fff;
			font-weight: bold;
			transition: 0.2s ease-in-out all;

			&:hover {
				opacity: 0.6;
			}
		}
	}
</style>
