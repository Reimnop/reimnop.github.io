<script lang="ts">
    import Bar from "$lib/common/Bar.svelte";
	import Tooltip from "$lib/common/Tooltip.svelte";

    export let value: number;
    export let tooltip: string = "";
    export let delay = 0;

    let tooltipVisible = false;
    let tooltipX = 0;
    let tooltipY = 0;

    function updateTooltipPosition(event: MouseEvent) {
        tooltipX = event.pageX;
        tooltipY = event.pageY + 24;
    }
</script>

<div class="h-fit flex gap-4 items-center fill-neutral-100" on:mouseenter={() => tooltipVisible = true} on:mouseleave={() => tooltipVisible = false} on:mousemove={updateTooltipPosition}>
    <div class="rounded-xl bg-neutral-900 p-2">
        <slot/>
    </div>
    <Bar value={value} showDelay={delay} />
</div>

{#if tooltipVisible && tooltip.length > 0}
    <Tooltip text={tooltip} posX={tooltipX} posY={tooltipY} />
{/if}