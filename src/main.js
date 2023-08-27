import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

import store from './store';


const app = createApp(App);

//router
app.use(router)

//store
app.use(store)

app.mount('#app')
