import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

/**
 * @tasksWithProjectQuery - All Tasks listing page
 * @returns TaskWithProjects - All Tasks with any associated project data
 */
export const tasksWithProjectQuery = supabase.from('tasks')
    .select(`*, 
        projects (id, name, slug)
    `);

export type TaskWithProjects = QueryData<typeof tasksWithProjectQuery>

/**
 * @taskQuery - Single Task details page
 * @returns Task - Task details
 */
export const projectsQuery = supabase
        .from('projects')
        .select('*')

export type Projects = QueryData<typeof projectsQuery>

/**
 * @taskQuery - Single Project details page
 * @param {string} slug - project slug
 * @returns Project - Project details
 */
export const projectQuery = (slug: string) => supabase.from('projects')
    .select(`*,
        tasks (id, name, status, due_date)
    `)
    .eq('slug', slug)
    .single()

export type Project = QueryData<typeof projectQuery>