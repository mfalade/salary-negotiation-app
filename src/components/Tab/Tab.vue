<template>
  <section class="d-flex justify-content-center align-items-center app-tab">
    <div>
      <h2>{{ id | capitalize }} dashboard</h2>
      <form v-if="!state.isFormSubmitted" @submit.prevent="handleFormSubmit">
        <base-input
          v-model.number="state.inputValue"
          required
          :label="description"
          placeholder="0"
          type="number"
          min="0"
        />
        <b-button type="submit" class="mt-3">Submit</b-button>
      </form>
      <div v-else class="text-center mt-4">
        Your value has been registered
      </div>
    </div>
  </section>
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
      this.$emit('input-value-submitted');
    },
  },
};
</script>

<style src="./Tab.scss" lang="scss" scoped></style>
