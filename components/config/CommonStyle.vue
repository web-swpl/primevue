<script>
export default {}
</script>

<style lang="css">
* {
	box-sizing: border-box;
}

.p-component {
    font-family: var(--p-font-family);
    font-size: var(--p-font-size);
    font-weight: var(--p-font-weight);
}

.p-component-overlay {
    background-color: var(--p-mask-bg);
    transition-duration: var(--p-transition-duration);
}

.p-disabled, .p-component:disabled {
    opacity: var(--p-disabled-opacity);
}
/*
.p-error {
    color: $errorColor;
}

.p-text-secondary {
    color: $textSecondaryColor;
}

.pi {
    font-size: $primeIconFontSize;
}

.p-link {
    font-size: $fontSize;
    font-family: $fontFamily;
    border-radius: $borderRadius;

    &:focus {
        @include focused();
    }
}*/

@keyframes p-component-overlay-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: var(--maskbg);
    }
}

@keyframes p-component-overlay-leave-animation {
    from {
        background-color: var(--maskbg);
    }
    to {
        background-color: transparent;
    }
}

.p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
}

.p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
}

.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden {
    display: none;
}

.p-hidden-space {
    visibility: hidden;
}

.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default !important;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overflow-hidden {
    overflow: hidden;
}

.p-unselectable-text {
    user-select: none;
}

.p-scrollbar-measure {
    width: 100px;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: -9999px;
}

@-webkit-keyframes p-fadein {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes p-fadein {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="file"]::-webkit-file-upload-button,
button {
    border-radius: 0;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}
</style>