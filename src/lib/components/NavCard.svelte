<script lang="ts">
    import ArrowRight from "~icons/lucide/arrow-right";

    export let href = "";
    export let title = "";
    export let description = "";
</script>

<a href={href} class="h-32 border-2 border-foreground rounded-lg flex gap-4 p-4 [&>#arrow-right]:hover:-translate-x-4">
    <slot/>
    <div class="flex flex-col gap-2">
        <h3 class="text-foreground">{title}</h3>
        <p class="text-foreground2">{description}</p>
    </div>
    <div class="ml-auto grid place-items-center duration-200" id="arrow-right">
        <ArrowRight class="h-8 w-8 text-foreground"/>
    </div>
</a>