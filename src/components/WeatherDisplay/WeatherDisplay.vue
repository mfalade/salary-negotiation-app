<template>
  <div class="mt-4">
    <br />
    <h5>Current weather in {{ city }}.</h5>
    <b-list-group class="mt-4">
      <b-list-group-item>Rain:</b-list-group-item>
      <b-list-group-item>Cloudy:</b-list-group-item>
      <b-list-group-item>Sunshine:</b-list-group-item>
      <b-list-group-item>Humidity:</b-list-group-item>
      <b-list-group-item>Wind:</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'WeatherDisplay',
  props: {
    city: String,
    weather: Object,
  },
};
</script>
