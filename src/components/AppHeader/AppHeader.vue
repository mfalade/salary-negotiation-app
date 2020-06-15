<template>
  <header class="mt-5 pt-5 text-center">
    <icon-logo />
    <h3>Salary Negotiation App</h3>
  </header>
</template>

<script>
import IconLogo from "@/components/Icons/Logo.vue";

export default {
  name: "AppHeader",
  components: { IconLogo }
};
</script>

<style src="./AppHeader.scss" lang="scss" scoped></style>