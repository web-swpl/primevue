<template>
    <DocSectionText v-bind="$attrs">
        <p>Text to display is defined with the <i>text</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InlineMessage severity="info">Username is required</InlineMessage>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
