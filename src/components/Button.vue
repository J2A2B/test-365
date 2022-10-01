<template>
<button :disabled="isLoading" class="button">
  <Loader v-if="isLoading"/>
  <div v-else class="button-info">
    <span class="button-text">Voir l'entreprise</span>
    <img alt="Diamant image" src="@/assets/images/diamond.svg" />
  </div>
</button>
</template>

<script setup>
import Loader from '@/components/Loader.vue'
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.button {
  padding: 17px 34px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.5px;
  border-radius: 50px;
  text-decoration: none;
  background-color: transparent;
  color: var(--blue-dark);
  border: 1px solid var(--blue-dark);
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button:active {
  text-decoration: none;
  outline: none;
  transform: scale(0.95);
  transition: all 0.1s ease-in-out;
}
.button:hover {
  background-color: var(--blue-dark);
  color: var(--white);
}
.button-text {
  margin-right: 10px;
  font-weight: 600;
}
.button-info {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>