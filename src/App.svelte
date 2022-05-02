<script>
	import { reveal } from "svelte-reveal";

	import Background from "./Background.svelte";
	import Logo from "./Logo.svelte";
	import ScrollHint from "./ScrollHint.svelte";
	import About from "./About.svelte";
	import FullScreenContainer from "./FullScreenContainer.svelte";
	import MinecraftProfile from "./MinecraftProfile.svelte";
	import Destiny2Profile from "./Destiny2Profile.svelte";
	import CoolPeople from "./CoolPeople.svelte";
	import Credits from "./Credits.svelte";
</script>

<main>
	<Background/>
	<ScrollHint/>

	<!-- content -->
	<div class="md:m-auto md:w-2/3">
		<Logo/>

		<div class="w-full flex flex-col items-center p-8">
			<!-- self promotion -->
			<FullScreenContainer>
				<h4 use:reveal>About me</h4>
				<About/>
			</FullScreenContainer>

			<!-- games -->
			<FullScreenContainer>
				<h4 use:reveal>Game profiles</h4>
				<MinecraftProfile uuid="2d4faffa-8e09-4627-9fdd-a0eddc2fc981"/>
				<Destiny2Profile id="24735536"/>
			</FullScreenContainer>

			<FullScreenContainer>
				<h4 use:reveal>Cool people</h4>
				<CoolPeople/>
			</FullScreenContainer>

			<FullScreenContainer>
				<h4 use:reveal>Credits</h4>
				<Credits/>
			</FullScreenContainer>
		</div>
	</div>
</main>