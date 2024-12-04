<script lang="ts">
    import Profile from '$lib/Profile.svelte';
	import '../app.css';
	let { data, children } = $props();
</script>

<div class="box-border mx-auto px-8 max-w-[1000px] pb-8">
	<nav class="flex justify-between items-center box-border m-[15px]">
		<a class="font-medium text-[x-large]" href="/">Home</a>
		<a class="font-medium text-[large]" href="/about">About</a>
	</nav>
	<Profile profile={data.profile}/>
	{@render children()}
</div>
<footer class="text-center"><a class="hover:underline hover:text-blue-500" href="https://github.com/hugeblank/whitebreeze">WhiteBreeze</a></footer>