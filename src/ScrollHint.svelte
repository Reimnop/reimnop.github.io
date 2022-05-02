<script>
    let y;
</script>

<svelte:window bind:scrollY={y} />

{#if y < 120}
    <div class="fixed bottom-2 translate-x-[calc(50vw-50%)]" style="opacity: {1.0 - Math.max(0.0, y / 120.0)}">
        <div class="animate-bounce">
            <p class="text-center italic text-gray-400 opacity-0 animate-reveal2">scroll down</p>
        </div>
    </div>
{/if}