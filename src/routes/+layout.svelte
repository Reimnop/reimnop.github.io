<script lang="ts">
    import "../app.css";
    import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex flex-col min-h-screen">
    <Header/>
    <main>
        <slot/>
    </main>
    <Footer/>
</div>