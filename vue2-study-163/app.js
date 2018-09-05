//实例化vue对象  第一部分
// new Vue({
// 	el:"#vue-app",
// 	data:{
// 		name:"米斯特吴"	,
// 		job:"web开发",
// 		website:"http://www.baidu.com",
// 		websiteTag:"<a href='https://www.baidu.com'>baidu</a>"
// 	},
// 	methods:{
// 		greet:function (time) {
// 			return 'Good ' + time + "!" + this.name;
// 		}
// 	}

// });
/**
el:element,需要获取的元素 一定是html中的根容器元素
data：用于数据的存储
methos :用于存储各种方法
data-binding:给属性绑定对应的值
*/

// new Vue({
// 	el:"#vue-app",
// 	data:{
// 		age:30,
// 		x:0,
// 		y:0
// 		},
// 	methods:{
// 		add:function(inc){
// 			this.age +=inc;
// 		},
// 		subtract:function(dec){
// 			this.age-=dec;
// 		},
// 		updateXY:function(event){
// 			// console.log(event);
// 			this.x = event.offsetX;
// 			this.y = event.offsetY;
// 		},
// 		stopMoving:function(event){
// 			event.stopPropagation();
// 		},
// 		alert:function(){
// 			alert("Hello world");
// 		}

// 	}
// 	});
//		双向数据绑定
// new Vue({
// 	el:"#vue-app",
// 	data:{
// 		name:"hello",
// 		age:""
// 	},
// 	methods:{
// 		logName:function(){
// 			// console.log("你在输入名字");
// 			// this.name=this.$refs.name.value;
// 			// console.log(this.$refs.name.value);
// 		},
// 		logAge:function(){
// 		// console.log("你在输入年龄");
// 		this.age= this.$refs.age.value;
// 		}

// 	}
// })

/*Computed 计算属性*/
/*new Vue({
	el:"#vue-app",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{*/
	/*	addToA:function(){
			console.log("Add to a ");
			return this.a + this.age ;
		},
		addToB:function(){
			console.log("Add to B");
			return this.b + this.age ;
		}*/
/*	},
	computed:{

			addToA:function(){
			console.log("Add to a ");
			return this.a + this.age ;
		},
		addToB:function(){
			console.log("Add to B");
			return this.b + this.age ;
		}
	}
})*/

/*动态  CSS  class */

// new Vue({
// 	el:"#vue-app",
// 	data:{
// 		changeColor:false,
// 		changeLength:false
		
// 	},
// 	methods:{

// 	},
// 	computed:{
// 		compClasses:function(){
// 			return {
// 					changeColor:this.changeColor,
// 					changeLength:this.changeLength
// 			}
// 		}
// 	}

// })

/* v-if 条件*/
// new Vue({
// 	el:"#vue-app",
// 	data:{
// 		error:false,
// 		success:false
// 	},
// 	methods:{

// 	},
// 	computed:{
// 	}

// })

/*v-for循环*/
// new Vue({
// 	el:"#vue-app",
// 	data:{
// 		characters:["mario","Luffy","Jack"],
// 		users:[
// 		{name:"Herry",age:30},
// 		{name:"Bucky",age:25},
// 		{name:"Emaily",age:18},
// 		]
// 	},
// 	methods:{

// 	},
// 	computed:{
// 	}

// })

/*Vue  demo  实例*/
// new Vue({
// 	el:"#vue-app",
// 	data:{
// 		health:100,
// 		ended:false,
// 	},
// 	methods:{
// 		punch:function(){
// 			this.health -= 10;
// 			if(this.health <= 0){
// 				this.ended = true;
// 			}
// 		},
// 		restart:function(){
// 			this.health = 100;
// 			this.ended = false;
// 		}

// 	},
// 	computed:{
// 	}
// })


// 初始化多个vue实例对象
// var one = new Vue({
// 	el:"#vue-app",
// 	data:{
// 		title:"app one 的内容"
// 	},
// 	methods:{
// 	},
// 	computed:{
// 		greet:function(){
// 			return "Hello App one";
// 		}
// 	}
// })
// var two = new Vue({
// 	el:"#vue-app-two",
// 	data:{
// 		title:"app two 的内容"
// 	},
// 	methods:{
// 		changeTitle:function(){
// 			one.title="已经改名了啊";
// 		}
// 	},
// 	computed:{
// 		greet:function(){
// 			return "Hello App one";
// 		}
// 	}
// })

// two.title="app  two 的title叶发生了变化";




Vue.component("greet",{

/*	template:'<p>{{name}}    :大家好，给大家介绍一下我的启蒙老师@苍井空</p>',*/
/*下面是es6的语法*/
	template:`
			<p>
				{{name}}    :大家好，给大家介绍一下我的启蒙老师@苍井空
				<button v-on:click='changeName'>改名</button>
			</p>
			`,
	data:function(){
		return {
			name:"小泽一郎"
		}
	},
	methods:{
		changeName:function(){
			this.name= "Henry";
		}
	}
})

new Vue({
	el:"#vue-app"
})
new Vue({
	el:"#vue-app-two"
})

