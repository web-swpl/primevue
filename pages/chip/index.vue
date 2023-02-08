<template>
    <DocComponent title="Vue Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." :componentDocs="docs" :apiDocs="[{ name: 'Chip', pathname: '/modules/chip.html' }]" />
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
                }
            ]
        };
    }
};
</script>
