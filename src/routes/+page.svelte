<script lang="ts">
    const { data } = $props();
    const posts = data.posts;
</script>

<svelte:head>
    <title>Tony Bark Online</title>
    <meta name="description" content="Self-Hosted WhiteWind Blogspot" />
</svelte:head>
<div
    class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr)_)] gap-x-2.5 gap-y-5 justify-between ml-2 mr-2"
>
    {#each posts as post}
        <a href={post.rkey}>
            <div
                class="border rounded-[1em] border-solid border-[gray] p-[1em]"
            >
                <p class="text-[cornflowerblue] leading-[1.5]">{post.title}</p>
                <br />{post.createdAt.toDateString() +
                    " @ " +
                    post.createdAt.toLocaleTimeString()}<br />
            </div>
        </a>
    {/each}
</div>
