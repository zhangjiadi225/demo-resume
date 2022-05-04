import { createApp } from 'vue'
import App from './App.vue'
import  router  from './router/index.js'
import './assets/style/common.scss'
import components from './components/mini-part/index.js'

createApp(App)
  .use(router)
  .use(components)
  .mount('#app')
