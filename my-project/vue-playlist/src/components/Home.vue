<!-- 1 模板  html结构 -->

<template>
  <div id="home">
	<app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
<!--   	<h1>{{title}}</h1>
 -->    
    <users v-bind:users="users"></users>
  	<users v-bind:users="users"></users>
  	<aap-footer v-bind:title="title"></aap-footer>
  </div>

</template>

<!-- 2 行为 ：处理逻辑    一个功能的页面  1、先import  2、先注册  3 调用    -->
<script>
//局部注册组件   
import Users from './Users'//
import Header from './Header'//
import Footer from './Footer'//



export default {
  name: 'home',
  data(){
  	 return  {
  	 // title:"这是我的第一个脚手架项目"
      users:[ 
      //   {name:"Henery1",position:"Web 开发",show:false},
      //   {name:"Henery2",position:"java 开发",show:false},
      //   {name:"Henery3",position:"C++ 开发",show:false},
      //   {name:"Henery4",position:"C#  开发",show:false},
      //   {name:"Henery5",position:"PHP 开发",show:false},
      //   {name:"Henery6",position:"PY  开发",show:false},
      //   {name:"Henery7",position:"Linux 开发",show:false},
      //   {name:"Henery8",position:"SQL 开发",show:false}
      ],
      title:"传递的是一个值,(number ,string  boolean)"
  	 }
  },
  methods:{ 
    updateTitle(title){
      this.title = title;
    }
  },
  components:{
  	"users":Users, // 一种方法
  	//第二种方法
  	// Users
  	"app-header":Header,
  	"aap-footer":Footer
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data)=>{
        // console.log(data);
        this.users = data.body;
      })
  }
}
</script>


<!-- 3 样式： 解决样式  -->
<style>
h1{
	color:purple
}



</style>
