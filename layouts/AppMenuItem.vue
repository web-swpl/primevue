<template>
    <li v-for="(menuitem, index) in menu" :key="`_root${index}`">
        <button v-if="menuitem.children && root" v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }" type="button" class="p-link">
            <div class="menu-icon">
                <i :class="menuitem.icon"></i>
            </div>
            <span>{{ menuitem.name }}</span>
            <i class="menu-toggle-icon pi pi-angle-down"></i>
        </button>

        <a v-if="menuitem.href" :href="menuitem.href" target="_blank" rel="noopener noreferrer">
            <div v-if="menuitem.icon && root" class="menu-icon">
                <i :class="menuitem.icon"></i>
            </div>
            {{ menuitem.name }}
        </a>
        <nuxt-link v-if="menuitem.to" :to="menuitem.to" :class="{ 'router-link-active': menuitem.to === $route.fullPath }">
            <div v-if="menuitem.icon && root" class="menu-icon">
                <i :class="menuitem.icon"></i>
            </div>
            {{ menuitem.name }}
        </nuxt-link>

        <span v-if="!root && menuitem.children" class="menu-child-category">{{ menuitem.name }}</span>
        <div class="overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out" :class="{ hidden: menuitem.children && root }">
            <ol>
                <app-menu-item :root="false" :menu="menuitem.children"></app-menu-item>
            </ol>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        root: {
            type: Boolean,
            default: true
        },
        menu: {
            type: Object,
            default: null
        }
    }
};
</script>
