<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a href="/home" class="btn btn-ghost text-xl">Wacky Picasso</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/myfiles">My Photos</a></li>
		<li><a href="/">Gallery</a></li>
        
      </ul>
    </div>
  </div>

{@render children()}
