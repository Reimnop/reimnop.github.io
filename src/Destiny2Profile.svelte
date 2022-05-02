<script>
    import { onMount } from "svelte";
    import VisitButton from "./VisitButton.svelte";
    import Card from "./Card.svelte";
    import { Pulse } from "svelte-loading-spinners";

    const apiKey = "5ea3978f02a54d75ab7938f7dfa33d21";

    export let id;

    let profile;

    onMount(async () => {
        try {
            const memberships = await getMemberships(id);
            const membership = memberships["Response"]["destinyMemberships"][0];
            const d2Profile = await getDestiny2Profile(membership);
            const user = await getBungieNetUser(id);

            const charEntries = Object.entries(d2Profile["Response"]["characters"]["data"]);

            let characters = []
            for (const [k, v] of charEntries) {
                let character = {
                    className: v["classType"] === 0 ? "Titan" : (v["classType"] === 1 ? "Hunter" : (v["classType"] === 2 ? "Warlock" : "Unknown")),
                    light: v["light"],
                    hoursPlayed: v["minutesPlayedTotal"] / 60.0,
                    emblemUrl: `https://www.bungie.net${v["emblemPath"]}`
                }
                characters.push(character);
            }

            profile = {
                bungieNetId: id,
                displayName: user["Response"]["cachedBungieGlobalDisplayName"],
                displayNameCode: user["Response"]["cachedBungieGlobalDisplayNameCode"],
                profilePictureUrl: `https://www.bungie.net${user["Response"]["profilePicturePath"]}`,
                characters: characters
            }
        } catch (e) {
            console.log(e);
        }
    })

    async function getBungieNetUser(id) {
        const response = await fetch(`https://www.bungie.net/Platform/User/GetBungieNetUserById/${id}/`, {
            method: "GET",
            headers: {
                "X-API-Key": apiKey
            }
        });
        return await response.json();
    }

    async function getMemberships(id, membershipType = 254) {
        const response = await fetch(`https://www.bungie.net/Platform/User/GetMembershipsById/${id}/${membershipType}`, {
            method: "GET",
            headers: {
                "X-API-Key": apiKey
            }
        });
        return await response.json();
    }

    async function getDestiny2Profile(membership) {
        const response = await fetch(`https://www.bungie.net/Platform/Destiny2/${membership["membershipType"]}/Profile/${membership["membershipId"]}/?components=200`, {
            method: "GET",
            headers: {
                "X-API-Key": apiKey
            }
        });
        return await response.json();
    }
</script>

<Card>
    <div class="p-8 flex flex-col gap-8 md:flex-row">
        {#if profile !== undefined}
            <img src={profile.profilePictureUrl} class="drop-shadow-xl w-24 self-center md:self-start" alt="bungie profile picture" />
            <div class="flex flex-col gap-8 w-full">
                <div class="w-full h-full">
                    <h4 class="mb-4"><img src="images/destiny2.webp" alt="destiny 2" class="h-8 inline" /> {profile.displayName}<span class="text-base text-gray-400">#{profile.displayNameCode}</span></h4>
                    <div class="flex flex-col gap-2 w-full">
                        {#each profile.characters as character}
                            <div class="w-full shadow-xl rounded-r-xl duration-200 bg-gray-600/30 hover:bg-gray-500/30 flex flex-row gap-2">
                                <img src={character.emblemUrl} alt="emblem" class="w-20" />
                                <div>
                                    <b>{character.className}</b>
                                    <p>Light: {character.light}</p>
                                    <p>Playtime: {Math.floor(character.hoursPlayed)} hours</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <VisitButton class="self-end" href="https://www.bungie.net/7/en/User/Profile/BungieNext/{profile.bungieNetId}"/>
            </div>
        {:else}
            <div class="mx-auto">
                <Pulse color="#e5e7eb" />
            </div>
        {/if}
    </div>
</Card>