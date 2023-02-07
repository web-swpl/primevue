<template>
    <div>
        <Head>
            <Title>Vue Slider Component</Title>
            <Meta name="description" content="Slider is a component to provide input with a drag handle." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Slider</h1>
                    <p>Slider is an input component to provide a numerical input.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/slider/AccessibilityDoc';
import BasicDoc from '/doc/slider/BasicDoc';
import ImportDoc from '/doc/slider/ImportDoc';
import InputDoc from '/doc/slider/InputDoc';
import RangeDoc from '/doc/slider/RangeDoc';
import StepDoc from '/doc/slider/StepDoc';
import StyleDoc from '/doc/slider/StyleDoc';
import VerticalDoc from '/doc/slider/VerticalDoc';

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
                    id: 'input',
                    label: 'Input',
                    component: InputDoc
                },
                {
                    id: 'step',
                    label: 'Step',
                    component: StepDoc
                },
                {
                    id: 'range',
                    label: 'Range',
                    component: RangeDoc
                },
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
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
                    doc: [{ name: 'Slider', pathname: '/modules/slider.html' }]
                }
            ]
        };
    }
};
</script>
