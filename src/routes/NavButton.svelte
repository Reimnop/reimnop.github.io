<script lang="ts">
    import { page } from '$app/stores';

    export let href: string;
    export let label: string;

    $:active = $page.route.id === href;
</script>

<a class="flex flex-col md:flex-row gap-4 items-center duration-300 fill-neutral-700 no-underline link" class:active={active} href={href}>
    <div class="duration-300 scale-x-0 scale-y-100 origin-center md:scale-y-0 md:scale-x-100 fill-transparent" class:active-div={active}>
        <svg class="hidden md:block" width="8" height="48" viewBox="0 0 8 48">
            <path d="M0 0V0C4.41828 0 8 3.58172 8 8V40C8 44.4183 4.41828 48 0 48V48V0Z"/>
        </svg>
        <svg class="block md:hidden" width="48" height="8" viewBox="0 0 48 8">
            <path d="M0 0H48V0C48 4.41828 44.4183 8 40 8H8C3.58172 8 0 4.41828 0 0V0Z"/>
        </svg>
    </div>
    <slot />
    <h5 class="duration-300 origin-left scale-x-0 text-transparent whitespace-nowrap hidden md:block">{label}</h5>
</a>

<style lang="postcss">
    .link:hover {
        @apply active;
    }

    .active {
        @apply fill-neutral-100 scale-x-100 text-neutral-100;
    }

    .active > h5 {
        @apply text-neutral-100 scale-x-100;
    }

    .active-div {
        @apply fill-neutral-100 scale-100;
    }
</style>