<template>
  <input
      v-model="sirenToSearch"
      :required="required"
      :placeholder="placeholder"
      @input="emitValue"
      class="input"
  />
</template>

<script setup>
import { ref, defineEmits } from 'vue'

defineProps({
  required: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['emitInputValue'])
let sirenToSearch = ref('')
const emitValue = function() {
  emit('emitInputValue', sirenToSearch.value)
}
</script>

<style scoped>
.input {
  border: 1px solid #e1e1e1;
  padding-left: 2px;
  padding-right: 2px;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  appearance: none;
  padding-left: 10px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.input::placeholder {
  color: var(--blue-dark);
  letter-spacing: 0;
}
</style>