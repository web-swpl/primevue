<template>
    <div>
        <Head>
            <Title>Vue PanelMenu Component</Title>
            <Meta name="description" content="PanelMenu is a hybrid of accordion-tree components." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>PanelMenu</h1>
                    <p>PanelMenu is a hybrid of accordion-tree components.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/panelmenu/AccessibilityDoc';
import BasicDoc from '../../doc/panelmenu/BasicDoc';
import ImportDoc from '../../doc/panelmenu/ImportDoc';
import ProgrammaticDoc from '../../doc/panelmenu/ProgrammaticDoc';
import StyleDoc from '../../doc/panelmenu/StyleDoc';

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
                    id: 'programmatic',
                    label: 'Programmatic',
                    component: ProgrammaticDoc
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
                    doc: [{ name: 'PanelMenu', pathname: '/modules/panelmenu.html' }]
                }
            ]
        };
    }
};
</script>
