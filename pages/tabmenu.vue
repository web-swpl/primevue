<template>
    <div>
        <Head>
            <Title>Vue TabMenu Component</Title>
            <Meta name="description" content="TabMenu is a navigation/command component that displays items as tab headers." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>TabMenu</h1>
                    <p>TabMenu is a navigation/command component that displays items as tab headers.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../doc/tabmenu/AccessibilityDoc.vue';
import BasicDoc from '../doc/tabmenu/BasicDoc.vue';
import ControlledDoc from '../doc/tabmenu/ControlledDoc.vue';
import ImportDoc from '../doc/tabmenu/ImportDoc.vue';
import StyleDoc from '../doc/tabmenu/StyleDoc.vue';

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
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
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
                    doc: [{ name: 'TabMenu', pathname: '/modules/tabmenu.html' }]
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
    padding: 2rem 1rem;
}
</style>
