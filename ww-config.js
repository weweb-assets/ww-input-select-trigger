export default {
    editor: {
        label: 'Select Trigger',
        icon: 'select',
    },
    inherit: {
        type: 'ww-layout',
    },
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'grid', 'inline-flex', 'inline-grid'],
    },
    properties: {
        placeholder: {
            label: 'Placeholder',
            type: 'Text',
            defaultValue: 'Select an option',
        },
        slot: {
            hidden: true,
            defaultValue: [],
        },
    },
};
