<template>
    <DocComponent
        title="Vue Confirmation Popup Component"
        header="ConfirmPopup"
        description="ConfirmPopup displays a confirmation overlay displayed relatively to its target."
        :componentDocs="docs"
        :apiDocs="[{ name: 'ConfirmPopup', pathname: '/modules/confirmpopup.html' }]"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/confirmpopup/AccessibilityDoc.vue';
import BasicDoc from '@/doc/confirmpopup/BasicDoc.vue';
import DeclarativeDoc from '@/doc/confirmpopup/DeclarativeDoc.vue';
import ImportDoc from '@/doc/confirmpopup/ImportDoc.vue';
import StyleDoc from '@/doc/confirmpopup/StyleDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'declarative',
                    label: 'Declarative',
                    component: DeclarativeDoc
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
