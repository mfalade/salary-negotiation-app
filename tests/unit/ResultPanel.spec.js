import { shallowMount } from '@vue/test-utils';
import ResultPanel from '@/components/ResultPanel/ResultPanel.vue';

describe('ResultPanel.vue', () => {
  it('renders props.label when passed', () => {
    const testLabel = 'Test label';
    const wrapper = shallowMount(ResultPanel, {
      propsData: { label: testLabel },
      directives: { focus: () => {} },
    });
    expect(wrapper.text()).toMatch(testLabel);
  });
});
