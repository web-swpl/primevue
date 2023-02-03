<template>
    <div>
        <Head>
            <Title>Vue Menu Component</Title>
            <Meta name="description" content="Menu is a navigation/command component that supports dynamic and static positioning." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Menu</h1>
                    <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/menu/AccessibilityDoc';
import BasicDoc from '../../doc/menu/BasicDoc';
import GroupDoc from '../../doc/menu/GroupDoc';
import ImportDoc from '../../doc/menu/ImportDoc';
import PopupDoc from '../../doc/menu/PopupDoc';
import StyleDoc from '../../doc/menu/StyleDoc';
import TemplateDoc from '../../doc/menu/TemplateDoc';

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
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'popup',
                    label: 'Popup',
                    component: PopupDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
                    doc: [{ name: 'Menu', pathname: '/modules/menu.html' }]
                }
            ]
        };
    }
};
</script>
