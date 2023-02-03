<template>
    <div>
        <Head>
            <Title>Vue Panel Component</Title>
            <Meta name="description" content="Panel is a grouping component providing with content toggle feature." />
        </Head>
        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Panel</h1>
                    <p>Panel is a container with the optional content toggle feature.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>
<script>
import AccessibilityDoc from '/doc/panel/AccessibilityDoc.vue';
import BasicDoc from '/doc/panel/BasicDoc.vue';
import ImportDoc from '/doc/panel/ImportDoc.vue';
import StyleDoc from '/doc/panel/StyleDoc.vue';
import TemplateDoc from '/doc/panel/TemplateDoc.vue';
import ToggleableDoc from '/doc/panel/ToggleableDoc.vue';
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
                    id: 'toggleable',
                    label: 'Toggleable',
                    component: ToggleableDoc
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
                },
                {
                    id: 'api',
                    label: 'API',
                    doc: [{ name: 'Panel', pathname: '/modules/panel.html' }]
                }
            ]
        };
    }
};
</script>
