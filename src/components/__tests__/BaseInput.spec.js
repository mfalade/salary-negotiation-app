import { shallowMount } from '@vue/test-utils';
import BaseInput from '@/components/BaseInput/BaseInput.vue';

describe('BaseInput', () => {
  it('renders props.label when passed', () => {
    const testLabel = 'Test label';
    const wrapper = shallowMount(BaseInput, {
      propsData: { label: testLabel },
      directives: { focus: () => {} },
    });
    expect(wrapper.text()).toMatch(testLabel);
  });

  it('emits input event when value is changed', () => {
    const testValue = 42;
    const wrapper = shallowMount(BaseInput, {
      propsData: {},
      directives: { focus: () => {} },
    });
    const numberInput = wrapper.find('input');

    numberInput.setValue(testValue);

    expect(wrapper.emitted().input).toBeTruthy();
    expect(Number(wrapper.emitted().input[0])).toEqual(testValue);
  });
});
