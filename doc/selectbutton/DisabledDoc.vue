<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the <i>optionDisabled</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center flex-wrap gap-3">
        <SelectButton v-model="value" :options="options1" aria-labelledby="basic" disabled />
        <SelectButton :options="options2" option-disabled="constant" optionLabel="name" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            value: 'Off',
            options1: ['Off', 'On'],
            options2: [
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2, constant: true }
            ],
            code: {
                basic: `
<SelectButton v-model="value" :options="options" aria-labelledby="basic" disabled />
<SelectButton v-model="value" :options="options2" option-disabled="constant" optionLabel="name" />`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center flex-wrap gap-3">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" disabled />
        <SelectButton v-model="value" :options="options2" option-disabled="constant" optionLabel="name" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'off',
            options1: ['Off', 'On'],
            options2: [
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2, constant: true }
            ]
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center flex-wrap gap-3">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" disabled />
        <SelectButton v-model="value" :options="options2" option-disabled="constant" optionLabel="name" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('off');
const options1 = ref(['Off', 'On']);
const options2 = ref([
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2, constant: true }
            ]);
<\/script>`
            }
        };
    }
};
</script>
