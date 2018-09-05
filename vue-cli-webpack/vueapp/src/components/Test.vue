<template>
	<div class="test">
		<h1>
			{{title}}
			<!-- 获取数据 -->
			<p>
				{{user.firstName}}
			</p>
			<p v-text="user.lastName"></p>
			<!-- v-if 条件语句 -->
			<p v-if="showName">{{user.firstName}}</p>
			<!-- v-else -->
			<p v-else>Nobody </p>

			<!-- v-for -->
			<ul>
				<li  v-for="item in items">{{item.title}}</li>
			</ul>

			<!-- v-on  事件 -->
			<button v-on:click="greet('Hello everty  body')">Saying Greeting</button>

			<!-- 键盘事件 -->
			<input type="text" v-on:keyup="pressKey"v-on:keyup.enter="enterHit">
			<!-- computed 属性 -->

			<label>FirstName：</label>
			<input type="text" v-model="user.firstName">
			<br>
			<label>lastName</label>
			<input type="text" v-model="user.lastName">
			<br>
			<h3>{{fullName}}</h3>


<!-- prop属性 -->
			<h2>{{msg}}</h2>

		</h1>
	</div>
</template>

<script>

	export default {
		name:"test",
		props:{
			msg:{
				type:String,
				default:"默认就是当前这些文字"
			}
		},
		data(){
			return {
				title:"Hello vue.js",
				user:{
					firstName:"Hemiah",
					lastName:"RockTao"
				},
				showName:false,
				items:[
				{title:"items_1"},
				{title:"items_2"},
				{title:"items_3"},
				{title:"items_4"},
				]
			}
		},
		methods:{
			greet:function(greeting){
				alert(greeting);
			},
			pressKey:function(){
				console.log("Pressing ----------");
			},
			enterHit:function(){
				console.log("ypu press enterKey");
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + " "+ this.user.lastName;
			}
		}
	}	

</script>


<style scoped>



</style>