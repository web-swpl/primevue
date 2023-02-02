<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h6>Screen Reader</h6>
        <p>ProgressSpinner components uses <i>progressbar</i> role. Value to describe the component can be defined using <i>aria-labelledby</i> and <i>aria-label</i> props.</p>
        <pre v-code><code>
&lt;ProgressSpinner aria-label="Loading" /&gt;

</code></pre>

        <h6>Keyboard Support</h6>
        <p>Component does not include any interactive elements.</p>

        <h5>Dependencies</h5>
        <p>None.</p>
    </DocSectionText>
</template>
