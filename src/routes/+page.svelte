<script lang="ts">
    import IntroBackground from "$lib/images/IntroBackground.svg";
    import Banner from "$lib/images/Banner.svg";
</script>

<div class="relative w-screen h-screen grid place-items-center bg-repeat px-8" style="background-image: url('{IntroBackground}')">
    <div class="absolute bottom-0 w-full h-48 bg-gradient-to-b from-background/0 to-background" />
    <img src={Banner} alt="Banner"/>
</div>
<h1 class="text-center my-32">
    <span class="bg-gradient-to-r from-accent to-foreground box-decoration-clone bg-clip-text text-transparent w-fit">Parcel</span>
    is Reimnop's collection of personal software projects.
</h1>