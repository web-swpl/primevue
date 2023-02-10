<template>
    <DocSectionText id="style" label="Style" v-bind="$attrs">
        <p>Following is the list of structural style classes, for theming classes visit <nuxt-link to="/theming">theming</nuxt-link> page.</p>
    </DocSectionText>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>group</td>
                    <td>string</td>
                    <td>null</td>
                    <td>Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.</td>
                </tr>
                <tr>
                    <td>breakpoints</td>
                    <td>object</td>
                    <td>null</td>
                    <td>Object literal to define widths per screen size.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
