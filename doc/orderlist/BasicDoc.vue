<template>
    <DocSectionText v-bind="$attrs">
        <p>OrderList requires an array as its value bound with the v-model directive and a template for its content.</p>
    </DocSectionText>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="product-item">
                    <div class="image-container">
                        <img :src="'images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    </div>
                    <div class="product-list-detail">
                        <h6 class="mb-2">{{ slotProps.item.name }}</h6>
                        <i class="pi pi-tag product-category-icon"></i>
                        <span class="product-category">{{ slotProps.item.category }}</span>
                    </div>
                    <div class="product-list-action">
                        <h6 class="mb-2">${{ slotProps.item.price }}</h6>
                        <span :class="'product-badge status-' + slotProps.item.inventoryStatus.toLowerCase()">{{ slotProps.item.inventoryStatus }}</span>
                    </div>
                </div>
            </template>
        </OrderList>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';
export default {
    data() {
        return {
            products: null,
            code: {
                basic: `
<OrderList v-model="products" listStyle="height:auto" dataKey="id">
    <template #header> List of Products </template>
    <template #item="slotProps">
        <div class="product-item">
            <div class="image-container">
                <img :src="'images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
            </div>
            <div class="product-list-detail">
                <h6 class="mb-2">{{ slotProps.item.name }}</h6>
                <i class="pi pi-tag product-category-icon"></i>
                <span class="product-category">{{ slotProps.item.category }}</span>
            </div>
            <div class="product-list-action">
                <h6 class="mb-2">{{ slotProps.item.price }}</h6>
                <span :class="'product-badge status-' + slotProps.item.inventoryStatus.toLowerCase()">{{ slotProps.item.inventoryStatus }}</span>
            </div>
        </div>
    </template>
</OrderList>`,
                options: `
<template>
    <div class="card">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="product-item">
                    <div class="image-container">
                        <img :src="'images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    </div>
                    <div class="product-list-detail">
                        <h6 class="mb-2">{{ slotProps.item.name }}</h6>
                        <i class="pi pi-tag product-category-icon"></i>
                        <span class="product-category">{{ slotProps.item.category }}</span>
                    </div>
                    <div class="product-list-action">
                        <h6 class="mb-2">{{ slotProps.item.price }}</h6>
                        <span :class="'product-badge status-' + slotProps.item.inventoryStatus.toLowerCase()">{{ slotProps.item.inventoryStatus }}</span>
                    </div>
                </div>
            </template>
        </OrderList>
    </div>
</template>

<script>
import { ProductService } from './service/ProductService'
export default {
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
<\/script>

<style scoped>
.product-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
}
.product-item img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
}
.product-item .product-list-detail {
    flex: 1 1 0;
}
.product-item .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.product-item .product-category-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
    font-size: 0.875rem;
}
.product-item .product-category {
    vertical-align: middle;
    line-height: 1;
    font-size: 0.875rem;
}
@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;
    }
    .product-item .image-container {
        width: 100%;
        text-align: center;
    }
    .product-item img {
        margin: 0 0 1rem 0;
        width: 100px;
    }
}
</style>`,
                composition: `
<template>
    <div class="card">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="product-item">
                    <div class="image-container">
                        <img :src="'images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    </div>
                    <div class="product-list-detail">
                        <h6 class="mb-2">{{ slotProps.item.name }}</h6>
                        <i class="pi pi-tag product-category-icon"></i>
                        <span class="product-category">{{ slotProps.item.category }}</span>
                    </div>
                    <div class="product-list-action">
                        <h6 class="mb-2">{{ slotProps.item.price }}</h6>
                        <span :class="'product-badge status-' + slotProps.item.inventoryStatus.toLowerCase()">{{ slotProps.item.inventoryStatus }}</span>
                    </div>
                </div>
            </template>
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from './service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (this.products = data));
});
<\/script>

<style scoped>
.product-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
}
.product-item img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
}
.product-item .product-list-detail {
    flex: 1 1 0;
}
.product-item .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.product-item .product-category-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
    font-size: 0.875rem;
}
.product-item .product-category {
    vertical-align: middle;
    line-height: 1;
    font-size: 0.875rem;
}
@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;
    }
    .product-item .image-container {
        width: 100%;
        text-align: center;
    }
    .product-item img {
        margin: 0 0 1rem 0;
        width: 100px;
    }
}
</style>`
            }
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
</script>

<style scoped>
.product-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
}
.product-item img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
}
.product-item .product-list-detail {
    flex: 1 1 0;
}
.product-item .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.product-item .product-category-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
    font-size: 0.875rem;
}
.product-item .product-category {
    vertical-align: middle;
    line-height: 1;
    font-size: 0.875rem;
}
@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;
    }
    .product-item .image-container {
        width: 100%;
        text-align: center;
    }
    .product-item img {
        margin: 0 0 1rem 0;
        width: 100px;
    }
}
</style>
