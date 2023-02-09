<template>
    <DocSectionText v-bind="$attrs">
        <p>TreeSelect component requires an array of TreeNode objects as its <i>options</i> and keys of the nodes as its value.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
    </div>
    <DocSectionCode :code="code" :service="['NodeService']" v-bind="$attrs" />
</template>

<script>
import { NodeService } from '/service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
            code: {
                basic: `
<TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
    </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
