<template>
    <div>
        <Head>
            <Title>Vue Inplace Component</Title>
            <Meta name="description" content="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Inplace</h1>
                    <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/inplace/AccessibilityDoc';
import BasicDoc from '../../doc/inplace/BasicDoc';
import ImageDoc from '../../doc/inplace/ImageDoc';
import ImportDoc from '../../doc/inplace/ImportDoc';
import InputDoc from '../../doc/inplace/InputDoc';
import LazyDoc from '../../doc/inplace/LazyDoc';
import StyleDoc from '../../doc/inplace/StyleDoc';

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
                    id: 'image',
                    label: 'Image',
                    component: ImageDoc
                },
                {
                    id: 'lazy',
                    label: 'Lazy',
                    component: LazyDoc
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
                    doc: [{ name: 'Inplace', pathname: '/modules/inplace.html' }]
                }
            ]
        };
    }
};
</script>
