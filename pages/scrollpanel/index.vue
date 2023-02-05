<template>
    <div>
        <Head>
            <Title>Vue ScrollPanel Component</Title>
            <Meta name="description" content="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>ScrollPanel</h1>
                    <p>ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>
<script>
import AccessibilityDoc from '/doc/scrollpanel/AccessibilityDoc';
import BasicDoc from '/doc/scrollpanel/BasicDoc';
import CustomDoc from '/doc/scrollpanel/CustomDoc';
import ImportDoc from '/doc/scrollpanel/ImportDoc';
import StyleDoc from '/doc/scrollpanel/StyleDoc';

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
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
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
                    doc: [{ name: 'ScrollPanel', pathname: '/modules/scrollpanel.html' }]
                }
            ]
        };
    }
};
</script>

<!-- <style lang="scss" scoped>
::v-deep(.p-scrollpanel) {
    p {
        padding: 0.5rem;
        line-height: 1.5;
        margin: 0;
    }

    &.custombar1 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-ground);
        }

        .p-scrollpanel-bar {
            background-color: var(--primary-color);
            opacity: 1;
            transition: background-color 0.2s;

            &:hover {
                background-color: #007ad9;
            }
        }
    }

    &.custombar2 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-ground);
            border-bottom: 9px solid var(--surface-ground);
        }

        .p-scrollpanel-bar {
            background-color: var(--surface-border);
            border-radius: 0;
            opacity: 1;
            transition: background-color 0.2s;
        }
    }
}
</style> -->
