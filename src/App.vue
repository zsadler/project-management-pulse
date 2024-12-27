<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

const { activeError } = storeToRefs(useErrorStore())
</script>

<template>
    <AuthLayout>
        <RouterView v-if="!activeError" v-slot="{ Component, route }">
            <Suspense v-if="Component" :timeout="1">
                <Component :is="Component" :key="route.name" />
                <template #fallback>
                    <span> Loading...</span>
                </template>
            </Suspense>
        </RouterView>

        <AppErrorPage v-else   />

    </AuthLayout>
</template>
