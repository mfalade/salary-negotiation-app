<template>
  <div class="d-flex justify-content-center align-items-center app-tab">
    <form @submit.prevent="handleFormSubmit">
      <h2>{{ id | capitalize }} dashboard</h2>
      <div v-if="!state.isFormSubmitted">
        <base-input
          v-model.number="state.inputValue"
          required
          :label="description"
          placeholder="0"
          type="number"
          min="0"
        />
        <b-button type="submit" class="mt-3">Submit</b-button>
      </div>

      <template v-else>
        <div class="text-center mt-4">
          <p class="mt-2">You have successfully entered your desired value.</p>
        </div>
      </template>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput/BaseInput.vue";

export default {
  name: "AppTab",
  components: { BaseInput },
  props: {
    id: { type: String, isRequired: true },
    description: { type: String, isRequired: true },
    state: { type: Object, isRequired: true }
  },
  methods: {
    handleFormSubmit: function() {
      if (this.state.inputValue === null) {
        return;
      }
      this.state.isFormSubmitted = true;
      this.$emit("input-value-submitted");
    }
  }
};
</script>

<style src="./Tab.scss" lang="scss" scoped></style>
