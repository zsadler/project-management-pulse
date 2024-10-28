<script setup lang="ts"> // eslint-disable-line
// auto importing enabled
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'

// supabaseQueries imports
import {
    type TaskWithProjects, tasksWithProjectQuery
} from '@/utils/supabaseQueries'

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

const columns: ColumnDef<TaskWithProjects[0]>[] = [
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Task'),
        cell: ({ row }) => {
            return h(
                RouterLink,
                {
                    to: `/tasks/${row.original.id}`,
                    class: 'text-left font-medium hover:bg-muted block w-full'
                },
                () => row.getValue('name')
            )
        }
    },
    {
        accessorKey: 'status',
        header: () => h('div', { class: 'text-left' }, 'Status'),
        cell: ({ row }) => {
            return h('div', { class: 'text-left' }, row.getValue('status'))
        }
    },
    {
        accessorKey: 'due_date',
        header: () => h('div', { class: 'text-left' }, 'Due'),
        cell: ({ row }) => {
            return h('div', { class: 'text-left' }, row.getValue('due_date'))
        }
    },
    {
        accessorKey: 'projects',
        header: () => h('div', { class: 'text-left' }, 'Assoc. Project'),
        cell: ({ row }) => {
            return row.original.projects ?
                h(
                RouterLink,
                {
                    to: `/projects/${row.original.projects.slug}`,
                    class: 'text-left font-medium hover:bg-muted block w-full'
                },
                () => row.original.projects?.name
            ) : h('div', { class: 'text-left' }, '\u2014 No associated project \u2014')
        }
    },
    {
        accessorKey: 'collaborators',
        header: () => h('div', { class: 'text-left' }, 'Collaborators'),
        cell: ({ row }) => {
            return row.original.projects ? h('div',
                { class: 'text-left' },
                (row.original.collaborators).toString())
                : h('div', { class: 'text-left' }, '\u2014 No collaborators \u2014')
        }
    },
]

</script>

<template>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped>

</style>