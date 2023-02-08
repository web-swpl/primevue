<template>
    <div>
        <Head>
            <Title>Vue SelectButton Component</Title>
            <Meta name="description" content="SelectButton is used to choose single or multiple items from a list using buttons." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>SelectButton</h1>
                    <p>SelectButton is a form component to choose a value from a list of options using button elements.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/selectbutton/AccessibilityDoc';
import BasicDoc from '/doc/selectbutton/BasicDoc';
import DisabledDoc from '/doc/selectbutton/DisabledDoc';
import ImportDoc from '/doc/selectbutton/ImportDoc';
import InvalidDoc from '/doc/selectbutton/InvalidDoc';
import MultipleDoc from '/doc/selectbutton/MultipleDoc';
import TemplateDoc from '/doc/selectbutton/TemplateDoc';

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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
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
