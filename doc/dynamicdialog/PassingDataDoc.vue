<template>
    <DocSectionText v-bind="$attrs">
        <p>Data can be passed to the component that is loaded by the Dialog and also from the component back to the caller component. Use the <i>open</i> function and pass your parameters with the <i>data</i> property in the options object.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" import hideCodeSandbox hideStackBlitz />
    <DocSectionCode :code="code2" import hideCodeSandbox hideStackBlitz />
    <DocSectionText v-bind="$attrs">
        <p>Similarly when hiding a Dialog, any parameter passed to the <i>close</i> function is received from the <i>onClose</i> callback defined by the <i>open</i> function at the caller.</p>
    </DocSectionText>
    <DocSectionCode :code="code3" import hideCodeSandbox hideStackBlitz />
    <DocSectionCode :code="code4" import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
this.$dialog.open(ProductListDemo, {
    data: {
        user: 'primetime'
    }
};`
            },
            code2: {
                basic: `
export default {
    inject: ['dialogRef'],
    mounted:{
        const params = this.dialogRef.data; // {user: 'primetime'}
    }
}`
            },
            code3: {
                basic: `
this.$dialog.open(ProductListDemo, {
    onClose(options) {
        const callbackParams = options.data; // {id: 12}
    }
);`
            },
            code4: {
                basic: `
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close({id: 12});
        }
    }
}`
            }
        };
    }
};
</script>
