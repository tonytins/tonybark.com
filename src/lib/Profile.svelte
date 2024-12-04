<script lang="ts">
    const { profile } = $props()
</script>

<div class="p-4 bg-local relative border-gray-500 border-[1px] rounded-[1em] m-2" style="background-image: url({profile.banner}); background-size: cover; background-position: center;">
        <div class="flex flex-wrap m-2 p-3 bg-black bg-opacity-80 rounded-md">
            <div class="flex items-center">
                <img src={profile.avatar} alt="Bluesky avatar" class="rounded-full w-16 h-16 m-2"/>
                <div class="object-contain p-3">
                    <h4 class="content-around">{profile.displayName}</h4>
                    <h6 class=" content-around hover:text-blue-500 hover:underline"><a href="https://bsky.app/profile/{profile.handle}">@{profile.handle}</a></h6>
                </div>
            </div>
            <div class="p-3 content-stretch lg:basis-3/5 min-w-100">
                <p>{profile.description}</p>
            </div>
        </div>
</div>