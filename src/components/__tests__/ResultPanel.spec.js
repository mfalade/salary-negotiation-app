import { shallowMount } from '@vue/test-utils';
import ResultPanel from '@/components/ResultPanel/ResultPanel.vue';

describe('ResultPanel', () => {
  it(`shows 'success' when employer's offer is greater or equal to employee's demand`, () => {
    const wrapper = shallowMount(ResultPanel, {
      propsData: { employeesExpectation: 3000, employersOffering: 5000 },
      filters: { currency: (x) => x },
    });
    expect(wrapper.text()).toContain('Success');
    expect(wrapper.text()).not.toContain('Failure');
  });

  it(`shows 'error' when employer's offer is less than employee;s demand`, () => {
    const wrapper = shallowMount(ResultPanel, {
      propsData: { employeesExpectation: 8000, employersOffering: 5000 },
      filters: { currency: (x) => x },
    });
    expect(wrapper.text()).toContain('Failure');
    expect(wrapper.text()).not.toContain('Success');
  });
});
