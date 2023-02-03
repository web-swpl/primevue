<template>
    <div>
        <Head>
            <Title>Vue Deferred Content Component</Title>
            <Meta name="description" content="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>DeferredContent</h1>
                    <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/deferredcontent/AccessibilityDoc.vue';
import BasicDoc from '/doc/deferredcontent/BasicDoc.vue';
import DatatableDoc from '/doc/deferredcontent/DatatableDoc.vue';
import ImportDoc from '/doc/deferredcontent/ImportDoc.vue';
import StyleDoc from '/doc/deferredcontent/StyleDoc.vue';

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
                    id: 'datatable',
                    label: 'DataTable',
                    component: DatatableDoc
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
                    doc: [{ name: 'DeferredContent', pathname: '/modules/defferredcontent.html' }]
                }
            ]
        };
    }
};
</script>
