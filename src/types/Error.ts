import type { PostgrestError } from '@supabase/supabase-js'

/**
 * Interface representing a custom error with an optional error code.
 * Extends the built-in Error interface.
 */
export interface CustomError extends Error {
    /**
     * Optional error code associated with the error.
     * @type {number}
     */
    errorCode?: number
}

export interface ExtendedPostgrestError extends PostgrestError {
    /**
     * Optional error code associated with the postgrest error.
     * @type {number}
     */
    statusCode?: number
}