<template>
	<view class="my_wrap">
		<view class="header">
			<view class="header_img">
				<image class="img" src="../../static/image/shop.png" mode=""></image>
			</view>
			
		</view>
		<view class="main">
			<view class="main_tit">
				我的订单
			</view>
			<view class="icon">
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/daifukuan%20(1).svg" mode=""></image>
					</view>
					<view class="icon_text">
						待付款
					</view>
				</view>
			
	
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/daifahuo%20(2).svg" mode=""></image>
					</view>
					<view class="icon_text">
						待发货
					</view>
				</view>
			
			
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/yifahuo%20(1).svg" mode=""></image>
					</view>
					<view class="icon_text">
						待收货
					</view>
				</view>
			
			
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/yiwancheng%20(1).svg" mode=""></image>
					</view>
					<view class="icon_text">
						已完成
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="main">
			<view class="main_tit">
				我的服务
			</view>
			<view class="icon">
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/wodexinxi%20(1).svg" mode=""></image>
					</view>
					<view class="icon_text">
						我的信息
					</view>
				</view>
			
			
				<view  @click="my_car" class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/wodecheliang%20(1).svg" mode=""></image>
					</view>
					<view class="icon_text">
						我的车辆
					</view>
				</view>
			
			
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/shouhuoxinxi.svg" mode=""></image>
					</view>
					<view class="icon_text">
						收货信息
					</view>
				</view>
			
			
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/shenlingxinxi.svg" mode=""></image>
					</view>
					<view class="icon_text">
						申领信息
					</view>
				</view>
				<view @click="car_out" class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/cheliangguanl.svg" mode=""></image>
					</view>
					<view class="icon_text">
						售车管理
					</view>
				</view>
				<view class="icon_main">
					<view class="icon_img">
						<image class="icon_img" src="../../static/image/gouwu.svg" mode=""></image>
					</view>
					<view class="icon_text">
						购物车
					</view>
				</view>
			</view>
		</view>
		<tab active=3></tab>
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
	  
				  }
				 
		},
		
		onLoad() {
	
		},
		methods: {
			car_out(){
				uni.navigateTo({
					  url:"../selling_cars/selling_cars",
					  success:res =>{console.log(3333)},
					  fail:(msg) =>{console.log(msg)}
					 
				  });
			},
			my_car(){
				uni.navigateTo({
					  url:"../my_car/my_car",
					  success:res =>{console.log(3333)},
					  fail:(msg) =>{console.log(msg)}
					 
				  });
			},
	
				   
		},
		created(){
			
		},
	}
</script>

<style>
	.icon_main{
		margin-top: 10rpx;
		width: 183rpx;
		height: 120rpx;
		
	}
	.icon_text{
		margin-top: 9rpx;
		font-size: 13px;
		width: 100%;
		text-align: center;
	}
	.icon_img{
		display: block;
		height: 65rpx;
		margin: 0 auto;
		width: 65rpx;
		object-fit: cover;
	}
	.icon{
		display: flex;
		
		flex-wrap: wrap;
	}
	.main_tit{
		padding-left: 23rpx;
		height: 65rpx;
		line-height: 65rpx;
		font-weight: bold;
		border-bottom: 6rpx #E5E5E5 solid;
	}
	.main{
		width: 740rpx;
		margin: 15rpx auto 0 auto;
		padding-top: 17rpx;
		padding-bottom: 17rpx;
		border-radius: 30rpx;
		overflow: hidden;
		background-color: #fff;
	}
	.img{
		object-fit: cover;
		width: 178rpx;
		height: 178rpx;
	}
	.header_img{
		width: 178rpx;
		height: 178rpx;
		border-radius: 50%;
		margin: 100rpx auto 0 auto;
		
		overflow: hidden;
	}
	.my_wrap{
		min-height: 100vh;
		background-color: #E5E5E5;
	}
	.header{
		overflow: hidden;
		margin: 0 auto;
		width: 740rpx;
		height: 376rpx;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		background-color: #5196e2;
	}
</style>
