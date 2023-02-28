<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import News from '@/assets/data/news.json';
import laraLight from '@/themes/lara-light';
import laraDark from '@/themes/lara-dark';

export default {
    themeChangeListener: null,
    newsActivate: null,
    data() {
        return {
            layout: 'custom'
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                if (to.name === 'index') {
                    this.layout = 'custom';
                } else {
                    this.layout = 'default';
                }
            }
        }
    },
    mounted() {
        this.newsActivate = () => {
            this.$appState.announcement = News;
            const itemString = localStorage.getItem(this.$appState.storageKey);

            if (itemString) {
                const item = JSON.parse(itemString);

                if (!item.hiddenNews || item.hiddenNews !== News.id)
                    this.$appState.newsActive = true;
                
                else this.$appState.newsActive = false;
            } 
            else {
                this.$appState.newsActive = true;
            }
        };

        this.themeChangeListener = (event) => {
            if (event.dark)
                this.$primevue.config.theme = laraDark;
            else
                this.$primevue.config.theme = laraLight;
            
            
            /*const elementId = 'theme-link';
            const linkElement = document.getElementById(elementId);
            const cloneLinkElement = linkElement.cloneNode(true);
            const newThemeUrl = linkElement.getAttribute('href').replace(this.$appState.theme, event.theme);

            cloneLinkElement.setAttribute('id', elementId + '-clone');
            cloneLinkElement.setAttribute('href', newThemeUrl);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', elementId);
            });
            linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);
*/
            this.$appState.theme = event.theme;
            this.$appState.darkTheme = event.dark;
        };

        EventBus.on('theme-change', this.themeChangeListener);
        EventBus.on('news-activate', this.newsActivate);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
        EventBus.off('news-activate', this.newsActivate);
    }
};
</script>

<style lang="scss">
@import '@/assets/styles/landing/landing.scss';
@import '@/assets/styles/app/app.scss';
</style>
