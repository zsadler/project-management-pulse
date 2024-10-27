<script setup lang="ts">
</script>

<template>
    <SideBarNav />
    <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
        <TopNavBar />
        <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
            <div class="flex justify-between items-center">
                <h1 class="text-lg font-semibold md:text-2xl">Page Titles</h1>
            </div>
            <slot />
        </main>
    </div>
</template>

<style scoped>

</style>