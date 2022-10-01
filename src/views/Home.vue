<template>
  <header class="header">
    <img
        :alt="$t('views.home.alt_logo')"
        src="@/assets/images/logo.svg"
        width="125"
        height="125"
        class="logo"
    />
    <div class="wrapper">
      <MainTitle :text="$t('views.home.title')" />
    </div>
  </header>

  <main>
    <div class="description-text">
      <p>{{ $t('views.home.description') }}</p>
      <p>{{ $t('views.home.siren_example') }}</p>
    </div>
    <Form/>
  </main>
</template>

<script setup>
import MainTitle from '@/components/MainTitle.vue'
import Form from '@/components/Form.vue'
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  margin-bottom: 20px;
  width: 100%;
}

.logo {
  display: block;
  margin-right: 20px;
}
.description-text {
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: var(--blue-dark);
  text-align: center;
  max-width: 550px;
  margin: auto auto 40px;
}
.description-text, p:nth-child(2) {
  margin-top: 10px;
  font-weight: 600;
}
@media (max-width: 720px) {
  .header {
    flex-direction: column;
  }
  .logo {
    margin-right: 0;
  }
}
</style>
