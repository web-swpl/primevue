<template>
    <DocSectionText v-bind="$attrs">
        <p><i>rows</i> and <i>totalRecords</i> are the required properties of the Paginator.</p>
    </DocSectionText>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>`,
                options: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
