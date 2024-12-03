<script lang="ts">
    import { profile } from "./identity";
</script>

<div class="p-4 bg-local relative border-gray-500 border-[1px] rounded-[1em] m-2" style="background-image: url({profile.banner}); background-size: cover; background-position: center;">
        <div class="flex m-2 p-3 bg-black bg-opacity-80 rounded-md shrink">
            <img src={profile.avatar} alt="Bluesky avatar" class="rounded-full w-[4em] m-2 h-full"/>
            <div class="p-3">
                <h4 class="">{profile.displayName}</h4>
                <h6 class="hover:text-blue-500 hover:underline"><a href="https://bsky.app/profile/{profile.handle}">@{profile.handle}</a></h6>
            </div>
            <div class="p-3">
                <p class="">{profile.description}</p>
                {#if profile.about}
                    <br/>
                    <p class="">{profile.about}</p>
                {/if}
            </div>
        </div>
</div>