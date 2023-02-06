<template>
    <div>
        <Head>
            <Title>Vue TieredMenu Component</Title>
            <Meta name="description" content="TieredMenu displays submenus in nested overlays." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>TieredMenu</h1>
                    <p>TieredMenu displays submenus in nested overlays.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/tieredmenu/AccessibilityDoc';
import BasicDoc from '../../doc/tieredmenu/BasicDoc';
import ImportDoc from '../../doc/tieredmenu/ImportDoc';
import PopupDoc from '../../doc/tieredmenu/PopupDoc';
import StyleDoc from '../../doc/tieredmenu/StyleDoc';

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
                    id: 'popup',
                    label: 'Popup',
                    component: PopupDoc
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
                    doc: [{ name: 'TieredMenu', pathname: '/modules/tieredmenu.html' }]
                }
            ]
        };
    }
};
</script>
