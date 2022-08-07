<script>
  import Nav from "$lib/Nav.svelte";
  import SideBar from "$lib/SideBar.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    console.log("onMount");
  });
</script>

<!-- Page wrapper with .with-navbar class -->
<div class="page-wrapper with-navbar">
  <!-- Navbar (immediate child of the page wrapper) -->
  <Nav />
  <!-- Content wrapper -->
  <div class="content-wrapper  py-md-20"><slot /></div>
</div>
