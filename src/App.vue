<template>
  <main id="app">
    <b-container>
      <app-header />
      <home-page />
    </b-container>
  </main>
</template>

<script>
import HomePage from '@/pages/Home/Home.vue';
import AppHeader from '@/components/AppHeader/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HomePage,
  },
};
</script>
