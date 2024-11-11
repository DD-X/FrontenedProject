import { createApp } from 'vue';
import App from './App.vue';
import "@/assets/less/index.less";
import router from './router';

//全部引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import {createPinia} from 'pinia';

const pinia = createPinia();

const app = createApp(App);
//全部引入
app.use(ElementPlus);
app.use(pinia);
//挂载路由
app.use(router).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
