// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import VueResource from 'vue-resource'
import axios from 'axios';
// import Users from './components/Users'//全局使用

//全局注册组件
// Vue.component("users",Users);

//ES6 语法
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.$axios = axios

axios.defaults.headers.common['token'] ="f4c902c9ae5a2a9d8f84868ad064e706"
axios.defaults.headers.post["Content-type"] = "application/json"

//配置路由
const router = new VueRouter({
	routes:[
		{path:"/",component:Home},
		{path:"/helloworld",component:HelloWorld}
	],
	mode:"history" // 去掉#用的
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },/*组件 来自于import文件内的东*/
  template: '<App/>'/*模板*/
})
/*
	index.html-->main.js---> App.vue
*/