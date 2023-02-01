<template>
    <div>
        <Head>
            <Title>Vue FocusTrap Directive</Title>
            <Meta name="description" content="Focus Trap keeps focus within a certain DOM element while tabbing." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>FocusTrap</h1>
                    <p>Focus Trap keeps focus within a certain DOM element while tabbing.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import BasicDoc from '../../doc/focustrap/BasicDoc.vue';
import ImportDoc from '../../doc/focustrap/ImportDoc.vue';

export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            accept: null,
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Label',
                    component: BasicDoc
                }
            ]
        };
    }
};
</script>
