<template>
	<div class="users">
		<h1>Users</h1>
		<ul>
			<!-- 添加用户信息 -->
			<form v-on:sumbit="adduser">
				<input type="text" v-model="newUser.name" placeholder="Enter name">
				<input type="text" v-model="newUser.email" placeholder="Enter email">
				<input type="submit" value="Sumbit">
			</form>
		<li v-for="user in users">
			<input type="checkbox" class="toggle" v-model="user.contacted">
			<span :class="{contacted:user.contacted}">
						{{user.name}} : {{ user.email }}
			<button v-on:click="deleteUser(user)">x</button>

			</span>

		</li>
		</ul>
	</div>
</template>

<script>

	export default {
		name:"users",
		data(){
			
			return {
				newUser:{},
				users:[
					{name:"Hemiah Wu" ,email:"hemiah@gmail.com"
					,contacted:false
					},
					{name:"Hemiah Tao" ,email:"hemiahTao@gmail.com"
					,contacted:false
					},
					{name:"Hemiah Rock" ,email:"hemiahRock@gmail.com"
					,contacted:false
					}
				]

			}
		},
		methods:{
			adduser:function(e){
				console.log("Hello " + this.newUser.name);
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false

				});
				e.preventDefault();
			},
			deleteUser:function(user){
				this.users.splice(this.users.indexOf(user),1);
			}
		},
		created:function(){
			// console.log("11111111111");
			this.$http.get("http://jsonplaceholder.typicode.com/users")
			.then(function(response){
				this.users=response.data;
			})
		}
	}	

</script>


<style scoped>

	.contacted{
		text-decoration:line-through;
	}


</style>