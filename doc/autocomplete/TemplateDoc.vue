<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Custom content can be displayed as an option using <i>option</i> template that references a function with a suggestion option as a parameter and returns an element. Similarly <i>selectedItemTemplate</i> property is available to customize
            the chips in multiple mode using the same approach. Note that <i>selectedItemTemplate</i> is only available in multiple mode at the moment.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex align-options-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
    <DocSectionCode :code="code" :service="['CountryService']" />
</template>

<script>
import { CountryService } from '../../service/CountryService';
export default {
    data() {
        return {
            selectedCountry: null,
            countries: null,
            filteredCountries: null,
            code: {
                basic: `
<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
    <template #option="slotProps">
        <div class="flex align-options-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
</AutoComplete>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex align-options-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script>
import { CountryService } from './service/CountryService';

export default {
    data() {
        return {
            countries: null,
            selectedCountry: null,
            filteredCountries: null
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
    },
    methods: {
        search(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex align-options-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "./service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>`
            }
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
    },
    methods: {
        search(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
};
</script>
