<script lang="ts">
	import Assignment from "$lib/common/icons/Assignment.svelte";
	import Attribution from "$lib/common/icons/Attribution.svelte";
	import Home from "$lib/common/icons/Home.svelte";
	import Person from "$lib/common/icons/Person.svelte";
	import SportsEsports from "$lib/common/icons/SportsEsports.svelte";
    import NavButton from "./NavButton.svelte";

    export let width: number;
</script>

<div bind:clientWidth={width} class="md:fixed flex flex-row items-center justify-evenly mb-4 mr-0 w-full md:h-screen md:mb-0 md:mr-4 md:w-fit md:flex-col md:justify-center md:items-start gap-4">
    <NavButton href="/" label="Home">
        <Home />
    </NavButton>
    <NavButton href="/aboutme" label="About me">
        <Person />
    </NavButton>
    <NavButton href="/games" label="Games">
        <SportsEsports />
    </NavButton>
    <NavButton href="/projects" label="Projects">
        <Assignment />
    </NavButton>
    <NavButton href="/credits" label="Credits">
        <Attribution />
    </NavButton>
</div>

