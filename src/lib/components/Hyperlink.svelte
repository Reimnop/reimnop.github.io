<script lang="ts">
    import SquareArrowOutUpRight from "~icons/lucide/square-arrow-out-up-right";

    export let href = "";
</script>

<a href={href}>
    <slot/>
    <SquareArrowOutUpRight class="inline-block w-4 h-4"/>
</a>