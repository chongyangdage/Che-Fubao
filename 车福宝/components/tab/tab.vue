<template name='tab'>
	<view class="wrap">
		<van-tabbar :active="active" @change="onChange">
		  <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
		  <van-tabbar-item icon="map-marked">服务站</van-tabbar-item>
		  <van-tabbar-item icon="shop">服务大厅</van-tabbar-item>
		  <van-tabbar-item icon="manager">我的</van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script>
	
	export default {
		name:'tab',
		data() {
			return {
	  
				  }
				 
		},
		props:{
			 active: {
			 
			 		 type:Number,//多种类型随意搭配
			 
			 		  value: 1
			 
			 	}
		},
		onLoad() {
	
		},
		methods: {
			//点击规章制度跳转
			system(){
				
			},
			//底部导航
			onChange(event) {
						// event.detail 的值为当前选中项的索引
						if(event.detail==0){
							uni.redirectTo({
							                  url:"../index/index?show=1",
							                  success:res =>{console.log(3333)},
							                  fail:(msg) =>{console.log(msg)}
							                 
							              });
						}else if(event.detail==1){
							uni.redirectTo({
							                  url:"../service/service",
							                  success:res =>{console.log(3333)},
							                  fail:(msg) =>{console.log(msg)}
							                 
							              });
						}else if(event.detail==2){
							uni.redirectTo({
							                  url:"../hall/hall",
							                  success:res =>{console.log(3333)},
							                  fail:(msg) =>{console.log(msg)}
							                 
							              });
						}else if(event.detail==3){
							uni.redirectTo({
							                  url:"../my/my",
							                  success:res =>{console.log(3333)},
							                  fail:(msg) =>{console.log(msg)}
							                 
							              });
						}
						
						console.log(event.detail)
						console.log(this.active)
			 },
		
	
				   
		},
		created(){
			
		},
	}
</script>

<style>
</style>
