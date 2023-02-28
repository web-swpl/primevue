<template>
    <div>
        <Head>
            <Title>Vue InputSwitch Component</Title>
            <Meta name="description" content="InputSwitch is used to select a boolean value." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputSwitch</h1>
                <p>InputSwitch is used to select a boolean value.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <InputSwitch v-model="checked1" />

                <h5>Preselection</h5>
                <InputSwitch v-model="checked2" :theme="mytheme" :style="{'--p-input-switch-width': '10rem'}"/>
                </div>
                </div>

        <InputSwitchDoc />
    </div>
</template>

<script>
import InputSwitchDoc from './InputSwitchDoc';

export default {
    data() {
        return {
            checked1: true,
            checked2: true,
            mytheme: {
                inputSwitch: {
                    width: '3rem',
                    height: '1.75rem',
                    borderRadius: '4px',
                    transitionProperty: 'background-color, color, box-shadow',
                    handle: {
                        width: '1.250rem',
                        height: '1.250rem',
                        borderRadius: '4px',
                        offBg: '#ffffff',
                        onBg: '#ffffff',
                    },
                    slider: {
                        padding: '.25rem',
                        offBg: '#ced4da',
                        offHoverBg: '#b6bfc8',
                        onBg: '#008080',
                        onHoverBg: '#329999'
                    }
                }
            }
        };
    },
    components: {
        InputSwitchDoc: InputSwitchDoc
    }
};
</script>
