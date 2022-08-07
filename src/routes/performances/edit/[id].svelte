<script lang="ts">
  import PerformanceEdit from "$lib/performance/PerformanceEdit.svelte";
  import { page } from "$app/stores";
</script>

<div class="container">
  <h1>Edit Performance</h1>

  <PerformanceEdit id={$page.params.id} />
</div>
