<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h6>Screen Reader</h6>
        <p>
            ScrollTop uses a button element with an <i>aria-label</i> that refers to the <i>aria.scrollTop</i> property of the <nuxt-link to="/locale">locale</nuxt-link> API by default, you may use your own aria roles and attributes as any valid
            attribute is passed to the button element implicitly.
        </p>

        <h6>Keyboard Support</h6>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Scrolls to top.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Scrolls to top.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
