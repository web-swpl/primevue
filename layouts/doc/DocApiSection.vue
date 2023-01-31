<template>
    <DocSectionText v-bind="$attrs">Visit the API documentation for detailed information about all the properties, events and methods of the component.</DocSectionText>
    <ul>
        <li v-for="apiDoc of $attrs.doc" :key="apiDoc.name">
            {{ apiDoc.name }}
            <!-- <a :href="`${apiDoc.apiDocUrl + apiDoc.pathname}`" target="_blank" rel="noreferrer"> {{ apiDoc.name }} </a> -->
        </li>
    </ul>
</template>

<script>
export default {
    inheritAttrs: false
};
</script>
