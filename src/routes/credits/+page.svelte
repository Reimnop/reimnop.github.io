<script>
	import Box from "$lib/common/Box.svelte";
	import BoxTitle from "$lib/common/BoxTitle.svelte";
    import PageWithTitle from "$lib/common/PageWithTitle.svelte";
	import Friend from "./Friend.svelte";
</script>

<svelte:head>
    <title>Reimnop - Credits</title>
</svelte:head>

<PageWithTitle title="CREDITS">
    <div class="flex flex-col gap-8">
        <Box>
            <BoxTitle title="My very cool friends!"/>
            <div class="flex flex-wrap gap-4">
                <Friend name="enchart" />
                <Friend name="GermanBread" />
                <Friend name="CrimsonCrips" />
                <Friend name="Miv2nir" />
                <Friend name="Xenon1345" />
                <Friend name="Malosdaf" />
            </div>
        </Box>
        <Box>
            <BoxTitle title="Technologies"/>
            <p>Made using <a href="https://kit.svelte.dev/">SvelteKit</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a></p>
            <p>Font and icons from <a href="https://fonts.google.com.">Google Fonts</a></p>
            <p>Thank you to <a href="https://visage.surgeplay.com/">Visage</a> for providing lovely Minecraft avatars! ❤️</p>
        </Box>
        <Box>
            <BoxTitle title="And finally, enjoy this 3D render!"/>
            <img src="https://media.discordapp.net/attachments/732798606574354447/1067116656159113226/lucasvscrimson2.png" alt="3D render of me" class="w-full h-full rounded-xl" />
        </Box>
    </div>
</PageWithTitle>