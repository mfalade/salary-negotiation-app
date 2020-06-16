<template>
  <section class="text-center" data-cy="resultPanel">
    <div class="my-3">
      <div v-if="isSuccess">
        <icon-success />
        <h4 class="text-success mt-3">Success!</h4>
      </div>
      <div v-else>
        <icon-failure />
        <h4 class="text-danger mt-3">Failure!</h4>
      </div>
    </div>
    <div class="mt-3">
      <p class="mb-2">
        Employer's maximum offer:
        <strong>{{ employersOffering | currency }}</strong>
      </p>
      <p class="mb-2">
        Employee's minimum expectation:
        <strong>{{ employeesExpectation | currency }}</strong>
      </p>
    </div>
  </section>
</template>

<script>
import IconSuccess from '@/components/Icons/Success.vue';
import IconFailure from '@/components/Icons/Failure.vue';

export default {
  name: 'ResultPanel',
  components: { IconSuccess, IconFailure },
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
