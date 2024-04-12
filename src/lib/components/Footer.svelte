<script lang="ts">
    import GitHubLine from "~icons/ri/github-line";
    import YouTubeLine from "~icons/ri/youtube-line";
    import TwitterLine from "~icons/ri/twitter-line";
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
    <!-- TODO: Change All Rights Reserved to a free license -->
    <span class="text-center">Copyright&copy; {new Date().getFullYear()} Reimnop. All Rights Reserved.</span>
</footer>