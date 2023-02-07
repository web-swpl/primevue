<template>
    <DocSectionText v-bind="$attrs">
        <p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked1" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="do you confirm" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            checked1: true,
            code: {
                basic: `
<ToggleButton v-model="checked1" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="do you confirm" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked1" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="do you confirm" />
    </div>
</template>

<script>
export default {
  data() {
      return {
          checked1: true
      }
  }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked1" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="do you confirm" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
<\/script>`
            }
        };
    }
};
</script>
