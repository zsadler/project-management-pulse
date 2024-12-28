import type { CustomError, ExtendedPostgrestError } from '@/types/Error';
import type { PostgrestError } from '@supabase/supabase-js';

/**
 * Defines the error store using Pinia.
 * @returns {Object} The active error and setError function.
 */
export const useErrorStore = defineStore('error-store', () => {
    /**
     * Reactive reference to the active error.
     * @type {import('vue').Ref<null | CustomError | ExtendedPostgrestError | Error>}
     */
    const activeError = ref<null | CustomError | ExtendedPostgrestError | Error>(null);
    const isCustomError = ref(false);
    /**
     * Sets the active error with the provided error and code.
     * @param {Object} param0 - The error details.
     * @param {string | PostgrestError | Error} param0.error - The error object or message.
     * @param {number} [param0.errorCode] - The optional error code.
     */
    const setError = ({ error, errorCode }: { error: string | PostgrestError | Error, errorCode?: number }) => {
        // handle native js error or custom string error
        if (typeof error === 'string') {
            isCustomError.value = true;
            activeError.value = new Error(error) as CustomError;
            activeError.value.errorCode = errorCode || 500;
        } else if (error instanceof Error) {
            activeError.value = error;
            activeError.value.errorCode = errorCode || 500;
            if(error?.stack) {
                activeError.value.errorStack = error.stack;
            }
        } else {
            // handle postgrest error
            activeError.value = error as ExtendedPostgrestError;
            activeError.value.statusCode = errorCode || 500;
        }
    };

    const clearError = () => {
        activeError.value = null;
        isCustomError.value = false;
    }

    return {
        activeError,
        setError,
        isCustomError,
        clearError
    };
});