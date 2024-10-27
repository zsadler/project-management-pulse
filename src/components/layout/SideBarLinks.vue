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
                exact-active-class="text-primary bg-muted"
                :key="link.to"
                :to="link.to"
                :title="link.title"
        class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
    >
        <iconify-icon :icon="link.icon"></iconify-icon>
        <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </RouterLink>
</template>
