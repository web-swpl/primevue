<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<Textarea v-model="value" rows="5" cols="30" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`
            }
        };
    }
};
</script>
