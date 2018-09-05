<template>
  <div id="app">
   <!--  <HelloWorld/> -->
<!--    <test msg="这是新的属性值"></test>
 -->  

    <User></User>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Test from './components/Test'
import User from './components/User'

export default {
  name: 'app',
  components: {
    /*HelloWorld*/
    // Test,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
