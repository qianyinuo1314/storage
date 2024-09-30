import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Col, Row } from 'vant';
import { Form, Field, CellGroup } from 'vant';
createApp(App).use(store).use(router).use(Col).use(Row).mount('#app')
const app = createApp();
app.use(Form);
app.use(Field);
app.use(CellGroup);
