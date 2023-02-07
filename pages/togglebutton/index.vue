<template>
    <div>
        <Head>
            <Title>Vue ToggleButton Component</Title>
            <Meta name="description" content="ToggleButton is used to select a boolean value using a button." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>ToggleButton</h1>
                    <p>ToggleButton is used to select a boolean value using a button.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/togglebutton/AccessibilityDoc.vue';
import BasicDoc from '/doc/togglebutton/BasicDoc.vue';
import CustomizedDoc from '/doc/togglebutton/CustomizedDoc.vue';
import ImportDoc from '/doc/togglebutton/ImportDoc.vue';
import StyleDoc from '/doc/togglebutton/StyleDoc.vue';
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
                    id: 'customized',
                    label: 'Customized',
                    component: CustomizedDoc
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
                    doc: [{ name: 'ToggleButton', pathname: '/modules/togglebutton.html' }]
                }
            ]
        };
    }
};
</script>
