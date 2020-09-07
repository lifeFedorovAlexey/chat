<template>
  <div class="center-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "center-container",
};
</script>

<style scoped>
.center-container {
  display: flex;
  align-items: left;
  flex-direction: column;
}
</style>
