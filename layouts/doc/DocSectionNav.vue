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
        hasHash &&
            setTimeout(() => {
                this.scrollToLabelById(id);
            }, 1);

        window.addEventListener('scroll', this.onScroll, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll, { passive: true });
    },
    methods: {
        onScroll() {
            const sections = document.querySelectorAll('section');
            const topbarEl = document.getElementsByClassName('layout-topbar')[0];

            sections.forEach((section) => {
                const sectionLabelEl = section.querySelectorAll('.doc-section-label'); //Get all labels on the currrent section
                // Check if the section is currently scrolled to center of the screen
                const isScrolledTo = (section) => window.scrollY >= section.offsetTop - topbarEl.clientHeight - 20 && window.scrollY < section.offsetTop + section.offsetHeight - topbarEl.clientHeight - 20;

                if (isScrolledTo(section)) {
                    // Check if the section has multiple child elements
                    if (sectionLabelEl.length > 1) {
                        sectionLabelEl.forEach((child) => {
                            // Check if the child element is currently scrolled to
                            if (isScrolledTo(child)) {
                                // Set the active tab to the id of the currently scrolled to child element
                                this.activeId = this.getIdOfTheSection(child);
                            }
                        });
                    } else {
                        this.activeId = this.getIdOfTheSection(sectionLabelEl[0]);
                    }
                }
            });
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
        },
        getIdOfTheSection(section) {
            return section.querySelector('a').getAttribute('id');
        }
    }
};
</script>
