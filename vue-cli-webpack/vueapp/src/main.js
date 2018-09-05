// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import User from './components/User'
import Test from './components/Test'
import vueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(vueResource)
Vue.config.productionTip = false


//设置路由
/* eslint-disable no-new */
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	{ path:'/',component:User},
	{ path:'/test',component:Test}
	]
})
new Vue({
  // el: '#app',
  // components: { App },
  // template: '<App/>'
  router,
  template: `
  	<div id="app">
  		<ul>
  			<li>
  				<router-link to="/">User</router-link>
  				<router-link to="/test">Test</router-link>
  			</li>
  		</ul>
  		<router-view></router-view>
  	</div>
  `
}).$mount("#app")
