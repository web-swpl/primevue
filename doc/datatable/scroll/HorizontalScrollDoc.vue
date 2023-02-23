<template>
    <DocSectionText v-bind="$attrs">
        <p>Adding <i>scrollable scrollDirection="both" </i> property along with a <i>scrollHeight</i> for the data viewport enables vertical scrolling with fixed headers.</p>
    </DocSectionText>
    <div class="card">
        <DataTable :value="customers" scrollable scrollDirection="both" scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" footer="Id"></Column>
            <Column field="name" header="Name" footer="Name"></Column>
            <Column field="country.name" header="Country" footer="Country"></Column>
            <Column field="date" header="Date" footer="Date"></Column>
            <Column field="balance" header="Balance" footer="Balance">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
            </Column>
            <Column field="company" header="Company" footer="Company"></Column>
            <Column field="status" header="Status" footer="Status"></Column>
            <Column field="activity" header="Activity" footer="Activity"></Column>
            <Column field="representative.name" header="Representative" footer="Representative"></Column>
        </DataTable>
    </div>
    <DocSectionCode :code="code" :service="['CustomerService']" />
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            code: {
                basic: `
<DataTable :value="customers" scrollable scrollDirection="both" scrollHeight="400px" tableStyle="min-width: 50rem">
    <Column field="id" header="Id" footer="Id"></Column>
    <Column field="name" header="Name" footer="Name"></Column>
    <Column field="country.name" header="Country" footer="Country"></Column>
    <Column field="date" header="Date" footer="Date"></Column>
    <Column field="balance" header="Balance" footer="Balance">
        <template #body="{ data }">
            {{ formatCurrency(data.balance) }}
        </template>
    </Column>
    <Column field="company" header="Company" footer="Company"></Column>
    <Column field="status" header="Status" footer="Status"></Column>
    <Column field="activity" header="Activity" footer="Activity"></Column>
    <Column field="representative.name" header="Representative" footer="Representative"></Column>
</DataTable>`,
                options: `
<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollDirection="both" scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" footer="Id"></Column>
            <Column field="name" header="Name" footer="Name"></Column>
            <Column field="country.name" header="Country" footer="Country"></Column>
            <Column field="date" header="Date" footer="Date"></Column>
            <Column field="balance" header="Balance" footer="Balance">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
            </Column>
            <Column field="company" header="Company" footer="Company"></Column>
            <Column field="status" header="Status" footer="Status"></Column>
            <Column field="activity" header="Activity" footer="Activity"></Column>
            <Column field="representative.name" header="Representative" footer="Representative"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollDirection="both" scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" footer="Id"></Column>
            <Column field="name" header="Name" footer="Name"></Column>
            <Column field="country.name" header="Country" footer="Country"></Column>
            <Column field="date" header="Date" footer="Date"></Column>
            <Column field="balance" header="Balance" footer="Balance">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
            </Column>
            <Column field="company" header="Company" footer="Company"></Column>
            <Column field="status" header="Status" footer="Status"></Column>
            <Column field="activity" header="Activity" footer="Activity"></Column>
            <Column field="representative.name" header="Representative" footer="Representative"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = data;
    });
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
<\/script>`,
                data: `
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`
            }
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
</script>
