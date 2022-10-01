import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createI18n } from 'vue-i18n'
import wordings from './wordings.json'


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
const app = createApp(App)
const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    allowComposition: true,
    ...wordings
})
app.use(router)
app.use(VueAxios, axios)
app.use(i18n)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')