// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBFTGizXznAxNpixRIyDJGx9e4-uUpMchE",
  authDomain: "week7-gxchen.firebaseapp.com",
  projectId: "week7-gxchen",
  storageBucket: "week7-gxchen.firebasestorage.app",
  messagingSenderId: "500519066233",
  appId: "1:500519066233:web:50c31625ea072930b152a8"
}

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
