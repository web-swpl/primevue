<template>
    <div>
        <Head>
            <Title>Vue Chip Component</Title>
            <Meta name="description" content="Chip represents entities using icons, labels and images." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Chip</h1>
                    <p>Chip represents entities using icons, labels and images.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/chip/accessibilitydoc';
import BasicDoc from '../../doc/chip/basicdoc';
import IconDoc from '../../doc/chip/icondoc';
import ImageDoc from '../../doc/chip/imagedoc';
import ImportDoc from '../../doc/chip/importdoc';
import StyleDoc from '../../doc/chip/styledoc';
import TemplateDoc from '../../doc/chip/templatedoc';

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
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
                },
                {
                    id: 'image',
                    label: 'Image',
                    component: ImageDoc
                },
                {
                    id: 'templatedoc',
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
                    doc: [{ name: 'Chip', pathname: '/modules/chip.html' }]
                }
            ]
        };
    }
};
</script>
