<template>
  <form @submit.prevent="handleFormSubmit">
    <h2>{{ id }}</h2>
    <template v-if="!state.isFormSubmitted">
      <base-input
        v-model.number="state.inputValue"
        :label="description"
        placeholder="0"
        type="number"
        min="0"
      />
      <button type="submit">Submit</button>
    </template>

    <template v-else>
      <p>You have successfully set your desired value.</p>
    </template>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput/BaseInput.vue';

export default {
  name: 'AppTab',
  components: { BaseInput },
  props: {
    id: { type: String, isRequired: true },
    description: { type: String, isRequired: true },
    state: { type: Object, isRequired: true },
  },
  methods: {
    handleFormSubmit: function() {
      if (this.state.inputValue === null) {
        return;
      }
      this.state.isFormSubmitted = true;
    },
  },
};
</script>
