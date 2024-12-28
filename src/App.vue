<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue';

const errorStore = useErrorStore();

onErrorCaptured((error) => {
    console.log('Error captured in App.vue', JSON.stringify( error));
    errorStore.setError({ error });
    return true;
});

</script>

<template>
    <AuthLayout>
        <RouterView v-if="!errorStore.activeError" v-slot="{ Component, route }">
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
