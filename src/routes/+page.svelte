<script lang="ts">
    const {data} = $props()
    const posts = Array.from(data.posts.values())
</script>

<svelte:head>
	<title>WhiteBreeze</title>
	<meta name="description" content="Self-Hosted WhiteWind Blogspot" />
</svelte:head>
<div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr)_)] gap-x-2.5 gap-y-5 ml-2 mr-2">
{#each posts as post}
    <div class="border rounded-[1em] border-solid border-[gray] p-[1em]">
        <a href="{post.rkey}">
            <div class="flex flex-col h-[110px] justify-between">
                <p class="text-[cornflowerblue] leading-[1.5] pb-2 tworows" title={post.title}>{post.title}</p>
                <div>
                    <p class="text-gray-300">Last Updated:</p>
                    <p class="object-bottom text-gray-300">{post.createdAt.toLocaleDateString() + ", " +  post.createdAt.toLocaleTimeString()}</p>
                </div>
            </div>
        </a>
    </div>
{/each}
</div>