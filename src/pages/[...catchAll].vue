<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue';
useErrorStore().setError({ error: 'Page not found', errorCode: 404 });
</script>

<template>
    <AppErrorPage />
</template>


