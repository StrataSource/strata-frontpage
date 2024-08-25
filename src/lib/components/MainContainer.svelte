<div class="main-container">
	<slot />
</div>

<style lang="scss">
	.main-container {
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr auto;
		width: calc(100% - 50px);
		max-width: 1140px;
		align-items: center;
	}
</style>
