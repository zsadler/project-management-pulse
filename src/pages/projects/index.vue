<script setup lang="ts"> // eslint-disable-line
// auto importing enabled
import type {Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'

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

const columns: ColumnDef<Tables<'projects'>>[] = [
    {
        accessorKey: 'id',
        header: () => h('div', {class: 'text-left' }, 'ID'),
        cell: ({ row }) => {
            return h('div', { class: 'text-left' }, row.getValue('id'))
        }
    },
    {
        accessorKey: 'name',
        header: () => h('div', {class: 'text-left'}, 'Name'),
        cell: ({row}) => {
            return h(
                RouterLink,
                {
                    to: `/projects/${row.original.slug}`,
                    class: 'text-left font-medium hover:bg-muted block w-full'
                },
                () => row.getValue('name')
            )
        }
    },
    {
        accessorKey: 'status',
        header: () => h('div', {class: 'text-left'}, 'Status'),
        cell: ({row}) => {
            return h('div', {class: 'text-left'},  row.getValue('status'))
        }
    },
    {
        accessorKey: 'collaborators',
        header: () => h('div', {class: 'text-left'}, 'Collaborators'),
        cell: ({ row }) => {
            return h('div', {class: 'text-left'}, row.getValue('collaborators').toString())
        }
    }
]
</script>

<template>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
