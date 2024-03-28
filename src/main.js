//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//引入vue-router
import VueRouter from "vue-router";
import router from './router';
//应用vue-router插件
Vue.use(VueRouter);

//完整引入
//引入element-ui组件库
import ElementUI from 'element-ui';
//引入element全部样式
import 'element-ui/lib/theme-chalk/index.css';
//使用element ui插件库
Vue.use(ElementUI);

// 引入vuex
import store from "@/store";

//关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
