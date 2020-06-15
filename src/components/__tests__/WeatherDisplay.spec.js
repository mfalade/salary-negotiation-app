import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';

import WeatherDisplay from '@/components/WeatherDisplay/WeatherDisplay.vue';
import { weatherData } from '@/components/__fixtures__';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('WeatherDisplay component', () => {
  it('renders error message when their is an error', () => {
    const errorMessage = 'Data not found';
    const wrapper = shallowMount(WeatherDisplay, {
      localVue,
      propsData: {
        weather: {
          city: 'London',
          error: errorMessage,
        },
      },
    });

    expect(wrapper.text()).toContain('Unavailable!');
    expect(wrapper.text()).toContain(errorMessage);
    expect(wrapper.text()).not.toContain('Temperature');
  });

  it('renders error message when their is an error', () => {
    const wrapper = shallowMount(WeatherDisplay, {
      localVue,
      propsData: {
        weather: {
          city: 'London',
          error: null,
          data: weatherData,
        },
      },
    });

    const wrapperText = wrapper.text();

    expect(wrapperText).not.toContain('unavailable');
    expect(wrapperText).toContain('Temperature');
    expect(wrapperText).toContain('Humidity');
    expect(wrapperText).toContain('Wind');
    expect(wrapperText).toContain('Pressure');
    expect(wrapperText).toContain('Clouds');
  });
});
