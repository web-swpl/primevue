<template>
    <div>
        <Head>
            <Title>Vue MegaMenu Component</Title>
            <Meta name="description" content="MegaMenu is navigation component that displays submenus together." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>MegaMenu</h1>
                    <p>MegaMenu is navigation component that displays submenus together.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/megamenu/AccessibilityDoc';
import BasicDoc from '../../doc/megamenu/BasicDoc';
import ImportDoc from '../../doc/megamenu/ImportDoc';
import StyleDoc from '../../doc/megamenu/StyleDoc';
import TemplateDoc from '../../doc/megamenu/TemplateDoc';
import VerticalDoc from '../../doc/megamenu/VerticalDoc';

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
                    id: 'Vertical',
                    label: 'Vertical',
                    component: VerticalDoc
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
                    doc: [{ name: 'MegaMenu', pathname: '/modules/megamenu.html' }]
                }
            ]
        };
    }
};
</script>
