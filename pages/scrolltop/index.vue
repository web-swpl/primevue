<template>
    <div>
        <Head>
            <Title>Vue ScrollTop Component</Title>
            <Meta name="description" content="ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>ScrollTop</h1>
                    <p>ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/scrolltop/AccessibilityDoc';
import BasicDoc from '/doc/scrolltop/BasicDoc';
import ElementDoc from '/doc/scrolltop/ElementDoc';
import ImportDoc from '/doc/scrolltop/ImportDoc';
import StyleDoc from '/doc/scrolltop/StyleDoc';

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
                    id: 'element',
                    label: 'Element',
                    component: ElementDoc
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
                    doc: [{ name: 'ScrollTop', pathname: '/modules/scrolltop.html' }]
                }
            ]
        };
    }
};
</script>
