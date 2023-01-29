<script lang="ts">
	import { onMount } from "svelte";
	import ProgressCircle from "./ProgressCircle.svelte";

    export let radius: number;
    export let thickness: number;
    export let color: string;
</script>

<div class="animate-spin">
    <ProgressCircle radius={radius} thickness={thickness} color={color} value={30} />
</div>

