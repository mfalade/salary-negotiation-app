<template>
  <section>
    <b-alert :show="isSuccess" variant="success">Success!</b-alert>
    <b-alert :show="!isSuccess" variant="danger">Failure!</b-alert>
    <div>
      <p>
        Employee's minimum expectation: {{ employeesExpectation | currency }}
      </p>
      <p>Employer's maximum offering: {{ employersOffering | currency }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResultPanel',
  props: {
    employeesExpectation: Number,
    employersOffering: Number,
  },
  computed: {
    isSuccess: function() {
      return this.employersOffering >= this.employeesExpectation;
    },
  },
};
</script>
