<script lang="ts">
    export let title: string;
</script>

<div class="flex flex-col gap-8 mb-8">
    <div class="flex gap-4 items-center">
        <svg width="24" height="24" class="flex-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" />
        </svg>
        <slot />
        <h3>{title}</h3>
    </div>
    <!-- separator span -->
    <span class="h-[2px] w-full bg-neutral-700"></span>
</div>
