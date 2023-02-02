<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Ripple from 'primevue/ripple';
app.directive('ripple', Ripple);`
            }
        };
    }
};
</script>
