<template>
    <div>
        <Head>
            <Title>Vue Terminal Component</Title>
            <Meta name="description" content="Terminal is a text based user interface." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Terminal</h1>
                    <p>Terminal is a text based user interface.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '/doc/terminal/AccessibilityDoc';
import BasicDoc from '/doc/terminal/BasicDoc';
import ImportDoc from '/doc/terminal/ImportDoc';
import StyleDoc from '/doc/terminal/StyleDoc';

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
                    doc: [{ name: 'Terminal', pathname: '/modules/terminal.html' }]
                }
                /*   {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'severity',
                    label: 'Severity',
                    component: SeverityDoc
                },
                {
                    id: 'pill',
                    label: 'Pill',
                    component: PillDoc
                },
                {
                    id: 'icons',
                    label: 'Icon',
                    component: IconDoc
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
                    doc: [{ name: 'Tag', pathname: '/modules/tag.html' }]
                } */
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
p {
    margin-top: 0;
}

::v-deep(.dark-demo-terminal) {
    background-color: #212121;
    color: #ffffff;

    .p-terminal-command {
        color: #80cbc4;
    }

    .p-terminal-prompt {
        color: #ffd54f;
    }

    .p-terminal-response {
        color: #9fa8da;
    }
}
</style>
