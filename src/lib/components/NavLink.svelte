<script lang="ts">
    export let to = "";
    export let title = "";
</script>

<a href={to} class="relative h-fit flex gap-2 items-center rounded-lg overflow-hidden border-2 text-foreground border-foreground p-2 duration-200 [&>div]:hover:scale-y-100 hover:text-background">
    <div class="absolute h-full w-full left-0 top-0 bg-foreground origin-bottom scale-y-0 duration-200 -z-10" />
    <slot/>
    {#if title.length > 0}
        <span>{title}</span>
    {/if}
</a>