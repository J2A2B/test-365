<template>
  <h1>{{ text }}</h1>
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
h1 {
  font-family: "Canela", Roboto, sans-serif;
  font-weight: 500;
  font-size: 80px;
  text-decoration: none;
  color: var(--blue-dark);
  transition: 0.4s;
}

@media (max-width: 720px) {
  h1 {
    font-size: 40px;
  }
}
</style>
