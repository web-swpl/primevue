<template>
    <DocSectionText v-bind="$attrs">
        <p>Available options and the selected options support templating with <i>option</i> and <i>value</i> properties respectively. In addition, header, footer, filter, optiongroup, chip and indicator sections can be templated as well.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" display="chip" class="w-full md:w-20rem">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-3">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCountries: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ],
            code: {
                basic: `
<MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" display="chip" class="w-full md:w-20rem">
    <template #option="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
    <template #footer>
        <div class="py-2 px-3">
            <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
        </div>
    </template>
</MultiSelect>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" display="chip" class="w-full md:w-20rem">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-3">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCountries: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ]
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" display="chip" class="w-full md:w-20rem">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-3">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountries = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);
<\/script>`
            }
        };
    }
};
</script>
