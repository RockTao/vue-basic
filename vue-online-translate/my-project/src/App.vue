<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单/ 易用  / 便捷</h5>
    
    <translateForm v-on:formSubmit="tranlateText"></translateForm>
    <TranslateOutput v-text="translatedText"></TranslateOutput>
  </div>
</template>


<script>
import  TranslateForm  from './components/TranslateForm'
import  TranslateOutput  from './components/TranslateOutput'
export default {
  name: 'app',
  data:function(){
    return{
      translatedText:""
    }
  },
  components:{
    TranslateForm,TranslateOutput
  },
  methods:{
    tranlateText:function(text,language){
      // alert(text);
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180904T072421Z.90233e25aca1a202.4055e28ff572ba539f2c7b21204994d09fe02b56&lang='+language+'&text='+text).then((response)=>{
        // console.log(response.body.text[0]);
        this.translatedText=response.body.text[0];
      })
    }
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
