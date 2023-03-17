<div class="text">
	<slot />
</div>

<style lang="scss">
	.text {
		margin-inline: 3rem;
		padding: 1rem;
		background: #222;
		border-radius: 0.5rem;
	}

	@media only screen and (max-width: 400px) {
		.text {
			margin-inline: 0;
		}
	}
</style>
