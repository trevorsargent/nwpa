<script lang="ts" context="module">
  import { Performances } from "$lib/graphql/types";
  import PerformancePreview from "$lib/performance/PerformancePreview.svelte";

  const shows = Performances({});
</script>

<div class="container">
  <div class="container-title">
    <h1>Performances</h1>
  </div>

  {#if $shows.loading}
    Loading...
  {:else if $shows.error}
    Error: {$shows.error.message}
  {:else if $shows.data}
    {#each $shows.data["queryPerformance"] as performance}
      <PerformancePreview {performance} />
    {/each}
  {/if}
</div>
