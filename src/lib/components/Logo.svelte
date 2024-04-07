<script lang="ts">
	export let link = '/'
	export let big = false
</script>

<a href={link}>
	<div class="logo">
		<div class="hero" class:big>
			<span>N</span>
			<span>W</span>
			<span>P</span>
			<span>A</span>
		</div>
		{#if big}
			<div class="sub">
				<span>North</span>
				<span>West</span>
				<span>Performance</span>
				<span>Archive</span>
			</div>
		{/if}
	</div>
</a>

<style>
	.logo {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.hero {
		font-size: 2rem;
		font-weight: thin;
		text-align: center;
		letter-spacing: -0.3rem;
	}

	.hero span:last-child {
		margin-left: -0.15rem;
	}

	.big {
		font-size: 5rem;
		letter-spacing: -0.6rem;
	}

	.big span:last-child {
		margin-left: -0.5rem;
	}

	.sub {
		margin-top: -0.5rem;
		font-size: 1.27rem;
		font-weight: lighter;
		margin-left: 5px;
	}
</style>
