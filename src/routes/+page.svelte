<script lang="ts">
    import IntroBackground from "$lib/images/IntroBackground.svg";
    import Banner from "$lib/images/Banner.svg";
</script>

<div class="relative w-screen h-screen flex flex-col gap-8 justify-center items-center bg-repeat px-8" style="background-image: url('{IntroBackground}')">
    <div class="absolute bottom-0 w-full h-48 bg-gradient-to-b from-background/0 to-background" />
    <img src={Banner} alt="Banner"/>
    <h1 class="select-none text-center">The home of Reimnop's projects</h1>
</div>