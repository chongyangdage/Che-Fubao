<template>
	<view class="server_wrap">
		<view v-for="(item,index) in data_all" @click="palce(item.longitude,item.latitude,item.name)" class="main_list">
			<view class="main_list_t">
				<view class="list_t_1">
					<image  class="list_t_1" :src="url+item.photo" mode=""></image>
				</view>
				<view class="list_t_2">
					{{item.name}}
				</view>
				<view class="list_t_3">
					{{item.distance}}m
				</view>
				<view class="list_t_4">
					<van-icon color='#d4312d' name="location" />
				</view>
			</view>
			<view class="main_list_b">
				<view class="list_b_1">
					<van-icon  color='#d4312d' name="map-marked" />
				</view>
				<view class="list_b_2">
					{{item.address}}
				</view>
			</view>
		</view>
		<tab active=1></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab/tab.vue';
	export default {
		components:{
			tab
		},
		data() {
			return {
				 url:'',
				  data_all:''
				  
				  }
				 
		},
		onLoad() {
	
		},
		methods: {
			
			//点击运营点跳转详情
			palce(longitude,latitude,name){
				uni.navigateTo({
				                  url:`../place/place?longitude=${longitude}&&latitude=${latitude}&&name=${name}`,
				                  success:res =>{console.log(3333)},
				                  fail:(msg) =>{console.log(msg)}
				                 
				              });
				},
			//授权地理位置
			user_place(){
				let that=this
				uni.getSetting({
				  success(res) {
					  console.log(res)
				    if (!res.authSetting['scope.userLocation']) {
				      wx.authorize({
				        scope: 'scope.userLocation',
				        success () {
				          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
				         console.log(111111)
						 
						 uni.getLocation({
						  type: 'wgs84',
						  success (res) {
						   console.log(res)
						  }
						 })
						 
				        }
				      })
				    }else{
						uni.getLocation({
						 type: 'wgs84',
						 success (res) {
							 console.log(8888888888888888888)
						  console.log(res)
						  that.latitude=res.latitude
						  that.longitude=res.longitude
						  that.$myRequest({
						  	url:"/serviceSite/list",
							 header: {  
							        'Content-Type': 'application/x-www-form-urlencoded'  
							    },  
							data:{longitude:res.longitude,latitude:res.latitude},
						  	method:'post',
						  }).then((res)=>{
						    
							console.log(777777)
						     console.log(res)
							 that.data_all=res.data
						     }).catch((res)=>{console.log(res)})
						 }
						})
					}
				  }
				})
			},
				   
		},
		created(){
			this.url=getApp().globalData.url
			this.user_place()
		},
	}
</script>

<style>
	.list_b_2{
		margin-left: 20rpx;
		font-size: 13px;
	}
	.main_list_b{
		margin-top: 20rpx;
		display: flex;
	}
	.list_t_4{
		position: absolute;
		right: 0rpx;
		top: 15rpx;
	}
	.list_t_3{
		font-size: 13px;
		position: absolute;
		right: 50rpx;
		top: 0;
		color: red;
		line-height: 60rpx;
		
	}
	.list_t_2{
		font-size: 18px;
		font-weight: bold;
		color: #000;
		line-height: 60rpx;
		margin-left: 39rpx;
		
		}
	.list_t_1{
		width: 115rpx;
		height: 115rpx;
		object-fit: cover;
	}
	.main_list_t{
		position: relative;
		display: flex;
	}
	.main_list{
		width: 650rpx;
		padding-left: 40rpx;
		border-radius: 30rpx;
		background-color: #fff;
		padding-bottom: 37rpx;
		padding-top: 37rpx;
		margin: 18rpx auto 0 auto;
		
		padding-right: 40rpx;
	}
	.server_wrap{
		overflow: hidden;
		min-height: 100vh;
		width: 100vw;
		background-color: #E5E5E5;
		padding-bottom: 120rpx;
	}
</style>
