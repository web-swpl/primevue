<template>
    <div>
        <Head>
            <Title>Vue Stepper Component</Title>
            <Meta name="description" content="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Steps</h1>
                    <p>Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../doc/steps/AccessibilityDoc';
import ImportDoc from '../doc/steps/ImportDoc';
import InteractiveDoc from '../doc/steps/InteractiveDoc';
import StyleDoc from '../doc/steps/StyleDoc';

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
                    id: 'interactive',
                    label: 'Interactive',
                    component: InteractiveDoc
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
                    doc: [{ name: 'Steps', pathname: '/modules/steps.html' }]
                }
            ]
        };
    }
};
</script>
