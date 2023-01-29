<script lang="ts">
    export let title: string;
</script>

<div class="flex flex-col gap-8 mb-8">
    <div class="flex gap-4 items-center">
        <svg width="16" height="24" class="flex-none" viewBox="0 0 32 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32V0L32 24L0 48Z"/>
        </svg>
        <slot />
        <h3>{title}</h3>
    </div>
    <!-- separator span -->
    <span class="h-[2px] w-full bg-neutral-700"></span>
</div>
