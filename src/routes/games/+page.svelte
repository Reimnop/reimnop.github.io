<script lang="ts">
    import PageWithTitle from "$lib/common/PageWithTitle.svelte";
	import Destiny2 from "./Destiny2.svelte";
	import Minecraft from "./Minecraft.svelte";
</script>

<svelte:head>
    <title>Reimnop - Games</title>
</svelte:head>

<PageWithTitle title="GAMES">
    <div class="flex flex-col gap-8">
        <Minecraft uuid="2d4faffa-8e09-4627-9fdd-a0eddc2fc981" />
        <Destiny2 id="24735536"/>
    </div>
</PageWithTitle>