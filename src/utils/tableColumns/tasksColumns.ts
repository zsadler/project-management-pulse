import type { ColumnDef } from '@tanstack/vue-table'
import type { TaskWithProjects } from '@/utils/supabaseQueries'
import { RouterLink } from 'vue-router'

/**
 * @columns - Task Table Columns
 * @type {ColumnDef<TaskWithProjects[0]>[]} - Column definitions for the Tasks table
 */
export const columns: ColumnDef<TaskWithProjects[0]>[] = [
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