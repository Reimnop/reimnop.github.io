<script lang="ts">
    export let title: string;
</script>

<div class="max-w-6xl mx-auto flex flex-col gap-8">
    <h1 class="self-center w-fit uppercase duration-300 hover:scale-110">{title}</h1>
    <!-- separator span -->
    <span class="h-[2px] w-full bg-neutral-700"></span>
    <slot/>
</div>