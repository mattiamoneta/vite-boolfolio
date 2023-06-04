import { createApp } from 'vue'
import { router } from './router'
import './style.scss'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "masonry-layout"

createApp(App).use(router).mount('#app')

