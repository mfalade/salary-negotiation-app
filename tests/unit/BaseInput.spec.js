import { shallowMount } from '@vue/test-utils';
import BaseInput from '@/components/BaseInput/BaseInput.vue';

describe('BaseInput.vue', () => {
  it('renders props.label when passed', () => {
    const testLabel = 'Test label';
    const wrapper = shallowMount(BaseInput, {
      propsData: { label: testLabel },
      directives: { focus: () => {} },
    });
    expect(wrapper.text()).toMatch(testLabel);
  });
});
