<template>
  <ErrorText v-if="error" :text="error"/>
<div v-if="!error && company && company.deno" class="entry-information">
  <MainTitle :text="company.deno" />
  <div class="wrapper-information">
    <span>🏠 {{company.adresse}}</span>
    <span>{{ $t('views.company.capital') }} {{company.capital.typecap}} {{company.capital.capital}} {{company.capital.devisecap}}</span>
    <span>{{ $t('views.company.num') }} {{company.no.type}} {{company.no.siren}}</span>
    <span>{{ $t('views.company.ape_code') }} {{company.ape}}</span>
    <div class="entry-link">
      <BackLink/>
    </div>
  </div>
  <img :alt="$t('views.company.alt_logo')" src="@/assets/images/logo-verticaly.png" class="logo-365"/>
</div>
</template>

<script setup>
import MainTitle from '@/components/MainTitle.vue'
import ErrorText from '@/components/ErrorText.vue'
import BackLink from '@/components/BackLink.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import findOneCompany from '../utils/request'

const route = useRoute()

let company = ref({})
let error = ref(null)

onMounted(async () => {
  try {
    const {id} = route.params
    const {data} = await findOneCompany(id)
    if (data.message) {
      return error.value = data.message
    }
    return company.value = data.data
  } catch(err) {
    return error.value = 'Une erreur est survenue'
  }
})
</script>

<style scoped>
.entry-information {
  min-width: 500px;
  padding: 30px;
  background-color: var(--beige);
  border-radius: 20px;
}
.wrapper-information {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.logo-365 {
  height: 100px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.entry-link{
  margin-top: 20px;
}
@media (max-width: 720px) {
  .entry-information {
    min-width: 280px;
    padding: 2rem;
  }
  .wrapper-information {
    font-size: 16px;
  }
  .logo-365 {
    height: 50px;
  }
}
</style>