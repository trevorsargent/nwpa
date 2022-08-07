<script>
  const links = [
    { title: "Performances", path: "/performances" },
    { title: "Companies", path: "/companies" },
  ];
</script>

<nav class="navbar">
  <a href="/" class="navbar-brand"> NWPA </a>
  <ul class="navbar-nav d-none d-md-flex">
    {#each links as link}
      <li class="nav-item active">
        <a href={link.path} class="nav-link">{link.title}</a>
      </li>
    {/each}
  </ul>
  <!-- Navbar form (inline form) -->
  <form class="form-inline d-none d-md-flex ml-auto" action="..." method="...">
    <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
    <input type="text" class="form-control" placeholder="search..." />
  </form>
  <!-- Navbar content (with the dropdown menu) -->
  <div class="navbar-content d-md-none ml-auto">
    <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
    <div class="dropdown with-arrow">
      <button
        class="btn"
        data-toggle="dropdown"
        type="button"
        id="navbar-dropdown-toggle-btn-1"
      >
        Menu
        <i class="fa fa-angle-down" aria-hidden="true" />
      </button>
      <div
        class="dropdown-menu dropdown-menu-right w-200"
        aria-labelledby="navbar-dropdown-toggle-btn-1"
      >
        <!-- w-200 = width: 20rem (200px) -->
        {#each links as link}
          <a href={link.path} class="dropdown-item">{link.title}</a>
        {/each}
        <div class="dropdown-divider" />
        <div class="dropdown-content">
          <form action="..." method="...">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Email address"
              />
            </div>
            <button class="btn btn-primary btn-block" type="submit"
              >Sign up</button
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</nav>
