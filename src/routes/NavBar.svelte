<script lang="ts">
	import Assignment from "$lib/common/icons/Assignment.svelte";
	import Home from "$lib/common/icons/Home.svelte";
	import Person from "$lib/common/icons/Person.svelte";
	import SportsEsports from "$lib/common/icons/SportsEsports.svelte";
    import NavButton from "./NavButton.svelte";
</script>

<div class="flex flex-row items-center justify-evenly mb-4 mr-0 w-full md:mb-0 md:mr-4 md:w-fit md:flex-col md:justify-center md:items-start gap-4">
    <NavButton href="/" label="Home">
        <Home slot="icon"/>
    </NavButton>
    <NavButton href="/aboutme" label="About me">
        <Person slot="icon"/>
    </NavButton>
    <NavButton href="/games" label="Games">
        <SportsEsports slot="icon"/>
    </NavButton>
    <!--
    <NavButton href="/projects" label="Projects">
        <Assignment slot="icon"/>
    </NavButton>
    -->
    <p class="px-4 text-neutral-700">not all pages are fully implemented!</p>
</div>

