<script lang="ts">
    import IntroBackground from "$lib/images/IntroBackground.svg";
    import Banner from "$lib/images/Banner.svg";
    import Search from "~icons/lucide/search";
    import Wrench from "~icons/lucide/wrench";
    import Gamepad2 from "~icons/lucide/gamepad-2";
    import NavCard from "$lib/components/NavCard.svelte";
</script>

<div class="relative w-screen h-screen grid place-items-center bg-repeat px-8" style="background-image: url('{IntroBackground}')">
    <div class="absolute bottom-0 w-full h-48 bg-gradient-to-b from-background/0 to-background" />
    <img src={Banner} alt="Banner"/>
</div>
<div class="mx-8 my-16 flex flex-col items-center">
    <div class="flex flex-col gap-16 max-w-[64rem] w-full">
        <h1 class="text-center">
            <span class="bg-gradient-to-r from-accent to-foreground box-decoration-clone bg-clip-text text-transparent w-fit">Parcel</span>
            is a collection of Reimnop's personal projects.
        </h1>
        <div class="flex flex-col gap-8">
            <h2><Search class="inline-block align-text-bottom"/> Explore</h2>
            <nav class="grid md:grid-cols-2 gap-4">
                <NavCard href="/pa" title="Project Arrhythmia" description="Tools and mods for Project Arrhythmia.">
                    <Wrench class="text-[5rem]"/>
                </NavCard>
                <NavCard href="/games" title="Games" description="Fun browser games.">
                    <Gamepad2 class="text-[5rem]"/>
                </NavCard>
            </nav>
        </div>
    </div>
</div>