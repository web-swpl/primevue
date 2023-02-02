<template>
    <div>
        <Head>
            <Title>Vue ProgressBar Component</Title>
            <Meta name="description" component="ProgressBar is a process status indicator." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>ProgressSpinner</h1>
                    <p>ProgressSpinner is a process status indicator.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/progressspinner/AccessibilityDoc';
import BasicDoc from '/doc/progressspinner/BasicDoc';
import ImportDoc from '/doc/progressspinner/ImportDoc';
import StyleDoc from '/doc/progressspinner/StyleDoc';
import CustomDoc from '/doc/progressspinner/customDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'import',
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
                    doc: [{ name: 'ProgressSpinner', pathname: '/modules/progressspinner.html' }]
                }
            ]
        };
    }
};
</script>
