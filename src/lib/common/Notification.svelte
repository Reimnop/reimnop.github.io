<script lang="ts">
    import { fly } from 'svelte/transition';

    export let text: string;
</script>

<div class="absolute h-fit w-fit flex items-center gap-4 rounded-xl p-4 bg-neutral-700 shadow-xl z-10 bottom-8 left-1/2 -translate-x-1/2 overflow-hidden"
     transition:fly={{y:16, duration: 300}}>
    <slot />
    <h5>{text}</h5>
</div>
