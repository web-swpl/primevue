<template>
    <DocSectionText v-bind="$attrs">
        <p>
            MultiSelect is used as a controlled component with <i>v-model</i> property along with an <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i> properties respectively.
            Default property name for the <i>optionLabel</i> is <i>label</i> and <i>value</i> for the <i>optionValue</i>. If <i>optionValue</i> is omitted and the object has no <i>value</i> property, the object itself becomes the value of an option.
            Note that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
        </p>
    </DocSectionText>
    <div class="flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />`,
                options: `
<template>
    <div class="flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
</template>

<script>

<\/script>`,
                composition: `
<template>
    <div class="flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>

<\/script>`
            }
        };
    }
};
</script>
