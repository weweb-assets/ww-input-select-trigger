export default {
    editor: {
        label: 'Select Trigger',
        icon: 'select',
    },
    properties: {
        layout: {
            label: 'Layout',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'simple', label: 'Simple' },
                    { value: 'free', label: 'Free layout' },
                ],
            },
            defaultValue: 'simple',
        },
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
