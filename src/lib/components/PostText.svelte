<div class="text">
	<slot />
</div>

<style lang="scss">
	.text {
		margin-left: 2rem;
		margin-right: 2rem;
		margin-top: -1rem;
		padding: 1rem;
		background: #222;
		border-radius: 0.5rem;
	}
	@media only screen and (max-width: 400px) {
		.text {
			margin-left: 0rem;
			margin-right: 0rem;
		}
	}
</style>
