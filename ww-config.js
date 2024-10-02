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
            section: 'settings',
        },
        placeholder: {
            label: 'Placeholder',
            type: 'Text',
            defaultValue: 'Select an option',
            section: 'settings',
        },
        slot: {
            hidden: true,
            defaultValue: [],
        },
    },
};
