<template>
    <div>
        <Head>
            <Title>Vue Toolbar Component</Title>
            <Meta name="description" content="Toolbar is a grouping component for buttons and other content." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Toolbar</h1>
                    <p>Toolbar is a grouping component for buttons and other content.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>
<script>
import AccessibilityDoc from '/doc/toolbar/AccessibilityDoc';
import BasicDoc from '/doc/toolbar/BasicDoc';
import ImportDoc from '/doc/toolbar/ImportDoc';
import StyleDoc from '/doc/toolbar/StyleDoc';
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
                    doc: [{ name: 'Toolbar', pathname: '/modules/toolbar.html' }]
                }
            ]
        };
    }
};
</script>
