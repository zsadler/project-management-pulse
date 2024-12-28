<script setup lang="ts">
// Import necessary functions and stores

const isDevelopment = import.meta.env.DEV
const router = useRouter()
const errorStore = useErrorStore()

// Create reactive references
const error = ref(errorStore.activeError)
const errorMsg = ref('')
const errorCode = ref(0)

// Create reactive Postgrest Error refs
const errorDetails = ref('')
const code = ref('')
const errorStack = ref('')
const errorHint = ref('')
const statusCode = ref(0)

// If there is an active error, set the error message and error code
if (error.value && !('code' in error.value)) {
    errorMsg.value = error.value.message ?? 'An error occurred'
    errorCode.value = error.value.errorCode ?? 0
    errorStack.value = error.value.errorStack?.trimStart() ?? null
}
// If there is an active Postgrest error, set the error message, error code, and error details
if (error.value && 'code' in error.value) {
    errorMsg.value = error.value?.message ?? 'A Postgrest error occurred'
    errorDetails.value = error.value?.details ?? ''
    errorHint.value = error.value?.hint ?? ''
    code.value = error.value?.code ?? ''
    statusCode.value = error.value?.statusCode ?? 0
}

// set instance template based on the environment
const errorTemplate = isDevelopment ? 'AppErrorDevelopmentSection' : 'AppErrorProductionSection';
const ErrorTemplate = defineAsyncComponent(() => import(`./${errorTemplate}.vue`))

// Clear the active error after each route change
router.afterEach(() => {
     errorStore.clearError()
})
</script>

<template>
    <section class="error">
        <ErrorTemplate :isCustomError="errorStore.isCustomError"
            :errorMsg
            :errorCode
            :code
            :statusCode
            :errorHint
            :errorDetails
            :errorStack
        />

    </section>
</template>

<style scoped>
.error {
    @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh];
}

:deep(.error__icon) {
    @apply text-7xl text-destructive;
}

:deep(.error__code) {
    @apply font-extrabold text-7xl text-secondary;
}

:deep(.error__msg) {
    @apply text-3xl font-extrabold text-primary;
}

:deep(.error-footer) {
    @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
}

:deep(.error-footer__text) {
    @apply text-lg text-muted-foreground;
}

:deep(p) {
    @apply my-2;
}
</style>
