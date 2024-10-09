<script setup lang="ts">
import  { supabase } from  '@/lib/supabaseClient';
</script>

<template>
  <main>
    <RouterView />
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/project">Project (Singular)</router-link>
  </main>
</template>
