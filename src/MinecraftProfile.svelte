<script>
    import Card from "./Card.svelte";
    import { onMount } from "svelte";
    import VisitButton from "./VisitButton.svelte";
    import { Pulse } from 'svelte-loading-spinners'

    export let uuid;

    let profile = undefined;

    onMount(async () => {
        try {
            let response = await fetch(`https://api.ashcon.app/mojang/v2/user/${uuid}`, { method: "GET" });
            profile = await response.json();
        } catch (e) {
            console.log(e);
        }
    });
</script>

<Card>
    <div class="p-8 flex flex-col gap-8 md:flex-row">
        {#if profile !== undefined}
            <img src="https://visage.surgeplay.com/frontfull/{uuid}" alt={profile.username.toLowerCase()} class="drop-shadow-xl w-24 self-center rendering-pixelated md:self-start" />
            <div class="flex flex-col gap-8 w-full">
                <div class="w-full h-full">
                    <h4 class="mb-4"><img src="images/minecraft.webp" alt="minecraft" class="h-8 inline" /> {profile.username}</h4>
                    <p>UUID: {profile.uuid}</p>
                </div>
                <VisitButton class="self-end" href="https://namemc.com/profile/{profile.uuid}"/>
            </div>
        {:else}
            <div class="mx-auto">
                <Pulse color="#e5e7eb" />
            </div>
        {/if}
    </div>
</Card>