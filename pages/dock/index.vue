<template>
    <div>
        <Head>
            <Title>Vue Dock Component</Title>
            <Meta name="description" content="Dock is a navigation component consisting of menuitems." />
        </Head>

        <div class="doc dock-demo">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Dock</h1>
                    <p>Dock is a navigation component consisting of menuitems.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/dock/AccessibilityDoc';
import AdvancedDoc from '../../doc/dock/AdvancedDoc';
import BasicDoc from '../../doc/dock/BasicDoc';
import ImportDoc from '../../doc/dock/ImportDoc';
import StyleDoc from '../../doc/dock/StyleDoc';

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
                    id: 'advance',
                    label: 'Advanced',
                    component: AdvancedDoc
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
                    doc: [{ name: 'Dock', pathname: '/modules/dock.html' }]
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
::v-deep(.dock-demo) {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('@/assets/images/dock/window.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }

    .p-dock {
        z-index: 1000;
    }

    .p-menubar {
        border-radius: 0;
    }
}
</style>
