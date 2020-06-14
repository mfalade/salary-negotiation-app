<template>
  <main>
    <BaseInput
      v-model.number="employee.minExpectation"
      label="Please enter your minimum expectation"
      placeholder=""
      type="number"
      min="0"
    />
    <BaseInput
      v-model.number="employer.maxOffer"
      label="Please enter your maximum offer"
      placeholder=""
      type="number"
      min="0"
    />
  </main>
</template>

<script>
import BaseInput from '@/components/BaseInput/BaseInput.vue';

export default {
  name: 'HomeView',
  components: { BaseInput },
  data() {
    return {
      employee: {
        minExpectation: '',
        formSubmitted: false,
      },
      employer: {
        maxOffer: '',
        formSubmitted: false,
      },
    };
  },
};
</script>

<style src="./Home.scss" lang="scss" scoped></style>
