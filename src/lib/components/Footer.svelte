<script lang="ts">
    import GitHubLine from "~icons/ri/github-line";
    import YouTubeLine from "~icons/ri/youtube-line";
    import TwitterLine from "~icons/ri/twitter-line";
	import Hyperlink from "./Hyperlink.svelte";
</script>

<footer class="min-h-24 p-6 mt-auto grid grid-rows-2 gap-2 border-t-4 border-foreground">
    <div class="flex justify-center items-center gap-2">
        <a class="text-2xl" href="https://github.com/Reimnop">
            <GitHubLine/>
        </a>
        <a class="text-2xl" href="https://www.youtube.com/@reimnop">
            <YouTubeLine/>
        </a>
        <a class="text-2xl" href="https://twitter.com/Reimnop">
            <TwitterLine/>
        </a>
    </div>
    <!-- TODO: Change link -->
    <span class="text-center">Copyright&copy; {new Date().getFullYear()} Reimnop | <Hyperlink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">License</Hyperlink></span>
</footer>