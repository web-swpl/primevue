<template>
    <ul ref="nav" class="doc-section-nav">
        <li v-for="doc of docs" :key="doc.label" :class="['navbar-item', { 'active-navbar-item': activeId === doc.id }]">
            <div class="navbar-item-content">
                <NuxtLink :to="`/${$router.currentRoute.value.name}/#${doc.id}`">
                    <button class="p-link" @click="onButtonClick(doc)">{{ doc.label }}</button>
                </NuxtLink>
            </div>

            <template v-if="doc.children">
                <ul>
                    <li v-for="child of doc.children" :key="child.label" :class="['navbar-item', { 'active-navbar-item': activeId === child.id }]">
                        <div class="navbar-item-content">
                            <NuxtLink :to="`/${$router.currentRoute.value.name}/#${child.id}`">
                                <button class="p-link" @click="onButtonClick(child)">
                                    {{ child.label }}
                                </button>
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </template>
        </li>
    </ul>
</template>

<script>
import { DomHandler, ObjectUtils } from 'primevue/utils';

export default {
    props: ['docs'],
    data() {
        return {
            activeId: null,
            isScrollBlocked: false,
            scrollEndTimer: null,
            topbarHeight: 0
        };
    },
    mounted() {
        const hash = window.location.hash.substring(1);
        const hasHash = ObjectUtils.isNotEmpty(hash);
        const id = hasHash ? hash : (this.docs[0] || {}).id;

        this.activeId = id;
        hasHash && this.scrollToLabelById(id);

        window.addEventListener('scroll', this.onScroll, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll, { passive: true });
    },
    methods: {
        onScroll(event) {
            if (!this.isScrollBlocked) {
                const labels = DomHandler.find(event.target, ':is(h1,h2,h3).doc-section-label');
                const windowScrollTop = DomHandler.getWindowScrollTop();

                labels.forEach((label) => {
                    const { top } = DomHandler.getOffset(label);
                    const threshold = this.getThreshold(label);

                    if (top - threshold <= windowScrollTop) {
                        const link = DomHandler.findSingle(label, 'a');

                        this.activeId = link.id;
                    }
                });
            }

            clearTimeout(this.scrollEndTimer);
            this.scrollEndTimer = setTimeout(() => {
                this.isScrollBlocked = false;

                const activeItem = DomHandler.findSingle(this.$refs.nav, '.active-navbar-item');

                activeItem && activeItem.scrollIntoView({ block: 'nearest', inline: 'start' });
            }, 50);
        },
        scrollToLabelById(id, behavior = 'smooth') {
            const label = document.getElementById(id);

            label && label.parentElement.scrollIntoView({ block: 'start', behavior });
        },
        onButtonClick(doc) {
            this.activeId = doc.id;
            setTimeout(() => {
                this.scrollToLabelById(doc.id, 'smooth');
                this.isScrollBlocked = true;
            }, 1);
        },
        getThreshold(label) {
            if (!this.topbarHeight) {
                const topbar = DomHandler.findSingle(document.body, '.layout-topbar');

                this.topbarHeight = topbar ? DomHandler.getHeight(topbar) : 0;
            }

            return this.topbarHeight + DomHandler.getHeight(label) * 1.5;
        }
    }
};
</script>
