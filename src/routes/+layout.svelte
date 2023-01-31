<script lang="ts">
	import "../app.css";
	
	import NavBar from "./NavBar.svelte";
    import { fly } from 'svelte/transition';
    import { page } from "$app/stores";

    $:refresh = $page.route.id;

    let navWidth = 0;
</script>

<svelte:head>
    <meta property="og:title" content="Reimnop's Website" />
    <meta property="og:description" content="Reimnop's personal website in a fresh coat of paint: a new standard of beauty." />
    <meta property="og:url" content="https://reimnop.com/" />
</svelte:head>

<!-- background element -->
<div class="fixed h-screen w-screen bg-gradient-to-t from-neutral-900 to-black bg-fixed bg-no-repeat bg-cover -z-10" />
<div class="min-h-screen">
    <NavBar bind:width={navWidth} />
    <div class="w-full h-full flex">
        <!-- this div just pushes content -->
        <div style="margin-left: {navWidth}px;" class="hidden md:block"></div>
        {#key refresh}
            <div class="w-full h-screen p-8" in:fly={{y: 64, duration: 300}}>
                <slot />
            </div>
        {/key}
    </div>
</div>
