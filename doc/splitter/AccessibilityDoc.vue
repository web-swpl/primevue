<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h6>Screen Reader</h6>
        <p>Splitter bar defines <i>separator</i> as the role with <i>aria-orientation</i> set to either horizontal or vertical.</p>

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
                        <td><i>tab</i></td>
                        <td>Moves focus through the splitter bar.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Moves a vertical splitter down.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves a vertical splitter up.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Moves a horizontal splitter to the left.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Moves a horizontal splitter to the right.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
