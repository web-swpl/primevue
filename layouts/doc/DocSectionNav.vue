<template>
    <ul class="hidden xl:block doc-section-nav">
        <li v-for="doc of docs" :key="doc.label" :class="['navbar-item', { 'active-navbar-item': activeTab === doc.id }]">
            <NuxtLink :to="'#' + doc.id">
                <button class="p-link" @click="onButtonClick(doc)">{{ doc.label }}</button>
            </NuxtLink>
            <template v-if="doc.children">
                <ul>
                    <li v-for="child of doc.children" :key="child.label" :class="['navbar-child-item', { 'active-navbar-child-item': activeTab === child.id }]">
                        <NuxtLink :to="$router.currentRoute.value.path + '#' + child.id">
                            <button class="p-link" @click="onButtonClick(child)">
                                {{ child.label }}
                            </button>
                        </NuxtLink>
                    </li>
                </ul>
            </template>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['docs'],
    data() {
        return {
            activeTab: null
        };
    },
    mounted() {
        const sections = document.querySelectorAll('section'); // Get all sections on the page
        const hash = window.location.hash.substring(1); // Get the initial hash

        // Set the active tab to the initial hash and scroll into view if it exists
        if (hash) {
            this.activeTab = hash;
            // Scroll to the section with the current hash
            this.scrollToTheSection(hash);
        } else if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            // Set the active tab to the first section
            this.activeTab = this.getIdOfTheSection(sections[0].querySelector('.doc-section-label'));
        }

        window.addEventListener('scroll', this.onScroll, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll, { passive: true });
    },
    methods: {
        onScroll() {
            const sections = document.querySelectorAll('section'); // Get all sections on the page
            const topbarEl = document.getElementsByClassName('layout-topbar')[0]; // Get the topbar element

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
                                this.activeTab = this.getIdOfTheSection(child);
                            }
                        });
                    } else {
                        this.activeTab = this.getIdOfTheSection(sectionLabelEl[0]);
                    }
                }
            });
        },
        onButtonClick(doc) {
            // Scroll to the clicked button's parent element
            this.scrollToTheSection(doc.id, 'smooth');
        },
        scrollToTheSection(id, behavior) {
            document.getElementById(id).parentElement.scrollIntoView({ block: 'start', behavior });
        },
        getIdOfTheSection(section) {
            return section.querySelector('a').getAttribute('id');
        }
    }
};
</script>
