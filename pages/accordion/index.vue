<template>
    <div>
        <Head>
            <Title>Vue Accordion Component</Title>
            <Meta name="description" content="Accordion groups a collection of contents in tabs." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Accordion</h1>
                    <p>Accordion groups a collection of contents in tabs.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/accordion/AccessibilityDoc';
import BasicDoc from '/doc/accordion/BasicDoc';
import ControlledDoc from '/doc/accordion/ControlledDoc.vue';
import Disabled from '/doc/accordion/DisabledDoc.vue';
import ImportDoc from '/doc/accordion/ImportDoc';
import MultipleDoc from '/doc/accordion/MultipleDoc.vue';
import StyleDoc from '/doc/accordion/StyleDoc';
import TemplateDoc from '/doc/accordion/TemplateDoc';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: Disabled
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
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
                    doc: [{ name: 'Accordion', pathname: '/modules/accordion.html' }]
                }
            ]
        };
    }
};
</script>
