import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../database/types'
// Load environment variables
const { SERVICE_ROLE_KEY, SUPABASE_PROJECT_ID, VITE_SUPABASE_URL } = process.env
const SUPABASE_URL = 'https://'+SUPABASE_PROJECT_ID +'.'+ VITE_SUPABASE_URL

// Create a single supabase client for interacting with your database
export const supabase =  createClient<Database>(SUPABASE_URL, SERVICE_ROLE_KEY);
