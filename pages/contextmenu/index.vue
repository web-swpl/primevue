<template>
    <div>
        <Head>
            <Title>Vue ContextMenu Component</Title>
            <Meta name="description" content="ContextMenu displays an overlay menu on right click of its target." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>ContextMenu</h1>
                    <p>
                        ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a
                        special integration.
                    </p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/contextmenu/AccessibilityDoc';
import BasicDoc from '../../doc/contextmenu/BasicDoc';
import DocumentDoc from '../../doc/contextmenu/DocumentDoc';
import ImportDoc from '../../doc/contextmenu/ImportDoc';
import StyleDoc from '../../doc/contextmenu/StyleDoc';

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
                    doc: [{ name: 'ContextMenu', pathname: '/modules/contextmenu.html' }]
                }
            ]
        };
    }
};
</script>
