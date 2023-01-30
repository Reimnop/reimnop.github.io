<script lang="ts">
    import PageWithTitle from "$lib/common/PageWithTitle.svelte";
	import Project from "./Project.svelte";
    import Catalyst from "$lib/images/catalyst.webp";
    import Reimnop from "$lib/images/reimnop.webp";
    import Discord4Fabric from "$lib/images/discord4fabric.webp";
</script>

<svelte:head>
    <title>Reimnop - Projects</title>
</svelte:head>

<PageWithTitle title="PROJECTS">
    <div class="flex flex-wrap gap-4">
        <Project title="Catalyst" description="Next-generation performance mod for Project Arrhythmia - Successor of Potassium" href="https://github.com/Reimnop/Catalyst">
            <img src={Catalyst} alt="Catalyst" class="w-32 h-32" />
        </Project>
        <Project title="Discord4Fabric" description="Empower your Minecraft <-> Discord chat experience with features from DiscordSRV!" href="https://www.curseforge.com/minecraft/mc-mods/discord4fabric">
            <img src={Discord4Fabric} alt="Discord4Fabric" class="w-32 h-32" />
        </Project>
        <Project title="reimnop.com" description="This website that you're on!" href="https://github.com/Reimnop/reimnop.github.io">
            <img src={Reimnop} alt="Reimnop" class="w-32 h-32 rounded-full" />
        </Project>
    </div>
</PageWithTitle>