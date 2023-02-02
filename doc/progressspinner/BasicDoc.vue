<template>
    <DocSectionText v-bind="$attrs">
        <p>An infinite spin animation is displayed by default.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ProgressSpinner aria-label="Basic ProgressSpinner" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `<ProgressSpinner aria-label="Basic ProgressSpinner" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner aria-label="Basic ProgressSpinner" />
    </div>
</template>

<script>
<\\/script>
    `,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner aria-label="Basic ProgressSpinner" />
    </div>
</template>

<script setup>
<\\/script>
    `
            }
        };
    }
};
</script>
