<template>
    <div>
        <Head>
            <Title>Vue StyleClass Directive</Title>
            <Meta name="description" content="StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Style Class</h1>
                    <p>StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AnimationDoc from '/doc/styleclass/AnimationDoc';
import ImportDoc from '/doc/styleclass/ImportDoc';
import ToggleClass from '/doc/styleclass/ToggleClassDoc';

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
                    id: 'toggleClass',
                    label: 'Toggle Class',
                    component: ToggleClass
                },
                {
                    id: 'animation',
                    label: 'Animation',
                    component: AnimationDoc
                },
                {
                    id: 'api',
                    label: 'API',
                    doc: [{ name: 'StyleClass', pathname: '/modules/styleclass.html' }]
                }
            ]
        };
    }
};
</script>
