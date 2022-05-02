<script>
    import Card from "./Card.svelte";
    import SocialButton from "./SocialButton.svelte";
</script>

<Card>
    <div class="p-8 flex flex-col gap-8 md:flex-row">
        <img src="images/reimnop.webp" width="256" height="256" class="shadow-xl rounded-[128px] self-center md:self-start" alt="reimnop"/>
        <div>
            <p>{new Date().getFullYear() - 2005}-year old passionate programming student.</p>
            <p>Main programming languages: <img class="inline h-6" src="images/cpp.svg" alt="c++"> <img class="inline h-6" src="images/csharp.svg" alt="c#"></p>
            <p>Nationality: <img class="inline h-6 rounded" src="images/vietnam.svg" alt="vietnam"></p>
            <h4 class="my-4">Socials</h4>
            <div class="flex flex-row gap-2">
                <SocialButton src="images/github.svg" alt="github" href="https://github.com/Reimnop" />
                <SocialButton src="images/twitter.svg" alt="twitter" href="https://twitter.com/Reimnop" />
                <SocialButton src="images/youtube.svg" alt="youtube" href="https://www.youtube.com/channel/UCPoVwDED176oehoqMU3j6JQ" />
            </div>
        </div>
    </div>
</Card>
