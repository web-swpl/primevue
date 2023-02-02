<template>
    <div>
        <Head>
            <Title>Vue BreadCrumb Component</Title>
            <Meta name="description" content="Breadcrumb provides contextual information about page hierarchy." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Breadcrumb</h1>
                    <p>Breadcrumb provides contextual information about page hierarchy.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/breadcrumb/AccessibilityDoc';
import BasicDoc from '../../doc/breadcrumb/BasicDoc';
import ImportDoc from '../../doc/breadcrumb/ImportDoc';
import StyleDoc from '../../doc/breadcrumb/StyleDoc';
import TemplateDoc from '../../doc/breadcrumb/TemplateDoc';

export default {
    data() {
        return {
            home: { icon: 'pi pi-home', to: '/' },
            items: [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item', to: '/breadcrumb' }],
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
                    doc: [{ name: 'Breadcrumb', pathname: '/modules/breadcrumb.html' }]
                }
            ]
        };
    }
};
</script>
