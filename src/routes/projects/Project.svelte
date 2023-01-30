<script lang="ts">
	import Box from "$lib/common/Box.svelte";
	import IconLink from "$lib/common/IconLink.svelte";
	import OpenInNew from "$lib/common/icons/OpenInNew.svelte";

    export let title: string;
    export let description: string;
    export let href: string;
</script>

<Box class="flex-grow basis-96">
    <div class="flex flex-col md:flex-row h-full gap-8">
        <!-- image -->
        <div class="self-center flex-none">
            <slot />
        </div>
        <!-- info -->
        <div class="w-full flex flex-col gap-2">
            <h5>{title}</h5>
            <!-- separator span -->
            <span class="h-[2px] w-full bg-neutral-700"></span>
            <p>{description}</p>
        </div>
        <!-- link -->
        <div class="flex flex-row md:flex-col justify-evenly">
            <IconLink href={href}>
                <OpenInNew width={28} height={28} />
            </IconLink>
        </div>
    </div>
</Box>