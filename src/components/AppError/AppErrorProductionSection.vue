<script setup lang="ts">
const props = defineProps<{
    errorCode: number,
    code: number,
    statusCode: number,
    errorMsg: string,
    errorDetails: string,
    errorHint: string | null,
    isCustomError: boolean
}>()

const error = ref({
    code: 500,
    msg: "Oops! Something went wrong."
});

if (props.isCustomError) {
    error.value.code = props.errorCode;
    error.value.msg = props.errorMsg;
}
// postgrest error = not found returned from the server
if (props.statusCode === 406) {
    error.value.code = 404;
    error.value.msg = "Sorry, the page could not be found.";
}
</script>

<template>
    <div class="error__prod-instance">
        <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
        <h1 class="error__code">{{ error.code }}</h1>
        <p class="error__msg">{{ error.msg }}</p>

        <div class="error-footer">
            <p class="error-footer__text">You'll find lots to explore on the home page.</p>
            <RouterLink to="/">
                <Button class="max-w-36"> Back to homepage</Button>
            </RouterLink>
        </div>
    </div>
</template>

