<template>
    <aside class="layout-sidebar">
        <nuxt-link to="/" class="logo" aria-label="PrimeReact logo"> <img alt="logo" :src="`/demo/images/primevue-logo${darkTheme ? '-light' : '-dark'}.svg`" /></nuxt-link>
        <nav>
            <ol class="layout-menu">
                <app-menu-item :menu="menu"></app-menu-item>
            </ol>
        </nav>
    </aside>
</template>

<script>
import menudata from '@/assets/menu/menu.json';
import AppMenuItem from './AppMenuItem.vue';
export default {
    data() {
        return {
            menu: menudata.data
        };
    },
    computed: {
        darkTheme() {
            return this.$appState.darkTheme === true;
        }
    },
    components: {
        AppMenuItem
    }
};
</script>
