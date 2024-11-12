<template>
    <wwLayout class="ww-select-trigger" path="slot" />
</template>

<script>
import { provide, computed, ref } from 'vue';

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

        const markdown = `### Select Trigger local informations

- \`placeholder\`: The placeholder text for the select trigger.`;

        wwLib.wwElement.useRegisterElementLocalContext('selectTrigger', data, {}, markdown);
    },
    methods: {
        /* wwEditor:start */
        selectParentElement() {
            wwLib.selectParentByFlag(this.$el, 'ww-select');
        },
        /* wwEditor:end */
    },
};
</script>

<style lang="scss" scoped></style>
