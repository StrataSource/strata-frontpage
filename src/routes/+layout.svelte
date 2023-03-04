<script lang="ts">
	import MigrationBanner from '$lib/components/migrationBanner.svelte';
</script>

<MigrationBanner />

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');

	:global(body) {
		font-family: 'Roboto', sans-serif;
	}
</style>
