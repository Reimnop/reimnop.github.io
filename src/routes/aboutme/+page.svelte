<script lang="ts">
    import PageWithTitle from "$lib/common/PageWithTitle.svelte";
    import Box from "$lib/common/Box.svelte";
    import BoxTitle from "$lib/common/BoxTitle.svelte";
    import ProfilePicture from "$lib/images/reimnop.webp";
    import IconField from "$lib/common/IconField.svelte";
    import Male from "$lib/common/icons/Male.svelte";
    import Badge from "$lib/common/icons/Badge.svelte";
    import Cake from "$lib/common/icons/Cake.svelte";
    import Work from "$lib/common/icons/Work.svelte";
	import ExperienceBar from "./ExperienceBar.svelte";
    import CSharp from "$lib/images/csharp.svg";
    import CPlusPlus from "$lib/images/cpp.svg";
    import Html5 from "$lib/images/html5.svg";
    import Css3 from "$lib/images/css3.svg";
    import Javascript from "$lib/images/javascript.svg";
	import GitHub from "$lib/common/icons/GitHub.svelte";
	import IconLink from "$lib/common/IconLink.svelte";
	import Twitter from "$lib/common/icons/Twitter.svelte";
</script>

<PageWithTitle title="ABOUT ME">
    <div class="flex flex-col gap-8">
        <Box>
            <BoxTitle title="Info"/>
            <div class="flex flex-col md:flex-row gap-8">
                <img class="rounded-full self-center" src={ProfilePicture} width="192" height="192" alt="reimnop">
                <!-- info fields -->
                <div class="w-full flex flex-col items-start gap-2">
                    <IconField text="Reimnop" tooltip="Username">
                        <Badge width={28} height={28} />
                    </IconField>
                    <IconField text="He/him" tooltip="Preferred pronouns">
                        <Male width={28} height={28} />
                    </IconField>
                    <IconField text="{new Date().getFullYear() - 2005} years" tooltip="Age">
                        <Cake width={28} height={28} />
                    </IconField>
                    <IconField text="Enthusiastic CS student; game developer" tooltip="Work and passion">
                        <Work width={28} height={28} />
                    </IconField>
                </div>
                <!-- social buttons -->
                <div class="flex flex-row md:flex-col justify-evenly">
                    <IconLink href="https://github.com/Reimnop" tooltip="GitHub">
                        <GitHub />
                    </IconLink>
                    <IconLink href="https://twitter.com/Reimnop" tooltip="Twitter">
                        <Twitter />
                    </IconLink>
                </div>
            </div>
        </Box>
        <Box>
            <BoxTitle title="Languages and experience"/>
            <div class="flex flex-col gap-8">
                <ExperienceBar value={100} tooltip="C#  -  {new Date().getFullYear() - 2017} years" delay={0}>
                    <img src={CSharp} width="32" height="32" alt="C#"/>
                </ExperienceBar>
                <ExperienceBar value={80} tooltip="C++  -  {new Date().getFullYear() - 2019} years" delay={100}>
                    <img src={CPlusPlus} width="32" height="32" alt="C++"/>
                </ExperienceBar>
                <ExperienceBar value={70} tooltip="HTML  -  {new Date().getFullYear() - 2020} years" delay={200}>
                    <img src={Html5} width="32" height="32" alt="HTML"/>
                </ExperienceBar>
                <ExperienceBar value={70} tooltip="CSS  -  {new Date().getFullYear() - 2020} years" delay={300}>
                    <img src={Css3} width="32" height="32" alt="CSS"/>
                </ExperienceBar>
                <ExperienceBar value={70} tooltip="JavaScript  -  {new Date().getFullYear() - 2020} years" delay={400}>
                    <img src={Javascript} width="32" height="32" alt="JavaScript"/>
                </ExperienceBar>
            </div>
        </Box>
    </div>
</PageWithTitle>