<template>
    <div>
        <Head>
            <Title>Vue BlockUI Component</Title>
            <Meta name="description" content="BlockUI can either block other components or the whole page." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>BlockUI</h1>
                    <p>BlockUI can block certain elements or the whole page.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/blockui/AccessibilityDoc.vue';
import BasicDoc from '../../doc/blockui/BasicDoc.vue';
import DocumentDoc from '../../doc/blockui/DocumentDoc.vue';
import ImportDoc from '../../doc/blockui/ImportDoc.vue';
import StyleDoc from '../../doc/blockui/StyleDoc.vue';

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
                    id: 'document',
                    label: 'Document',
                    component: DocumentDoc
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
                    doc: [{ name: 'BlockUI', pathname: '/modules/blockui.html' }]
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}

button {
    margin-right: 0.5rem;
}
</style>
