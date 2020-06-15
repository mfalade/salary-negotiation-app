<template>
  <section>
    <div>
      <p>Employee's minium expectation: {{ employeesExpectation }}</p>
      <p>Employer's maximum offering: {{ employersOffering }}</p>
    </div>

    <h4>{{ verdict }}!</h4>
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
    verdict: function() {
      const isSuccess = this.employersOffering >= this.employeesExpectation;
      return isSuccess ? 'Success' : 'Failure';
    },
  },
};
</script>
