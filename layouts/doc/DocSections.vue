<template>
    <template v-for="doc of docs" :key="doc.label">
        <section class="py-3">
            <template v-if="doc.children && doc.id !== 'api'">
                <div :id="doc.id">
                    <h2 :id="doc.id" class="doc-section-label">
                        {{ doc.label }}
                        <NuxtLink :id="doc.id" :to="$router.currentRoute.value.path + '#' + doc.id"> # </NuxtLink>
                    </h2>
                    <div class="doc-section-description main">{{ doc.description || 'Section Content' }}</div>
                </div>
            </template>

            <template v-if="doc.component && !doc.doc">
                <component :is="{ ...doc.component }" :id="doc.id" :label="doc.label" />
            </template>

            <template v-if="doc.children && !doc.component">
                <template v-for="comp of doc.children" :key="comp.label">
                    <component :is="{ ...comp.component }" :id="comp.id" :label="comp.label" :level="2" />
                </template>
            </template>

            <template v-if="doc.id === 'api' && doc.doc">
                <DocApiSection :id="doc.id" :label="doc.label" :doc="doc.doc" />
            </template>
        </section>
    </template>
</template>

<script>
export default {
    props: ['docs']
};
</script>
