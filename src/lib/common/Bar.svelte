<script lang="ts">
	import { onMount } from "svelte";
    import { Color } from "./Color";

    export let value: number;
    export let showDelay = 0;

    const left: Color = Color.rgb(74, 222, 128);
    const right: Color = Color.rgb(187, 247, 208);

    let shownValue = 0;
    onMount(() => {
        setTimeout(() => shownValue = value, showDelay);
    });

    function interpolate(a: Color, b: Color, t: number): Color {
        return Color.rgb(
            a.r + (b.r - a.r) * t,
            a.g + (b.g - a.g) * t,
            a.b + (b.b - a.b) * t
        );
    }
</script>

<div class="w-full h-4 rounded-lg bg-neutral-900">
    <span class="h-4 rounded-lg block duration-[600ms]" style="width: {shownValue}%; background: linear-gradient(to right, {left}, {interpolate(left, right, value / 100.0)})"></span>
</div>