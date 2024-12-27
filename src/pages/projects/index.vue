<script setup lang="ts"> // eslint-disable-line
// auto importing enabled
import { columns } from '@/utils/tableColumns/projectsColumns';

// supabaseQueries imports
import {
    type Projects, projectsQuery
} from '@/utils/supabaseQueries'
import DataTable from '@/components/ui/data-table/DataTable.vue';

// importing page store from pinia
usePageStore().pageData.title = 'Projects';

// Reactive reference to hold the projects  data.
const projects = ref<Projects | null>(null);

// Define a function to fetch all projects data
const getProjects = async () => {
    const { data, error, status } = await projectsQuery;
    if (error) if (error) useErrorStore().setError({ error, errorCode: status });

    projects.value = data;
}

await getProjects();
</script>

<template>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
