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

        wwLib.wwElement.useRegisterElementLocalContext('selectTrigger', { placeholder: props.content.placeholder }, {});
    },
};
</script>

<style lang="scss" scoped></style>
