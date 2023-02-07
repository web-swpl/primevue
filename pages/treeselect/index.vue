<template>
    <div>
        <Head>
            <Title>Vue TreeSelect Component</Title>
            <Meta name="description" content="TreeSelect is a form component to choose from hierarchical data." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>TreeSelect</h1>
                    <p>TreeSelect is a form component to choose from hierarchical data.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/treeselect/AccessibilityDoc';
import BasicDoc from '/doc/treeselect/BasicDoc';
import CheckboxDoc from '/doc/treeselect/CheckboxDoc';
import DisabledDoc from '/doc/treeselect/DisabledDoc';
import FloatLabelDoc from '/doc/treeselect/FloatLabelDoc';
import ImportDoc from '/doc/treeselect/ImportDoc';
import InvalidDoc from '/doc/treeselect/InvalidDoc';
import MultipleDoc from '/doc/treeselect/MultipleDoc';
import StyleDoc from '/doc/treeselect/StyleDoc';
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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'checkbox',
                    label: 'Checkbox',
                    component: CheckboxDoc
                },
                {
                    id: 'float-label',
                    label: 'Float Label',
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
                },
                {
                    id: 'api',
                    label: 'API',
                    doc: [{ name: 'TreeSelect', pathname: '/modules/treeselect.html' }]
                }
            ]
        };
    }
};
</script>
