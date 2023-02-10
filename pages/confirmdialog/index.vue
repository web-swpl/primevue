<template>
    <DocComponent
        title="Vue Confirmation Dialog Component"
        header="ConfirmDialog"
        description="ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API."
        :componentDocs="docs"
        :apiDocs="[{ name: 'ConfirmDialog', pathname: '/modules/confirmdialog.html' }]"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/confirmdialog/AccessibilityDoc.vue';
import BasicDoc from '@/doc/confirmdialog/BasicDoc.vue';
import DeclarativeDoc from '@/doc/confirmdialog/DeclarativeDoc.vue';
import ImportDoc from '@/doc/confirmdialog/ImportDoc.vue';
import PositionDoc from '@/doc/confirmdialog/PositionDoc.vue';
import StyleDoc from '@/doc/confirmdialog/StyleDoc.vue';

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
                    id: 'position',
                    label: 'Position',
                    component: PositionDoc
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
