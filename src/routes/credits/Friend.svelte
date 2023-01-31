<script lang="ts">
	import { onMount } from "svelte";
	import { GitHubUser } from "./GitHubUser";
    import IconLink from "$lib/common/IconLink.svelte";
    import OpenInNew from "$lib/common/icons/OpenInNew.svelte";
    import LoadSpinner from "$lib/common/LoadSpinner.svelte";

    export let name: string;

    let profile: GitHubUser | undefined;

    onMount(async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${name}`);
            const data = await response.json();
            let username: string = data.login;
            let avatar: string = data.avatar_url;
            let url: string = data.html_url;
            let bio: string = data.bio;
            profile = new GitHubUser(username, avatar, url, bio);
        } catch (e) {
            console.error(e);
        }
    })
</script>

<div class="p-4 border-2 border-neutral-700 rounded-xl flex-grow basis-96">
    {#if profile}
        <div class="flex flex-col md:flex-row h-full gap-8">
            <!-- image -->
            <div class="self-center flex-none">
                <img src={profile.avatar} alt={profile.username} class="h-[96px] rounded-full self-center flex-none" />
            </div>
            <!-- info -->
            <div class="w-full flex flex-col gap-2">
                <h5>{profile.username}</h5>
                {#if profile.bio}
                    <!-- separator span -->
                    <span class="h-[2px] w-full bg-neutral-700"></span>
                    <p>{profile.bio}</p>
                {/if}
            </div>
            <!-- link -->
            <div class="flex flex-row md:flex-col justify-evenly">
                <IconLink href={profile.url}>
                    <OpenInNew width={28} height={28} />
                </IconLink>
            </div>
        </div>
    {:else}
        <div class="grid place-items-center">
            <LoadSpinner radius={16} thickness={6} color="#f5f5f5" />
        </div>
    {/if}
</div>