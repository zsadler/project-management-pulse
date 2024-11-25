<script setup lang="ts"> // eslint-disable-line
// ***** auto importing enabled *****
// supabaseQueries imports
import {
    type TaskWithProjects, tasksWithProjectQuery
} from '@/utils/supabaseQueries'

import { columns } from '@/utils/tableColumns/tasksColumns'

// importing page store from pinia
usePageStore().pageData.title = 'Tasks'

const tasks = ref<TaskWithProjects | null>(null)
const getTasks = async () => {
  const { data, error } = await tasksWithProjectQuery

  if (error)  console.error(error)

  tasks.value = data
  // console.log(tasks.value)
}

await getTasks()

</script>

<template>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped>

</style>