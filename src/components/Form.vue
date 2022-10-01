<template>
  <form @submit.prevent="goToCompany" class="form">
    <div class="entry-input">
      <Input :required="true" placeholder="ex: 812215804" @emitInputValue="addSirenValue"/>
    </div>
    <div class="entry-button">
      <Button :is-loading="isLoading"/>
    </div>
    <ErrorText v-if="error" :text="error"/>
  </form>
</template>

<script setup>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import ErrorText from '@/components/ErrorText.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import findOneCompany from '../utils/request'

const router = useRouter()

let siren = ref('')
let error = ref(null)
let isLoading = ref(false)

function addSirenValue(value) {
  siren = value
}
async function goToCompany() {
  error.value = null
  const trimSiren = siren.trim()
  if (trimSiren && trimSiren.length) {
  isLoading.value = true
    try {
      const {data} = await findOneCompany(trimSiren)
      if (data.message) {
        isLoading.value = false
        return error.value = data.message
      }
      setTimeout(() => {
        router.push({ name: 'Company', params: { id:data.data.no.siren } })
        isLoading.value = false
      }, 1200);

    } catch(err) {
      isLoading.value = false
      return error.value = 'Une erreur est survenue'
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.entry-input {
  margin-bottom: 20px;
}
.entry-input, .entry-button {
  width: 50%;
}
@media (max-width: 720px) {
  .entry-input, .entry-button {
    width: 100%;
  }
}
</style>