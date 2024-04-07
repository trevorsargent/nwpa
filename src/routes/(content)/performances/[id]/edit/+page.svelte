<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Picker from '$lib/components/Picker.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="text-column">
	<form method="post" action="?/submit" enctype="multipart/form-data">
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

		<h2>Images</h2>

		<h3>Keep:</h3>

		<div class="images">
			{#each data.images as image}
				<div class="img">
					{#await image.url then url}
						<img src={url} alt="" />
						<input type="checkbox" name="keep" id={url} checked={true} value={image.name} />
					{/await}
				</div>
			{/each}
		</div>

		<input multiple type="file" name="file" id="file" accept="image/*" />
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

	.images {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	img {
		width: 100%;
	}
</style>
