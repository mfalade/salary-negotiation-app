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
      required: true,
    },
    value: [String, Number],
  },
};
</script>
