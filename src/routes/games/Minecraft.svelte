<script lang="ts">
	import Box from "$lib/common/Box.svelte";
	import BoxTitle from "$lib/common/BoxTitle.svelte";
	import IconField from "$lib/common/IconField.svelte";
	import Badge from "$lib/common/icons/Badge.svelte";
	import Key from "$lib/common/icons/Key.svelte";
    import OpenInNew from "$lib/common/icons/OpenInNew.svelte";
    import IconLink from "$lib/common/IconLink.svelte";
	import LoadSpinner from "$lib/common/LoadSpinner.svelte";
    import Minecraft from "$lib/images/minecraft.webp";
    import { onMount } from "svelte";
	import { McProfile } from "./McProfile";

    export let uuid: string;

    let profile: McProfile | undefined;

    onMount(async () => {
        try {
            let response: Response = await fetch(`https://api.ashcon.app/mojang/v2/user/${uuid}`, { method: "GET" });
            let data = await response.json();
            let name: string = data.username;
            let uuid2: string = data.uuid;
            profile = new McProfile(name, uuid2);
        } catch (e) {
            console.error(e);
        }
    });
</script>

<Box>
    <BoxTitle title="Minecraft">
        <img src={Minecraft} width="40" height="40" alt="Minecraft">
    </BoxTitle>

    {#if profile}
        <div class="flex flex-col md:flex-row gap-8">
            <img class="h-[192px] self-center" src="https://visage.surgeplay.com/frontfull/192/{profile.uuid}" alt={profile.name}>
            <div class="flex flex-col w-full items-start gap-2">
                <IconField text={profile.name} tooltip="Username">
                    <Badge width={28} height={28} />
                </IconField>
                <IconField text={profile.uuid} tooltip="UUID" copiable={true}>
                    <Key width={28} height={28} />
                </IconField>
            </div>
            <div class="flex flex-row md:flex-col justify-evenly">
                <IconLink href="https://namemc.com/profile/{profile.name}" tooltip="Visit NameMC">
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