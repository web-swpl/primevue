<template>
    <div>
        <Head>
            <Title>Vue Ripple Directive</Title>
            <Meta name="description" content="Ripple component adds ripple effect to the host element." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Ripple</h1>
                    <p>Ripple directive adds ripple effect to the host element.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/ripple/AccessibilityDoc';
import CustomDoc from '/doc/ripple/CustomDoc';
import DefaultDoc from '/doc/ripple/DefaultDoc';
import ImportDoc from '/doc/ripple/ImportDoc';
import StyleDoc from '/doc/ripple/StyleDoc';

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
                    id: 'default',
                    label: 'Default',
                    component: DefaultDoc
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
                    doc: [{ name: 'Ripple', pathname: '/modules/ripple.html' }]
                }
            ]
        };
    }
};
</script>
