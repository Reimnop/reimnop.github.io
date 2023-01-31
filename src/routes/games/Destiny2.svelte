<script lang="ts">
    import Badge from "$lib/common/icons/Badge.svelte";
    import Box from "$lib/common/Box.svelte";
    import BoxTitle from "$lib/common/BoxTitle.svelte";
    import Destiny2 from "$lib/images/destiny2.webp";
    import LoadSpinner from "$lib/common/LoadSpinner.svelte";
    import IconField from "$lib/common/IconField.svelte";
    import IconLink from "$lib/common/IconLink.svelte";
    import OpenInNew from "$lib/common/icons/OpenInNew.svelte";
    import { onMount } from "svelte";
	import { Destiny2Character, Destiny2Profile } from "./Destiny2Profile";
	import D2CharacterDisplay from "./D2CharacterDisplay.svelte";

    const apiKey = "5ea3978f02a54d75ab7938f7dfa33d21";

    export let id: string;

    let profile: Destiny2Profile | undefined;

    onMount(async () => {
        try {
            const memberships = await getMemberships(id);
            const membership = memberships.Response.destinyMemberships[0];
            const d2Profile = await getDestiny2Profile(membership);
            const user = await getBungieNetUser(id);
            const charEntries = Object.entries(d2Profile.Response.characters.data);
            let characters: Destiny2Character[] = [];
            for (const [k, v] of charEntries) {
                let _v = v as any;
                let character: Destiny2Character = new Destiny2Character(
                    _v.classType === 0 ? "Titan" : (_v.classType === 1 ? "Hunter" : (_v.classType === 2 ? "Warlock" : "Unknown")),
                    _v.light as number,
                    _v.minutesPlayedTotal as number / 60.0,
                    `https://www.bungie.net${_v.emblemPath}`
                );
                characters.push(character);
            }
            let name: string = user.Response.cachedBungieGlobalDisplayName;
            let code: string = user.Response.cachedBungieGlobalDisplayNameCode;
            let profilePicture = `https://www.bungie.net${user.Response.profilePicturePath}`;

            profile = new Destiny2Profile(name, code, profilePicture, id, characters);
        } catch (e) {
            console.error(e);
        }
    })

    async function getBungieNetUser(id: string): Promise<any> {
        const response = await fetch(`https://www.bungie.net/Platform/User/GetBungieNetUserById/${id}/`, {
            method: "GET",
            headers: {
                "X-API-Key": apiKey
            }
        });
        return await response.json();
    }

    async function getMemberships(id: string, membershipType = 254): Promise<any> {
        const response = await fetch(`https://www.bungie.net/Platform/User/GetMembershipsById/${id}/${membershipType}`, {
            method: "GET",
            headers: {
                "X-API-Key": apiKey
            }
        });
        return await response.json();
    }

    async function getDestiny2Profile(membership: any): Promise<any> {
        const response = await fetch(`https://www.bungie.net/Platform/Destiny2/${membership.membershipType as string}/Profile/${membership.membershipId as string}/?components=200`, {
            method: "GET",
            headers: {
                "X-API-Key": apiKey
            }
        });
        return await response.json();
    }
</script>

<Box>
    <BoxTitle title="Destiny 2">
        <img src={Destiny2} width="40" height="40" alt="Destiny 2">
    </BoxTitle>

    {#if profile}
        <div class="flex flex-col md:flex-row gap-8">
            <img class="h-[90px] self-center md:self-start" src={profile.profilePicture} alt="{profile.name}#{profile.code}">
            <div class="flex flex-col w-full items-start gap-4">
                <IconField text="{profile.name}#{profile.code}" tooltip="Username">
                    <Badge width={28} height={28} />
                </IconField>
                <div class="flex flex-col gap-4 w-full">
                    {#each profile.characters as character}
                        <D2CharacterDisplay character={character} />
                    {/each}
                </div>
            </div>
            <div class="flex flex-row md:flex-col justify-evenly">
                <IconLink href="https://www.bungie.net/7/en/User/Profile/BungieNext/{profile.id}" tooltip="Visit bungie.net">
                    <OpenInNew />
                </IconLink>
            </div>
        </div>
    {:else}
        <div class="grid place-items-center">
            <LoadSpinner radius={32} thickness={12} color="#f5f5f5" />
        </div>
    {/if}
</Box>