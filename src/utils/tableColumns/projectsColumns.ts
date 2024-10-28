import type { ColumnDef } from '@tanstack/vue-table'
import type { Tables } from '../../../database/types'
import { RouterLink } from 'vue-router'

/**
 * @columns - Project Table Columns
 * @type {ColumnDef<Tables<'projects'>>[]} - Column definitions for the Projects table
 */
export const columns: ColumnDef<Tables<'projects'>>[] = [
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