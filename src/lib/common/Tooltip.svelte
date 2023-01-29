<script lang="ts">
    import { fly } from "svelte/transition";

    export let text: string;

    export let posX = 0;
    export let posY = 0;
</script>

<div class="absolute h-fit w-fit rounded-xl p-4 bg-neutral-700 shadow-xl z-10 overflow-hidden"
     style="left: {posX}px; top: {posY}px;"
     transition:fly={{y:16, duration: 300}}>
    <h6 class="font-normal">{text}</h6>
</div>