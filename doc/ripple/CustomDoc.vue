<template>
    <DocSectionText v-bind="$attrs">
        <p>Styling Demo Content.</p>
    </DocSectionText>
    <div class="card card-container flex justify-content-center align-items-center gap-2">
        <div v-ripple class="card shadow-2 p-ripple styled-box-green">Green</div>
        <div v-ripple class="card shadow-2 styled-box-orange p-ripple">Orange</div>
        <div v-ripple class="card shadow-2 styled-box-purple p-ripple">Purple</div>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div v-ripple class="card styled-box-green p-ripple">Green</div>
<div v-ripple class="card styled-box-orange p-ripple">Orange</div>
<div v-ripple class="card styled-box-purple p-ripple">Purple</div>`,
                options: `
<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div v-ripple class="card styled-box-green p-ripple">Green</div>
        <div v-ripple class="card styled-box-orange p-ripple">Orange</div>
        <div v-ripple class="card styled-box-purple p-ripple">Purple</div>
    </div>
</template>

<script>
<\/script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>`,
                composition: `
<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div v-ripple class="card styled-box-green p-ripple">Green</div>
        <div v-ripple class="card styled-box-orange p-ripple">Orange</div>
        <div v-ripple class="card styled-box-purple p-ripple">Purple</div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>`
            }
        };
    }
};
</script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>
