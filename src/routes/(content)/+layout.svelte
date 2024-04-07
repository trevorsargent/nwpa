<script>
	import { page } from '$app/stores'
	import Logo from '$lib/components/Logo.svelte'
	import '$lib/styles/global.scss'
</script>

<header>
	<Logo link="/"></Logo>
</header>

<main>
	<slot />
</main>

<style lang="scss">
	header {
		display: flex;
		justify-content: center;
		align-items: baseline;
		padding: 1rem;
	}

	main {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 2rem;
		padding: 1rem;
	}
</style>
