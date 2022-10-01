<template>
  <span class="text-error">{{text}}</span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.text-error {
  width: max-content;
  margin-top: 10px;
  color: var(--red);
  position: absolute;
  bottom: -30px;
}
</style>