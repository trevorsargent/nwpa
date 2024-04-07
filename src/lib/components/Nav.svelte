<script>
	import Links from './Links.svelte'
	import Logo from './Logo.svelte'
</script>

<nav>
	<a href="/">
		<Logo />
	</a>
	<Links></Links>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		padding: 1rem;
	}

	a {
		text-decoration: none;
		color: var(--dark);
		opacity: 0.5;
		margin-right: 1rem;
	}
</style>
