<script>
    import { onMount } from "svelte";
    import { Pulse } from "svelte-loading-spinners";

    export let name;

    let profile;
    onMount(async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${name}`, {method: "GET"});
            const data = await response.json();

            profile = {
                name: data["login"],
                avatarUrl: data["avatar_url"],
                url: data["html_url"]
            }
        } catch (e) {
            console.log(e);
        }
    });
</script>

{#if profile !== undefined}
    <a class="rounded-xl shadow-xl w-full p-2 flex flex-row gap-2 items-center !no-underline duration-200 bg-gray-600/30 hover:bg-gray-500/30" href={profile.url}>
        <img src={profile.avatarUrl} class="h-8 rounded-2xl drop-shadow-xl" alt={profile.name.toLowerCase()} />
        <h5>{profile.name}</h5>
    </a>
{:else}
    <div class="rounded-xl shadow-xl w-full p-2 flex flex-row duration-200 bg-gray-600/30 hover:bg-gray-500/30">
        <div class="mx-auto">
            <Pulse color="#e5e7eb" />
        </div>
    </div>
{/if}