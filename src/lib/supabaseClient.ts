import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../database/types'

const SUPABASE_URL = 'https://' + import.meta.env.SUPABASE_PROJECT_ID +'.'+ import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

// Create a single supabase client for interacting with your database
export const supabase =  createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
