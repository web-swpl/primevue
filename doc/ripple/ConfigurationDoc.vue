<template>
    <DocSectionText v-bind="$attrs">
        <p>To start with, Ripple needs to be enabled globally. See the <nuxt-link to="/ripple">Configuration API</nuxt-link> for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
PrimeVue.ripple = true;`
            }
        };
    }
};
</script>
