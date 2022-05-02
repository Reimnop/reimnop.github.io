<script>
    import { reveal } from 'svelte-reveal';

    let clazz;
    export { clazz as class };
</script>

<div class={clazz} use:reveal>
    <div class="w-full h-full rounded-xl shadow-xl backdrop-blur-sm duration-200 bg-gray-700/30 hover:bg-gray-600/30">
        <slot/>
    </div>
</div>