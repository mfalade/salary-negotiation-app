import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';

import Tab from '@/components/Tab/Tab.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

const getConfig = (state) => {
  return {
    localVue,
    propsData: {
      state,
      id: 'tab1',
      description: 'tab 1 desc.',
    },
    filters: { capitalize: () => {} },
  };
};

describe('Tab component', () => {
  it('should show form input and hide confirmation message on initialization', () => {
    const initializationState = {
      isFormSubmitted: false,
      value: null,
    };
    const wrapper = shallowMount(Tab, getConfig(initializationState));

    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.text()).not.toContain('Your value has been registered');
  });

  it('should show hide form input and show confirmation message on submit', async () => {
    const submitState = {
      isFormSubmitted: true,
      value: 42,
    };
    const wrapper = shallowMount(Tab, getConfig(submitState));

    expect(wrapper.text()).toContain('Your value has been registered');
    expect(wrapper.find('form').exists()).not.toBe(true);
  });
});
