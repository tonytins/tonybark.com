<script lang="ts">
    import { CommentSection } from "bluesky-comments-svelte";
    import type { Post } from '$lib/parser.ts';
    import { PUBLIC_HANDLE } from "$env/static/public";

    let { data } = $props();
    let post: Post | undefined = $state(undefined)
    if ( data.posts.has(data.rkey)) {
        post = data.posts.get(data.rkey) as Post
    }
</script>


<svelte:head>
    {#if post !== undefined}
	    <title>{post.title} - WhiteBreeze</title>
    {:else}
        <title>WhiteBreeze</title>
    {/if}
	<!-- <meta name="description" content="This is where the description goes for SEO" /> -->
</svelte:head>

{#if post !== undefined}
    <h1 class="text-center my-4">{post.title}</h1>
    <hr class="my-4">
    <article class="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 prose dark:prose-invert">
        {@html post.content}
    </article>
    <hr class="my-4">
    <CommentSection author={PUBLIC_HANDLE} />
{:else}
<h1 class="text-center pt-4 pb-4">No such post</h1>
{/if}