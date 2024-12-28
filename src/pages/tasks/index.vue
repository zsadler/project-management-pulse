<script setup lang="ts">
// eslint-disable-line
// ***** auto importing enabled *****
// supabaseQueries imports
import { type TaskWithProjects, tasksWithProjectQuery } from '@/utils/supabaseQueries'

import { columns } from '@/utils/tableColumns/tasksColumns'

// importing page store from pinia
usePageStore().pageData.title = 'Tasks'

 // Reactive reference to hold the tasks data.
const tasks = ref<TaskWithProjects | null>(null)

// Define a function to fetch all the tasks data
const getTasks = async () => {
    const { data, error, status } = await tasksWithProjectQuery;
    if (error) useErrorStore().setError({ error, errorCode: status });

    tasks.value = data;
}
// Update the template with the fetched data
await getTasks()
newd;
</script>

<template>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
