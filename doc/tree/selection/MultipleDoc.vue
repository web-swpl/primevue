<template>
    <DocSectionText v-bind="$attrs">
        <p>A simple Panel is created with a <i>header</i> property along with the content as children.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label htmlFor="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';
export default {
    data() {
        return {
            checked: false,
            nodes: null,
            selectedKey: null,
            code: {
                basic: `
<Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>`,
                options: `
<template>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label htmlFor="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            checked: false,
            nodes: null,
            selectedKey: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label htmlFor="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
    </div>
</template>

<script setup>
import { ref, mounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedKey = ref(null);
const checked = ref(false);

mounted(() => {
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
