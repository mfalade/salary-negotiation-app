<template>
  <article class="mt-4" data-cy="weather-display">
    <br />
    <h5>Current weather in {{ weather.city }}.</h5>
    <b-list-group class="mt-4" v-if="!weather.error">
      <b-list-group-item
        v-for="dataPoint in dataPoints"
        v-bind:key="dataPoint.name"
      >
        {{ dataPoint.name }}:
        <strong>{{ dataPoint.value }} </strong>
        {{ dataPoint.unit }}
      </b-list-group-item>
    </b-list-group>
    <div v-else class="mt-4">
      <p>Unavailable!</p>
      <p class="text-danger">Reason: {{ weather.error }}</p>
    </div>
  </article>
</template>

<script>
import get from 'lodash/get';

export default {
  name: 'WeatherDisplay',
  props: {
    weather: Object,
  },
  computed: {
    dataPoints: function() {
      return [
        {
          name: 'Temperature',
          value: get(this.weather, 'data.main.temp'),
          unit: 'Kelvin',
        },
        {
          name: 'Pressure',
          value: get(this.weather, 'data.main.pressure'),
          unit: 'hPa',
        },
        {
          name: 'Clouds',
          value: get(this.weather, 'data.clouds.all'),
          unit: '%',
        },
        {
          name: 'Humidity',
          value: get(this.weather, 'data.main.humidity'),
          unit: '%',
        },
        {
          name: 'Wind',
          value: get(this.weather, 'data.wind.speed'),
          unit: 'meter/sec',
        },
      ];
    },
  },
};
</script>
