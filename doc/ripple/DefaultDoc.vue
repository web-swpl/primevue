<template>
    <DocSectionText v-bind="$attrs">
        <p>Default Demo Content.</p>
    </DocSectionText>
    <div class="card card-container flex justify-content-center align-items-center">
        <div v-ripple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2 p-ripple">Default</div>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div v-ripple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">Default</div>`,
                options: `
<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div v-ripple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">Default</div>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div v-ripple class="card text-primary bg-primary flex select-none justify-content-center align-items-center shadow-2">Default</div>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
