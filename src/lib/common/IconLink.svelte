<script lang="ts">
    import Tooltip from "./Tooltip.svelte";

    export let href: string;
    export let tooltip: string = "";

    let tooltipVisible = false;
    let tooltipX = 0;
    let tooltipY = 0;

    function updateTooltipPosition(event: MouseEvent) {
        tooltipX = event.pageX;
        tooltipY = event.pageY + 24;
    }
</script>

<!-- on firefox, fill-neutral-100 isn't needed -->
<!-- might be a chrome bug, I'm not sure -->
<a class="fill-neutral-100 duration-300 hover:scale-110" href={href} target="_blank" rel="noreferrer" on:mouseenter={() => tooltipVisible = true} on:mouseleave={() => tooltipVisible = false} on:mousemove={updateTooltipPosition}>
    <slot />
</a>

{#if tooltipVisible && tooltip.length > 0}
    <Tooltip text={tooltip} posX={tooltipX} posY={tooltipY} />
{/if}