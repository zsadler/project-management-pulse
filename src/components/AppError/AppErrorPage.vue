<script setup lang="ts">
    // Import necessary functions and stores
    const  router = useRouter()
    const errorStore = useErrorStore()

    // Create reactive references
    const error = ref(errorStore.activeError)
    const errorMsg = ref('')
    const errorCode = ref(0)

    // Create reactive Postgrest Error refs
    const  errorDetails = ref('')
    const code = ref('')
    const  errorStack = ref('')
    const  errorHint = ref('')
    const statusCode = ref(0)

    // If there is an active error, set the error message and error code
    if(error.value && !('code' in error.value)) {
        errorMsg.value = error.value.message ?? 'An error occurred'
        errorCode.value = error.value.errorCode ?? 0
        errorStack.value = error.value.errorStack ?? null
    }
    // If there is an active Postgrest error, set the error message, error code, and error details
    if(error.value && 'code' in error.value) {
        errorMsg.value = error.value?.message ?? 'A Postgrest error occurred'
        errorDetails.value = error.value?.details ?? ''
        errorHint.value = error.value?.hint ?? ''
        code.value = error.value?.code ?? ''
        statusCode.value = error.value?.statusCode ?? 0
    }

    // Clear the active error after each route change
    router.afterEach(() => {
        errorStore.activeError = null;
    })
</script>

<template>
    <section class="error">
        <div>
            <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
            <h1 class="error__code">{{ errorCode || code}}</h1>
            <p class="error__code" v-if="statusCode">Status Code: {{ statusCode }}</p>
            <p class="error__msg">Error Msg: {{ errorMsg }}</p>
            <p class="error__text" v-if="errorDetails">Error Details: {{ errorDetails }}</p>
            <p class="error__text" v-if="errorHint">Error Hint: {{ errorHint }}</p>
            <p class="error__stack" v-if="errorStack">Error Stack: {{ errorStack }}</p>

            <div class="error-footer">
                <p class="error-footer__text">You'll find lots to explore on the home page.</p>
                <RouterLink to="/">
                    <Button class="max-w-36"> Back to homepage </Button>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.error {
    @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh];
}

.error__icon {
    @apply text-7xl text-destructive;
}

.error__code {
    @apply font-extrabold text-7xl text-secondary;
}

.error__msg {
    @apply text-3xl font-extrabold text-primary;
}

.error-footer {
    @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
}

.error-footer__text {
    @apply text-lg text-muted-foreground;
}

p {
    @apply my-2;
}
</style>
