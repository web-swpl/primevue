<template>
    <div>
        <Head>
            <Title>Vue Fieldset Component</Title>
            <Meta name="description" content="Fieldset is a grouping component with a content toggle feature." />
        </Head>
        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Fieldset</h1>
                    <p>Fieldset is a grouping component with the optional content toggle feature.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/fieldset/AccessibilityDoc.vue';
import BasicDoc from '/doc/fieldset/BasicDoc.vue';
import ImportDoc from '/doc/fieldset/ImportDoc.vue';
import StyleDoc from '/doc/fieldset/StyleDoc.vue';
import TemplateDoc from '/doc/fieldset/TemplateDoc.vue';
import ToggleableDoc from '/doc/fieldset/ToggleableDoc.vue';
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
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
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
                    doc: [{ name: 'Fieldset', pathname: '/modules/fieldset.html' }]
                }
            ]
        };
    }
};
</script>
