<template>
    <DocSectionText v-bind="$attrs">
        <p>StyleClass has two modes, <i>toggleClass</i> to simply add-remove a class and enter/leave animations.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center gap-3">
        <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
        <InputText class="block" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
<InputText class="block mt-3" />`,
                options: `
<template>
    <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
    <InputText class="block" />
</template>

<script>
<\/script>
        `,
                composition: `
<template>
    <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
    <InputText class="block" />
</template>

<script setup>
<\/script>
        `
            }
        };
    }
};
</script>
