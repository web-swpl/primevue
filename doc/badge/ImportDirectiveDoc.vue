<template>
    <DocSectionText v-bind="$attrs">
        <p>When used as a directive, badge needs to be configured at the application with a name of your choice.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `import BadgeDirective from 'primevue/badgedirective';

app.directive('badge', BadgeDirective);`
            }
        };
    }
};
</script>
