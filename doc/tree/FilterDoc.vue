<template>
    <DocSectionText v-bind="$attrs">
        <p>Filtering updates the node based on the constraints.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-30rem"></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {},
            code: {
                basic: `
<Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
<Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-30rem"></Tree>`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        };
    },
    mounted() {
        NodeService.getTreeNodes().then(data => this.nodes = data);
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = { ...this.expandedKeys };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            this.expandedKeys[node.key] = true;

            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, mounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);

mounted(() => {
    NodeService.getTreeNodes().then(data => nodes.value = data);
});

const expandedKeys = ref({});

const expandAll = () => {
    for (let node of nodes.value) {
        expandNode(node);
    }

    expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    expandedKeys.value[node.key] = true;

    if (node.children && node.children.length) {
        for (let child of node.children) {
            expandNode(child);
        }
    }
};
<\/script>`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
