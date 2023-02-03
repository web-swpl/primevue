<template>
    <div>
        <Head>
            <Title>Vue Divider Component</Title>
            <Meta name="description" content="Divider is used to separate contents." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Divider</h1>
                    <p>Divider is used to separate contents.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/divider/AccessibilityDoc.vue';
import BasicDoc from '/doc/divider/BasicDoc.vue';
import ContentDoc from '/doc/divider/ContentDoc.vue';
import ImportDoc from '/doc/divider/ImportDoc.vue';
import LoginDoc from '/doc/divider/LoginDoc.vue';
import StyleDoc from '/doc/divider/StyleDoc.vue';
import TypeDoc from '/doc/divider/TypeDoc.vue';
import VerticalDoc from '/doc/divider/VerticalDoc.vue';

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
                    id: 'type',
                    label: 'Type',
                    component: TypeDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'content',
                    label: 'Content',
                    component: ContentDoc
                },
                {
                    id: 'login',
                    label: 'Login',
                    component: LoginDoc
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
