<template>
  <div>
    <label>
      <p>{{ label }}</p>
      <input
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: [String, Number],
      default: '',
    },
    value: [String, Number],
  },
};
</script>
