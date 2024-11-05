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
            /* wwEditor:start */
            propertyHelp: {
                tooltip:
                    'The placeholder text for the select. Available in the formula explorer in the Trigger element.',
            },
            /* wwEditor:end */
        },
        slot: {
            hidden: true,
            defaultValue: [],
        },
    },
};
