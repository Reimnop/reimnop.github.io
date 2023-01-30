<script lang="ts">
	import ContentCopy from "./icons/ContentCopy.svelte";
    import Done from "./icons/Done.svelte";
    import Notification from "./Notification.svelte";
    import Tooltip from "./Tooltip.svelte";

    export let text: string;
    export let tooltip: string = "";
    export let copiable = false;

    let tooltipVisible = false;
    let tooltipX = 0;
    let tooltipY = 0;

    let notificationVisible = false;

    function updateTooltipPosition(event: MouseEvent) {
        tooltipX = event.pageX;
        tooltipY = event.pageY + 24;
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(text);
        showNotification();
    }

    function showNotification() {
        notificationVisible = true;
        setTimeout(() => notificationVisible = false, 2000);
    }
</script>

<div class="h-fit flex gap-4 items-center" on:mouseenter={() => tooltipVisible = true} on:mouseleave={() => tooltipVisible = false} on:mousemove={updateTooltipPosition}>
    <div class="rounded-xl bg-neutral-900 p-2">
        <slot/>
    </div>
    {#if copiable}
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <a class="text-xl no-underline cursor-pointer" on:click={copyToClipboard}>
            {text}
            <span class="inline-block ml-2">
                <ContentCopy width={18} height={18}/>
            </span>
        </a>
    {:else}
        <span class="text-xl">{text}</span>
    {/if}
</div>

{#if tooltipVisible && tooltip.length > 0}
    <Tooltip text={tooltip} posX={tooltipX} posY={tooltipY} />
{/if}

{#if notificationVisible}
    <Notification text="Copied to clipboard!">
        <Done />
    </Notification>
{/if}