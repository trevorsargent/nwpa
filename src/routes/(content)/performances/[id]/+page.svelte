<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import type { PageServerData } from './$types'
	export let data: PageServerData
	const { performance, makers, images } = data
</script>

<div class="text-column">
	<PageTitle title={performance.title} />
	{#if performance.subtitle}
		<h2>{performance.subtitle}</h2>
	{/if}
	{#if performance.description}
		<p>{performance.description}</p>
	{/if}

	<div class="makers">
		<h2>Makers</h2>
		{#each makers as maker}
			<span class="role">{makers.map((d) => d.name).join(' & ')}</span>
			<span class="name"><a href="/maker/{maker.id}"> {maker.name}</a></span>
		{/each}
	</div>

	<h2>Images</h2>
</div>

<div class="images">
	{#each images as image}
		{#await image.url then url}
			<img src={url} alt="" />
		{/await}
	{/each}
</div>

<div class="edit">
	<a href="/performances/{data.performance.id.split(':')[1]}/edit"> <button> Edit </button></a>
</div>

<style lang="scss">
	.makers {
		display: grid;
		grid-template-columns: repeat(2, min-content);
		gap: 0.5rem 1rem;
	}

	span {
		white-space: nowrap;
	}

	span.role {
		font-weight: lighter;
	}

	a {
		text-decoration: none;
	}

	.edit {
		position: fixed;
		top: 1rem;
		right: 1rem;

		button {
			border: none;
			background: none;
		}
	}

	.images {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}

	img {
		width: 100%;
		object-fit: cover;
	}
</style>
