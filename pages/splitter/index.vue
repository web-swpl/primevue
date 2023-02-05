<template>
    <div>
        <Head>
            <Title>Vue Splitter Component</Title>
            <Meta name="description" content="Splitter is utilized to separate and resize panels." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Splitter</h1>
                    <p>Splitter is utilized to separate and resize panels.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/splitter/AccessibilityDoc';
import HorizontalDoc from '/doc/splitter/HorizontalDoc.vue';
import ImportDoc from '/doc/splitter/ImportDoc';
import NestedDoc from '/doc/splitter/NestedDoc.vue';
import SizeDoc from '/doc/splitter/SizeDoc.vue';
import StyleDoc from '/doc/splitter/StyleDoc';
import VerticalDoc from '/doc/splitter/VerticalDoc.vue';

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
                    id: 'horizontal',
                    label: 'Horizontal',
                    component: HorizontalDoc
                },
                {
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'nested',
                    label: 'Nested',
                    component: NestedDoc
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
                    doc: [{ name: 'Splitter', pathname: '/modules/splitter.html' }]
                }
            ]
        };
    }
};
</script>
