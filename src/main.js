import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import dayjs from 'dayjs'
import tz from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(tz)
dayjs.extend(utc)

createApp(App).mount('#app')
