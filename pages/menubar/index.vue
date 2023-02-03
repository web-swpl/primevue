<template>
    <div>
        <Head>
            <Title>Vue Navbar Component</Title>
            <Meta name="description" content="Menubar is a horizontal menu component." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Menubar</h1>
                    <p>Menubar also known as Navbar, is a horizontal menu component.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/menubar/accessibilitydoc';
import BasicDoc from '../../doc/menubar/basicdoc';
import ImportDoc from '../../doc/menubar/importdoc';
import StyleDoc from '../../doc/menubar/styledoc';
import TemplateDoc from '../../doc/menubar/templatedoc';

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
                    doc: [{ name: 'Menubar', pathname: '/modules/menubar.html' }]
                }
            ]
        };
    }
};
</script>
