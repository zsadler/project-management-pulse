import type { CustomError, ExtendedPostgrestError } from '@/types/Error';
import type { PostgrestError } from '@supabase/supabase-js'

/**
 * Defines the error store using Pinia.
 * @returns {Object} The active error and setError function.
 */
export const useErrorStore = defineStore('error-store', () => {

    const activeError = ref<null | CustomError | ExtendedPostgrestError | Error>(null);

    /**
     * Sets the active error with the provided message and code.
     * @param {Object} param0 - The error details.
     * @param {string} param0.error - The error message.
     * @param {number} param0.errorCode - The error code.
     */
    const setError = ({ error, errorCode }: { error: string | PostgrestError | Error, errorCode?: number }) => {
        // handle native js error or custom string error
        if (typeof error === 'string' || error instanceof Error) {
            activeError.value = typeof error === 'string' ? Error(error) : error;
            activeError.value.errorCode = errorCode || 500;
            return;
        }
        // handle postgrest error
        activeError.value = error as ExtendedPostgrestError;
        activeError.value.statusCode = errorCode || 500;
    };

    return {
        activeError,
        setError
    };
});