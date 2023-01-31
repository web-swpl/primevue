import { mount } from '@vue/test-utils';
import Knob from './Knob.vue';

describe('Knob.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Knob, {
            props: {
                modelValue: 20
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-knob.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-knob-text').text()).toBe('20');
    });

    it('When onClick triggered', async () => {
        await wrapper.find('.p-knob > svg').trigger('click', { offsetX: 100, offsetY: 100 });

        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    });

    it('When onClick triggered and disabled props true', async () => {
        await wrapper.setProps({ disabled: true });
        await wrapper.find('.p-knob > svg').trigger('click', { offsetX: 100, offsetY: 100 });

        expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    });

    it('When onClick triggered and readonly props true', async () => {
        await wrapper.setProps({ readonly: true });
        await wrapper.find('.p-knob > svg').trigger('click', { offsetX: 100, offsetY: 100 });

        expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    });

    it('When mousedown triggered', async () => {
        global.window.addEventListener = vi.fn();

        await wrapper.find('.p-knob > svg').trigger('mousedown');

        expect(window.addEventListener).toHaveBeenCalled();
    });

    it('When onClick triggered and disabled props true', async () => {
        global.window.addEventListener = vi.fn();

        await wrapper.setProps({ disabled: true });
        await wrapper.find('.p-knob > svg').trigger('mousedown');

        expect(window.addEventListener).not.toHaveBeenCalled();
    });

    it('When mouseup triggered', async () => {
        global.window.removeEventListener = vi.fn();

        await wrapper.find('.p-knob > svg').trigger('mouseup');

        expect(window.removeEventListener).toHaveBeenCalled();
    });

    it('When mouseup triggered and disabled props true', async () => {
        global.window.removeEventListener = vi.fn();

        await wrapper.setProps({ disabled: true });
        await wrapper.find('.p-knob > svg').trigger('mouseup');

        expect(window.removeEventListener).not.toHaveBeenCalled();
    });

    it('When onTouchStart triggered', async () => {
        global.window.addEventListener = vi.fn();

        await wrapper.find('.p-knob > svg').trigger('touchstart');

        expect(window.addEventListener).toHaveBeenCalled();
    });

    it('When onTouchStart triggered and disabled prop true', async () => {
        global.window.addEventListener = vi.fn();

        await wrapper.setProps({ disabled: true });
        await wrapper.find('.p-knob > svg').trigger('touchstart');

        expect(window.addEventListener).not.toHaveBeenCalled();
    });

    it('When onTouchEnd triggered', async () => {
        global.window.removeEventListener = vi.fn();

        await wrapper.find('.p-knob > svg').trigger('touchend');

        expect(window.removeEventListener).toHaveBeenCalled();
    });

    it('When onTouchEnd triggered and disabled props true', async () => {
        global.window.removeEventListener = vi.fn();

        await wrapper.setProps({ disabled: true });
        await wrapper.find('.p-knob > svg').trigger('touchend');

        expect(window.removeEventListener).not.toHaveBeenCalled();
    });

    it('When onMouseMove triggered', async () => {
        const updateValueSpy = vi.spyOn(wrapper.vm, 'updateValue');

        wrapper.vm.onMouseMove({ offsetX: 100, offsetY: 100, preventDefault: () => {} });

        expect(updateValueSpy).toHaveBeenCalled();
    });

    it('When onMouseMove triggered and disabled true', async () => {
        await wrapper.setProps({ disabled: true });
        const updateValueSpy = vi.spyOn(wrapper.vm, 'updateValue');

        wrapper.vm.onMouseMove({ offsetX: 100, offsetY: 100, preventDefault: () => {} });

        expect(updateValueSpy).not.toHaveBeenCalled();
    });

    describe('keyDown events', () => {
        it('When ArrowRight triggered', async () => {
            const updateModelValueSpy = vi.spyOn(wrapper.vm, 'updateModelValue');

            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'ArrowRight' });

            expect(updateModelValueSpy).toHaveBeenCalled();
        });

        it('When ArrowUp triggered', async () => {
            const updateModelValueSpy = vi.spyOn(wrapper.vm, 'updateModelValue');

            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'ArrowUp' });

            expect(updateModelValueSpy).toHaveBeenCalled();
        });

        it('When ArrowLeft triggered', async () => {
            const updateModelValueSpy = vi.spyOn(wrapper.vm, 'updateModelValue');

            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'ArrowLeft' });

            expect(updateModelValueSpy).toHaveBeenCalled();
        });

        it('When ArrowDown triggered', async () => {
            const updateModelValueSpy = vi.spyOn(wrapper.vm, 'updateModelValue');

            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'ArrowDown' });

            expect(updateModelValueSpy).toHaveBeenCalled();
        });

        it('When PageUp triggered', async () => {
            const updateModelValueSpy = vi.spyOn(wrapper.vm, 'updateModelValue');

            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'PageUp' });

            expect(updateModelValueSpy).toHaveBeenCalled();
        });

        it('When PageDown triggered', async () => {
            const updateModelValueSpy = vi.spyOn(wrapper.vm, 'updateModelValue');

            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'PageDown' });

            expect(updateModelValueSpy).toHaveBeenCalled();
        });

        it('When Home triggered', async () => {
            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'Home' });

            expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        });

        it('When End triggered', async () => {
            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'End' });

            expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        });

        it('When End triggered and disabled false', async () => {
            await wrapper.setProps({ disabled: true });
            await wrapper.find('.p-knob > svg').trigger('keydown', { code: 'End' });

            expect(wrapper.emitted('update:modelValue')).toBeFalsy();
        });
    });

    it('When min max properties bigger than 0 zeroRadians property should be return mapRange', async () => {
        const mapRangeSpy = vi.spyOn(wrapper.vm, 'mapRange');

        await wrapper.setProps({ min: 10, max: 20 });

        expect(mapRangeSpy).toHaveBeenCalled();
    });
});
