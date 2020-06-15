<template>
  <section>
    <b-alert :show="isSuccess" variant="success">Success!</b-alert>
    <b-alert :show="!isSuccess" variant="danger">Failure!</b-alert>
    <div>
      <p class="mb-3">Employee's minimum expectation: {{ employeesExpectation | currency }}</p>
      <p class="mb-3">Employer's maximum offering: {{ employersOffering | currency }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultPanel",
  props: {
    employeesExpectation: Number,
    employersOffering: Number
  },
  computed: {
    isSuccess: function() {
      return this.employersOffering >= this.employeesExpectation;
    }
  }
};
</script>
