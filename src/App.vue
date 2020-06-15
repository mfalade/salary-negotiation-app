<template>
  <main id="app">
    <b-container>
      <h3 class="mt-5 pt-5 text-center">Salary Negotiation App</h3>
      <HomePage />
    </b-container>
  </main>
</template>

<script>
import HomePage from '@/pages/Home/Home.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>
