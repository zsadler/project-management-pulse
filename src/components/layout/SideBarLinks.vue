<script setup lang="ts">
interface LinkProp {
    to: string;
    icon: string;
    title: string;
}

defineProps<{
    links: LinkProp[];
}>()
</script>

<template>
    <RouterLink v-for="link in links"
                :key="link.to"
                :to="link.to"
                :title="link.title"
        class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
    >
        <iconify-icon :icon="link.icon"></iconify-icon>
        <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </RouterLink>
</template>

<style scoped>
.router-link-active {
    color: var(--color-primary);
    background-color: var(--color-primary-foreground);
}
</style>