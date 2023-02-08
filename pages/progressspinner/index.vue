<template>
    <DocComponent title="Vue ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." :componentDocs="docs" :apiDocs="[{ name: 'ProgressBar', pathname: '/modules/progressbar.html' }]" />
</template>

<script>
import AccessibilityDoc from '/doc/progressspinner/AccessibilityDoc';
import BasicDoc from '/doc/progressspinner/BasicDoc';
import ImportDoc from '/doc/progressspinner/ImportDoc';
import StyleDoc from '/doc/progressspinner/StyleDoc';
import CustomDoc from '/doc/progressspinner/customDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
