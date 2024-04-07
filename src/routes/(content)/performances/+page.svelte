<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<div class="text-column">
	<PageTitle title="Performances" />
	<div class="performances">
		{#await data.performances then perfs}
			{#each perfs ?? [] as p}
				<a href="performances/{p.id.split(':')[1]}">
					<div class="performance">
						<div class="titles">
							<h2>{p.title}</h2>
							<h3>{p.subtitle}</h3>
						</div>
					</div>
				</a>
			{/each}
		{/await}
	</div>
</div>

<style>
	a {
		text-decoration: none;
		display: block;
	}
	.performances {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		padding: 2rem 0;
	}
</style>
