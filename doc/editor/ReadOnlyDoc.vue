<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>readOnly</i> is present, the value cannot be edited.</p>
    </DocSectionText>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readOnly />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 'Always bet on Prime',
            code: {
                basic: `
<Editor v-model="value" editorStyle="height: 320px" readOnly />`,
                options: `
<template>
  <div class="card">
      <Editor v-model="value" editorStyle="height: 320px" readOnly />
  </div>
</template>

<script>
export default {
  data() {
      return {
          value: 'Always bet on Prime'
      }
  }
}
<\/script>`,
                composition: `
<template>
  <div class="card">
      <Editor v-model="value" editorStyle="height: 320px" readOnly />
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('Always bet on Prime');
<\/script>`
            }
        };
    }
};
</script>
