<template>
    <div>
        <Head>
            <Title>Vue Skeleton Component</Title>
            <Meta name="description" content="Skeleton is a placeholder to display instead of the actual content." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Skeleton</h1>
                    <p>Skeleton displays a rectangle in its simplest form.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import Accessibility from '/doc/skeleton/AccessibilityDoc.vue';
import CardDoc from '/doc/skeleton/CardDoc.vue';
import DatatableDoc from '/doc/skeleton/DatatableDoc.vue';
import ImportDoc from '/doc/skeleton/ImportDoc.vue';
import ListDoc from '/doc/skeleton/ListDoc.vue';
import ShapesDoc from '/doc/skeleton/ShapesDoc.vue';
import StyleDoc from '/doc/skeleton/StyleDoc.vue';

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
                    id: 'shapes',
                    label: 'Shapes',
                    component: ShapesDoc
                },
                {
                    id: 'card',
                    label: 'Card',
                    component: CardDoc
                },
                {
                    id: 'list',
                    label: 'List',
                    component: ListDoc
                },
                {
                    id: 'datatable',
                    label: 'Datatable',
                    component: DatatableDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: Accessibility
                },
                {
                    id: 'api',
                    label: 'API',
                    doc: [{ name: 'Skeleton', pathname: '/modules/skeleton.html' }]
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.custom-skeleton {
    border: 1px solid var(--surface-border);
    border-radius: 4px;

    ul {
        list-style: none;
    }
}
</style>
