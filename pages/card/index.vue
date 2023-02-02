<template>
    <div>
        <Head>
            <Title>Vue Card Component</Title>
            <Meta name="description" content="Card is a flexible container component." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Card</h1>
                    <p>Card is a flexible container component.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/card/AccessibilityDoc';
import AdvancedDoc from '/doc/card/AdvancedDoc';
import BasicDoc from '/doc/card/BasicDoc';
import ImportDoc from '/doc/card/ImportDoc';
import StyleDoc from '/doc/card/StyleDoc';

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
                    id: 'advanced',
                    label: 'Advanced',
                    component: AdvancedDoc
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
                    doc: [{ name: 'Card', pathname: '/modules/card.html' }]
                }
            ]
        };
    }
};
</script>
