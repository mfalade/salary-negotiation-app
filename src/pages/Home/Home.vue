<template>
  <section id="home">
    <b-card no-body>
      <b-tabs lazy pills card vertical v-model="tabIndex">
        <b-tab v-for="tab in tabs" v-bind:key="tab.id" :title="`${tab.id} tab`">
          <app-tab v-bind="tab" @input-value-submitted="showModalOnReady" />
        </b-tab>
      </b-tabs>
    </b-card>
    <b-button v-if="shouldShowResult" @click="resetStateValues" class="mt-3">
      Start Over
    </b-button>
    <b-modal ref="result-modal" hide-footer>
      <result-panel
        :employeesExpectation="employee.state.inputValue"
        :employersOffering="employer.state.inputValue"
      />
    </b-modal>
  </section>
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
      tabIndex: 0,
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
    shouldShowResult: function() {
      return (
        Boolean(this.employee.state.isFormSubmitted) &&
        Boolean(this.employer.state.isFormSubmitted)
      );
    },
    isSuccess: function() {
      return this.employer.state.inputValue >= this.employee.state.inputValue;
    },
    tabs: function() {
      return [this.employee, this.employer];
    },
  },
  methods: {
    displayModal: function(showModal) {
      const modal = this.$refs['result-modal'];
      showModal ? modal.show() : modal.hide();
    },
    resetStateValues: function() {
      this.employee.state = { ...initialState };
      this.employer.state = { ...initialState };
      this.tabIndex = 0;
      this.displayModal(false);
    },
    showModalOnReady: function() {
      if (this.shouldShowResult) {
        this.displayModal(true);
      }
    },
  },
};
</script>

<style src="./Home.scss" lang="scss" scoped></style>
