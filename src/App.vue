<script setup lang="ts">
import TopNavBar from '@/components/layout/TopNavBar.vue'
import SideBarNav from '@/components/layout/SideBarNav.vue'
</script>

<template>
    <SideBarNav />
    <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavBar />
      <main>
        <RouterView />
        <router-link to="/">Home</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/tasks">Tasks</router-link> |
        <router-link to="/project">Project (Singular)</router-link>
      </main>
    </div>
</template>
