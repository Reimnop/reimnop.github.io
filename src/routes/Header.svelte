<script lang="ts">
    import Logo from "$lib/images/Logo.svg";
	import NavLink from "./NavLink.svelte";
    import Home from "~icons/lucide/home";
</script>

<header class="min-h-24 p-6 border-b-4 border-foreground">
    <nav class="flex flex-wrap justify-center items-center gap-12">
        <a href="/" class="[&>img]:active:scale-90">
            <img class="h-12 duration-200 scale-100" src={Logo} alt="Logo"/>
        </a>
        <div class="flex flex-wrap justify-center items-center gap-6">
            <NavLink to="/" title="Home">
                <Home/>
            </NavLink>
            <NavLink to="/" title="Home">
                <Home/>
            </NavLink>
            <NavLink to="/" title="Home">
                <Home/>
            </NavLink>
            <NavLink to="/" title="Home">
                <Home/>
            </NavLink>
        </div>
    </nav>
</header>