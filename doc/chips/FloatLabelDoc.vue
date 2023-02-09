<template>
    <DocSectionText v-bind="$attrs">
        <p>Chips is used as a controlled input with <i>v-model</i> property where it should be an array.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<span class="p-float-label">
    <Chips id="chips" v-model="value" />
    <label for="chips">Chips</label>
</span>`,
                options: `
<template>
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`
            }
        };
    }
};
</script>
