<template>
  <router-link :to="{ name: 'Home'}" class="back-link">
    <img src="@/assets/images/chevron.png" class="link-img">
    <span>{{$t('general.back_link')}}</span>
  </router-link>
</template>

<style scoped>
.back-link {
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: 16px;
  text-decoration: none;
  color: var(--blue-dark);
}
.back-link:hover {
  text-decoration: underline;
}
.link-img {
  margin-top: 2px;
  height: 10px;
}
</style>