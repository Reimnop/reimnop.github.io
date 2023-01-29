<script lang="ts">
    let clazz = "";
    export { clazz as class };
</script>

<div class="bg-neutral-800 rounded-xl p-8 {clazz}">
    <slot/>
</div>