<script>
	import Button from '$lib/components/Button.svelte';
	import Codeblock from '$lib/components/Codeblock.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta title="Strata Source Quickstart" />

<div>
	<h1>Getting started with Strata Source</h1>
	<div>Start upgrading your Source experience in 3 easy steps</div>
	<br />
	<h2><span class="number">1</span> Download Strata Source</h2>
	<p>
		Strata Source currently doesn't have a standalone SDK. However, all development tools ship with
		both Portal 2: Community Edition and Momentum Mod.
	</p>
	<div>
		<Button action="https://www.portal2communityedition.com/"
			>Get Portal 2: Community Edition</Button
		>
		<Button action="https://momentum-mod.org/">Get Momentum Mod</Button>
	</div>
	<br />
	<h2><span class="number">2</span> Open Hammer</h2>
	<p>By default, the Hammer editor is located at</p>
	<Codeblock>(install directory)/bin/win64/hammer.exe</Codeblock>
	<br />
	<p>
		If you're on Linux, you have to run Hammer through Wine. It's still located at the same path as
		on Windows.
	</p>
	<br />
	<h2><span class="number">3</span> Explore Strata Source</h2>
	<p>
		There are many things that Strata Source can do. Choose which one you're interested in to
		continue.
	</p>
	<div>
		<!--TODO: Link to the proper articles-->
		<Button action="https://wiki.stratasource.org/strata">Creating your first map</Button>
		<Button action="https://wiki.stratasource.org/strata">Migrating your project</Button>
	</div>
</div>

<style lang="scss">
	h2 .number {
		display: inline-block;
		background: #333333;
		height: 3rem;
		width: 3rem;
		padding: 0.5rem;
		border-radius: 50%;
		text-align: center;
	}
</style>
