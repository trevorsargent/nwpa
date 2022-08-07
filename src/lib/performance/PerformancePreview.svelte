<script lang="ts">
  import type { Performance } from "../graphql/types";

  export let performance: Performance;
</script>

<div class="row">
  <div class="col">
    <h6>{performance.title}</h6>
  </div>
  <a class="col-1" href="/performances/edit/{performance.id}">Edit</a>
</div>
