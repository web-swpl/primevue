<template>
    <DocComponent title="Vue InputText Component" header="InputText" description="InputText is an extension to standard input element with theming." :componentDocs="docs" :apiDocs="[{ name: 'InputText', pathname: '/modules/inputtext.html' }]" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputtext/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputtext/BasicDoc.vue';
import DisabledDoc from '@/doc/inputtext/DisabledDoc.vue';
import FloatLabelDoc from '@/doc/inputtext/FloatLabelDoc.vue';
import IconDoc from '@/doc/inputtext/IconDoc.vue';
import ImportDoc from '@/doc/inputtext/ImportDoc.vue';
import InvalidDoc from '@/doc/inputtext/InvalidDoc.vue';
import SizesDoc from '@/doc/inputtext/SizesDoc.vue';
import StyleDoc from '@/doc/inputtext/StyleDoc.vue';

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
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'floatlabel',
                    label: 'FloatLabel',
                    component: FloatLabelDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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
