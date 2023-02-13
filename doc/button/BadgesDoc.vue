<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in badge support with <i>badge</i> and <i>badgeClassName</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
