<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Paginator elements can be customized using the <i>template</i> property using the predefined keys, default value is "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that
            can be placed inside a paginator in any order.
        </p>
        <ul>
            <li>FirstPageLink</li>
            <li>PrevPageLink</li>
            <li>PageLinks</li>
            <li>NextPageLink</li>
            <li>LastPageLink</li>
            <li>RowsPerPageDropdown</li>
            <li>JumpToPageDropdown</li>
            <li>JumpToPageInput</li>
            <li>CurrentPageReport</li>
        </ul>
    </DocSectionText>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
            <template #start>
                <Button type="button" icon="pi pi-refresh" @click="reset()" />
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>

        <div class="image-gallery">
            <img :src="'images/nature/' + image + '.jpg'" />
        </div>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            first: 0,
            code: {
                basic: `
<Paginator v-model:first="first" :rows="1" :totalRecords="1" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
    <template #start>
        <Button type="button" icon="pi pi-refresh" @click="reset()" />
    </template>
    <template #end>
        <Button type="button" icon="pi pi-search" />
    </template>
</Paginator>

<div class="image-gallery">
    <img :src="'images/nature/' + image + '.jpg'" />
</div>`,
                options: `
<template>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
            <template #start>
                <Button type="button" icon="pi pi-refresh" @click="reset()" />
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>

        <div class="image-gallery">
            <img :src="'images/nature/' + image + '.jpg'" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: 0
        };
    },
    computed: {
        image() {
            return 'nature' + (this.first + 1);
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
            <template #start>
                <Button type="button" icon="pi pi-refresh" @click="reset()" />
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>

        <div class="image-gallery">
            <img :src="'images/nature/' + image + '.jpg'" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const first = ref(0);

const image = computed(() => 'nature' + (first.value + 1));
<\/script>`
            }
        };
    },
    computed: {
        image() {
            return 'nature' + (this.first + 1);
        }
    }
};
</script>
