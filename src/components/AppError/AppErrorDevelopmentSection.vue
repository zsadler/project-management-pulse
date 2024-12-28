<script setup lang="ts">
defineProps<{
    errorCode: number,
    code: number,
    statusCode: number,
    errorMsg: string,
    errorDetails: string,
    errorHint: string,
    errorStack: string
}>()
</script>

<template>
        <div class="error__dev-instance">
            <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
            <h1 class="error__code">{{ errorCode || code}}</h1>
            <p class="error__code" v-if="statusCode">Status Code: {{ statusCode }}</p>
            <p class="error__msg">Error Msg: {{ errorMsg }}</p>
            <p class="error__text" v-if="errorDetails">Error Details: {{ errorDetails }}</p>
            <p class="error__text" v-if="errorHint">Error Hint: {{ errorHint }}</p>
            <pre v-if="errorStack" class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code class="font-mono">
                    {{ errorStack }}
                </code>
            </pre>
            <div class="error-footer">
                <p class="error-footer__text">You'll find lots to explore on the home page.</p>
                <RouterLink to="/">
                    <Button class="max-w-36"> Back to homepage </Button>
                </RouterLink>
            </div>
        </div>
</template>

