<script setup lang="ts"> // eslint-disable-line
// auto importing enabled
import { columns } from '@/utils/tableColumns/projectsColumns'

// supabaseQueries imports
import {
    type Projects, projectsQuery
} from '@/utils/supabaseQueries'

// importing page store from pinia
usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
    const { data, error } = await projectsQuery

  if (error)  console.error(error)

  projects.value = data
  // console.log(projects.value)
}

await getProjects()


</script>

<template>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
