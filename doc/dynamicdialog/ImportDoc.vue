<template>
    <DocSectionText v-bind="$attrs">
        <p>Dynamic dialogs require the <i>DialogService</i> to be configured globally.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import {createApp} from 'vue';
import DialogService from 'primevue/dialogservice';
import DynamicDialog from 'primevue/dynamicdialog';

const app = createApp(App);
app.use(DialogService);
app.component('DynamicDialog', DynamicDialog);`
            }
        };
    }
};
</script>
