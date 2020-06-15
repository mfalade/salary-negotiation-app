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
    </section>
  </main>
</template>

<script>
import AppTab from '@/components/Tab/Tab.vue';
import ResultPanel from '@/components/ResultPanel/ResultPanel.vue';

export default {
  name: 'HomeView',
  components: { AppTab, ResultPanel },
  data() {
    return {
      employee: {
        id: 'employee',
        description: 'This is my employee tab',
        state: {
          inputValue: null,
          isFormSubmitted: false,
        },
      },
      employer: {
        id: 'employer',
        description: 'This is my employer tab',
        state: {
          inputValue: null,
          isFormSubmitted: false,
        },
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
};
</script>

<style src="./Home.scss" lang="scss" scoped></style>
