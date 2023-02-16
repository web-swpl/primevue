<template>
    <DocComponent title="Vue Paginator Component" header="Paginator" description="Paginator is a generic widget to display content in paged format." :componentDocs="docs" :apiDocs="['Paginator']" />
</template>

<script>
import AccessibilityDoc from '@/doc/paginator/AccessibilityDoc.vue';
import BasicDoc from '@/doc/paginator/BasicDoc.vue';
import ResponsiveDoc from '@/doc/paginator/ResponsiveDoc.vue';
import StyleDoc from '@/doc/paginator/StyleDoc.vue';
import TemplateDoc from '@/doc/paginator/TemplateDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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

<style scoped>
.image-gallery {
    text-align: center;
    padding: 1rem;
}
</style>
