<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>autoplayInterval</i> is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling <i>circular</i> property needs to be added which is enabled automatically in auto play mode.</p>
    </DocSectionText>

    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="product-item">
                    <div class="product-item-content">
                        <div class="mb-3">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                        </div>
                        <div>
                            <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                            <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                            <div class="mt-5">
                                <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    <DocSectionCode :code="code" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
            code: {
                basic: `
<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
    <template #item="slotProps">
        <div class="product-item">
            <div class="product-item-content">
                <div class="mb-3">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                </div>
                <div>
                    <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                    <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                    <div class="mt-5">
                        <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                        <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                        <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                    </div>
                </div>
            </div>
        </div>
    </template>
</Carousel>`,
                options: `
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="product-item">
                    <div class="product-item-content">
                        <div class="mb-3">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                        </div>
                        <div>
                            <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                            <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                            <div class="mt-5">
                                <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="product-item">
                    <div class="product-item-content">
                        <div class="mb-3">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                        </div>
                        <div>
                            <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                            <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                            <div class="mt-5">
                                <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);
<\/script>`,
                data: `
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`
            }
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    }
};
</script>
