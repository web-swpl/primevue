<template>
    <div class="doc-main">
        <DocSectionText v-bind="$attrs">
            <p>{{ doc ? 'Visit the API documentation for detailed information about all the properties, events and methods of the component.' : 'The components does not have any Javascript API.' }}</p>
        </DocSectionText>

        <template v-if="doc">
            <template v-for="(apiDoc, index) of doc" :key="index">
                <li class="field doc-section-description">
                    <a :href="apiDoc.pathname" target="_blank" rel="noreferrer">
                        {{ apiDoc.name }}
                    </a>
                </li>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    props: ['doc']
};
</script>
