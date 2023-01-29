<script lang="ts">
	import "../app.css";
	
	import NavBar from "./NavBar.svelte";
    import { fly } from 'svelte/transition';
    import { page } from "$app/stores";

    $:refresh = $page.route.id;
</script>

<div class="flex flex-col md:flex-row h-screen">
    <NavBar/>
    {#key refresh}
        <div class="overflow-x-hidden overflow-y-auto w-full h-full p-8" in:fly={{y: 64, duration: 300}}>
            <slot/>
        </div>
    {/key}
</div>
