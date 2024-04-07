<script>
	import { page } from '$app/stores'
</script>

<a aria-current={$page.url.pathname === '/performances' ? 'page' : undefined} href="/performances"
	>Performances</a
>
<a aria-current={$page.url.pathname === '/makers' ? 'page' : undefined} href="/makers">Makers</a>
<a aria-current={$page.url.pathname === '/venues' ? 'page' : undefined} href="/venues">Venues</a>
<a aria-current={$page.url.pathname === '/about' ? 'page' : undefined} href="/about">About</a>
