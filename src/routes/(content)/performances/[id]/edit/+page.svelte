<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Picker from '$lib/components/Picker.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="text-column">
	<form method="post" action="?/submit">
		<input type="text" bind:value={data.performance.title} name="title" placeholder="title" />
		<input
			type="text"
			bind:value={data.performance.subtitle}
			name="subtitle"
			placeholder="subtitle (leave blank to omit)"
		/>
		<input
			type="textarea"
			bind:value={data.performance.description}
			name="description"
			placeholder="description"
		/>
		<button type="submit">Save</button>

		<h2>Makers</h2>

		<Picker keyChoices={data.allMakers} valueChoices={data.allMakers} />
	</form>
</div>

<style lang="scss">
	@import '$lib/styles/mixins/typography';

	[name='title'] {
		@include h1;
		text-transform: none;
	}

	[name='subtitle'] {
		@include h2;
	}

	[type='submit'] {
		position: fixed;
		top: 1rem;
		right: 1rem;
		border: none;
		background: none;
	}
</style>
