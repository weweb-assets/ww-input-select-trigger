<template>
    <wwLayout class="ww-select-trigger" path="slot" />
</template>

<script>
import { provide, ref } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    setup(props) {
        provide('_wwSelectInTrigger', ref(true));

        const placeholder = computed(() => props.content.placeholder);

        const data = ref({
            placeholder,
        });

        wwLib.wwElement.useRegisterElementLocalContext('selectTrigger', data, {});
    },
};
</script>

<style lang="scss" scoped></style>
