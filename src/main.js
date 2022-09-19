import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { RouterLink } from "vue-router";
import '@/assets/sass/app.scss'

const app = createApp(App).component("Link", RouterLink)

app.use(router)

app.mount('#app')
