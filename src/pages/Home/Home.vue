<template>
  <main>
    <section>
      <app-tab v-bind="employee" />
      <app-tab v-bind="employer" />
    </section>
    <section v-if="isTabValuesProvided">
      <result-panel
        :employeesExpectation="employee.state.inputValue"
        :employersOffering="employer.state.inputValue"
      />
      <button @click="resetStateValues">Start Over</button>
    </section>
  </main>
</template>

<script>
import AppTab from '@/components/Tab/Tab.vue';
import ResultPanel from '@/components/ResultPanel/ResultPanel.vue';

import { employeeTabSettings, employerTabSettings } from '@/constants';

const initialState = {
  inputValue: null,
  isFormSubmitted: false,
};

export default {
  name: 'HomeView',
  components: { AppTab, ResultPanel },
  data() {
    return {
      employee: {
        ...employeeTabSettings,
        state: { ...initialState },
      },
      employer: {
        ...employerTabSettings,
        state: { ...initialState },
      },
    };
  },
  computed: {
    isTabValuesProvided: function() {
      return (
        Boolean(this.employee.state.isFormSubmitted) &&
        Boolean(this.employer.state.isFormSubmitted)
      );
    },
    isSuccess: function() {
      return this.employer.state.inputValue >= this.employee.state.inputValue;
    },
  },
  methods: {
    resetStateValues: function() {
      this.employee.state = { ...initialState };
      this.employer.state = { ...initialState };
    },
  },
};
</script>

<style src="./Home.scss" lang="scss" scoped></style>
