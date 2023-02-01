<template>
    <div>
        <Head>
            <Title>Vue Avatar Component</Title>
            <Meta name="description" content="Avatar represents people using icons, labels and images." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Avatar</h1>
                    <p>Avatar represents people using icons, labels and images.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AccessibilityDoc from '../../doc/avatar/accessibilitydoc';
import AvatarGroupDoc from '../../doc/avatar/avatargroupdoc';
import IconDoc from '../../doc/avatar/icondoc';
import ImageDoc from '../../doc/avatar/imagedoc';
import ImportDoc from '../../doc/avatar/importdoc';
import LabelDoc from '../../doc/avatar/labeldoc';
import StylingAvatarDoc from '../../doc/avatar/stylingavatardoc';
import StylingAvatarGroupDoc from '../../doc/avatar/stylingavatargroupdoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'label',
                    label: 'Label',
                    component: LabelDoc
                },
                {
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
                },
                {
                    id: 'image',
                    label: 'Image',
                    component: ImageDoc
                },
                {
                    id: 'avatargroup',
                    label: 'AvatarGroup',
                    component: AvatarGroupDoc
                },
                {
                    id: 'stylingofavatar',
                    label: 'Styling of Avatar',
                    component: StylingAvatarDoc
                },
                {
                    id: 'stylingofavatargroup',
                    label: 'Styling of Avatar Group',
                    component: StylingAvatarGroupDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                },
                {
                    id: 'api',
                    label: 'API',
                    doc: [{ name: 'Avatar', pathname: '/modules/avatar.html' }]
                }
            ]
        };
    }
};
</script>
