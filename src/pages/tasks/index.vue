<script setup lang="ts"> // eslint-disable-line
import { supabase } from '@/lib/supabaseClient'
import { h, ref } from 'vue'

import type {Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { RouterLink } from 'vue-router'

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')

  if (error)  console.error(error)

  tasks.value = data
  // console.log(tasks.value)
})()

const columns: ColumnDef<Tables<'tasks'>>[] = [
    {
        accessorKey: 'project_id',
        header: () => h('div', { class: 'text-left' }, 'ID'),
        cell: ({ row }) => {
            return h('div', { class: 'text-left' }, row.getValue('project_id'))
        }
    },
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Project'),
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
        accessorKey: 'collaborators',
        header: () => h('div', { class: 'text-left' }, 'Collaborators'),
        cell: ({ row }) => {
            return h('div',
                { class: 'text-left' },
                 row.getValue('collaborators').toString())
        }
    },
]

</script>

<template>
  <h1>Tasks</h1>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped>

</style>