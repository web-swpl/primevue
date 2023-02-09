<template>
    <DocSectionText v-bind="$attrs">
        <p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="Confirmation" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times"
    class="w-full sm:w-10rem" aria-label="Confirmation" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times"
            class="w-full sm:w-10rem" aria-label="Confirmation" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times"
            class="w-full sm:w-10rem" aria-label="Confirmation" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`
            }
        };
    }
};
</script>
