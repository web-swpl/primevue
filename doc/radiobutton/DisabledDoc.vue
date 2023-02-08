<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <RadioButton disabled />
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
<RadioButton disabled />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <RadioButton disabled />
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <RadioButton disabled />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
