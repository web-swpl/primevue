<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h6>Screen Reader</h6>
        <p>
            A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require
            to use one of the <a href="https://www.w3.org/TR/wai-aria/#landmark" alt="Landmark Roles">landmark</a> roles like <i>region</i>, you may use the <i>role</i> property.
        </p>
        <pre v-code><code>
&lt;Card role="region"&gt;
    Content
&lt;/Card&gt;

</code></pre>
        <h5>Keyboard Support</h5>
        <p>Component does not include any interactive elements.</p>
    </DocSectionText>
</template>
