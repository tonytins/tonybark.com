<script>
    let { data } = $props();
    // TODO: make it so links scroll to the right spot
</script>

<svelte:head>
    <title>{data.title} - Tony Bark Online</title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    />
</svelte:head>

<h1 class="text-center pt-4 pb-4">{data.title}</h1>
<hr class="pb-4" />
<article class="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 prose dark:prose-invert">
    {@html data.mdcontent}
</article>
