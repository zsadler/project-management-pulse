import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

/**
 * @tasksWithProjectQuery - Gets all tasks w associated project{id, name, and slug}
 * @returns TaskWithProjects - All Tasks with any associated project data query result
 */
export const tasksWithProjectQuery = supabase.from('tasks')
    .select(`*, 
        projects (id, name, slug)
    `);

export type TaskWithProjects = QueryData<typeof tasksWithProjectQuery>

/**
 * @projectsQuery - Gets all projects{*}
 * @returns Projects - all projects query result
 */
export const projectsQuery = supabase
        .from('projects')
        .select('*')

export type Projects = QueryData<typeof projectsQuery>

/**
 * @projectQuery - Gets single project details equal to the slug with associated tasks{id, name, status, and due_date}
 * @param {string} slug - project slug
 * @returns Project - individual project details query result
 */
export const projectQuery = (slug: string) => supabase.from('projects')
    .select(`*,
        tasks (id, name, status, due_date)
    `)
    .eq('slug', slug)
    .single()

export type Project = QueryData<typeof projectQuery>