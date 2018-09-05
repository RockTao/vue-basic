<template>
  <header>
  	<h1 v-on:click="changeTItle">
  		{{title1}} {{title}}
  	</h1>
  </header>
</template>


<script> export default {
  name:'app-header',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
    	title1:"Vue.js  Demo"
    }
  },
  methods:{
    changeTItle:function(){
      // this.title="changed";
      this.$emit("titleChange","子向父组件传值");
    }
  }
 /*, beforeCreate:function(){
  alert("组件实例化之前执行的行数");
    // console.log
  },
  created:function(){
  alert("组件实例化完毕，但页面没显示");
    // console.log
  },
  beforeMount:function(){
    alert("组件挂在前，页面没展示，但虚拟DAO已经配置了");
  },
   mounted:function(){
    alert("组件挂在后，此方法执行后，页面显示");
  }
  ,
  beforeUpdate:function(){
    alert("组件跟新前，页面没展示，但虚拟DAO已经配置了");
  }
  ,
  update:function(){
    alert("组件跟新，此方法执行，页面展示");
  }
   ,
  beforeDestory:function(){
    alert("组件销毁前");
  },
  destoryed:function(){
    alert("组件已经销毁了");
  }*/

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header{
	background:lightgreen;
	padding: 10px;
}
h1{
	color: #222;
	text-align: center;
}


</style>

