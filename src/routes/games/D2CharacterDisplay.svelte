<script lang="ts">
    import Schedule from "$lib/common/icons/Schedule.svelte";
    import Bolt from "$lib/common/icons/Bolt.svelte";
    import IconField from "$lib/common/IconField.svelte";
    import Tooltip from "$lib/common/Tooltip.svelte";
    import type { Destiny2Character } from "./Destiny2Profile";

    export let character: Destiny2Character;

    let tooltipVisible = false;
    let tooltipX = 0;
    let tooltipY = 0;

    function updateTooltipPosition(event: MouseEvent) {
        tooltipX = event.clientX;
        tooltipY = event.clientY + 24;
    }
</script>

<div class="border-2 border-neutral-700 rounded-xl flex w-full overflow-hidden">
    <img class="h-[96px]" src={character.emblem} alt="{character.name}" on:mouseenter={() => tooltipVisible = true} on:mouseleave={() => tooltipVisible = false} on:mousemove={updateTooltipPosition}>
    <div class="pl-4 p-2 flex flex-col gap-2">
        <IconField text="{character.light.toString()}" tooltip="Light">
            <Bolt width={20} height={20} />
        </IconField>
        <IconField text="{Math.round(character.playtime)} hours" tooltip="Playtime">
            <Schedule width={20} height={20} />
        </IconField>
    </div>
</div>

{#if tooltipVisible}
    <Tooltip text={character.name} posX={tooltipX} posY={tooltipY} />
{/if}