<script lang="ts">
	import type { Named, Unique } from '$lib/models/base'

	type T = $$Generic<Named & Unique>
	type U = $$Generic<Named & Unique>

	let keySearch = ''
	let valueSearch = ''

	export let keyChoices: T[]
	export let valueChoices: U[]

	$: keyFilter = keyChoices.filter(
		(c) => keySearch.length > 0 && c.name.toLowerCase().includes(keySearch.toLowerCase())
	)

	$: valueFilter = valueChoices.filter(
		(c) => valueSearch.length > 0 && c.name.toLowerCase().includes(valueSearch.toLowerCase())
	)

	let keyChoice: T | undefined
	let valueChoice: U | undefined
</script>

<div class="wrap">
	<div class="picker-section key">
		{#if keyChoice}
			<h2>{keyChoice.name}</h2>
		{/if}
		<input
			type="text"
			bind:value={keySearch}
			on:change={() => {
				if (keyFilter.length < 1) {
					return
				}
				keyChoice = keyFilter[0]
				keySearch = ''
			}}
		/>
		<ul>
			{#each keyFilter as choice}
				<li>{choice.name}</li>
			{/each}
		</ul>
	</div>

	<div class="picker-section value">
		{#if valueChoice}
			<h2>{valueChoice.name}</h2>
		{/if}
		<input
			type="text"
			bind:value={valueSearch}
			on:change={() => {
				if (valueFilter.length < 1) {
					return
				}
				valueChoice = valueFilter[0]
				valueSearch = ''
			}}
		/>
		<ul>
			{#each valueFilter as choice}
				<li>{choice.name}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.wrap {
		display: flex;
		gap: 1rem;
	}
	.picker-section {
	}
</style>
