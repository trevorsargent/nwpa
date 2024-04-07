<script>
	import Links from '$lib/components/Links.svelte'
	import Logo from '$lib/components/Logo.svelte'
	import Nav from '$lib/components/Nav.svelte'
	import '$lib/styles/global.scss'
</script>

<main>
	<Logo big></Logo>
	<input type="search" />
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		flex-direction: column;
		gap: 2rem;
	}
</style>
