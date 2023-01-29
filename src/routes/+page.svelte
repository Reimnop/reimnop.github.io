<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import ArrowCircleLeft from "$lib/common/icons/ArrowCircleLeft.svelte";

    const targetText = "REIMNOP";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let text = "";

    let showInstructionIcon = false;

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    onMount(async () => {
        await animate();
    });

    async function animate() {
        await animateTitle();
        showInstructionIcon = true;
    }

    async function animateTitle() {
        const length = targetText.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < 5; j++) {
                let currentText = targetText.substring(0, i);
                for (let k = i; k < length; k++) {
                    currentText += letters[Math.floor(Math.random() * letters.length)];
                }
                text = currentText;
                await sleep(60);
            }
        }
        text = targetText;
    }
</script>

{#if showInstructionIcon}
    <!-- instruction icon -->
    <!-- centering div -->
    <div class="absolute fill-neutral-700 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2">
        <!-- animation div -->
        <div class="animate-pulse-bounce-up md:animate-pulse-bounce-left w-fit" in:fade={{duration:300}}>
            <!-- mobile rotate div -->
            <div class="rotate-90 md:rotate-0 w-fit">
                <ArrowCircleLeft/>
            </div>
        </div>
    </div>
{/if}

<!-- title -->
<div class="h-full grid place-items-center">
    <h1 class="text-7xl md:text-9xl tracking-widest font-incosolata duration-300 hover:scale-110 animate-pulse uppercase">{text}</h1>
</div>
