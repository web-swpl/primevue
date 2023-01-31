<template>
    <component :is="$attrs.level === 2 ? 'h3' : 'h2'" class="doc-section-label">
        {{ $attrs.label }}
        <NuxtLink :id="$attrs.id" :to="$router.currentRoute.value.path + '#' + $attrs.id" target="_self"> # </NuxtLink>
    </component>
    <div v-if="$attrs" class="doc-section-description">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inheritAttrs: false
};
</script>
