<script setup lang="ts"> // eslint-disable-line
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type {Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')

  if (error)  console.error(error)

  tasks.value = data
  console.log(tasks.value)
})()
</script>

<template>
  <h1>Tasks</h1>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>