
<template>
	<view class="wrap">
		<view class="main_img">
			<image  class="main_img" :src="url+data.imgPath" mode=""></image>
		</view>
		<view class="main_text">
			<view class="text1">
				<view class="text1_1">
					￥ {{data.currentPrice}}.00
				</view>
				<view class="text1_2">
					{{data.buyNum}}人付款
				</view>
				<view class="text1_3">
					原价:{{data.originalPrice}}.00
				</view>
			</view>
			<view class="text2">
				{{data.name}}
			</view>
		</view>
		<view class="shop_tit">
			—————— 宝贝详情 ——————
		</view>
		<view class="shop_imgs">
			<view v-for="item in data.productDetailList" :key='index' class="imgs_list">
				<image  class="imgs_list" :src="url+item.imgPath" mode=""></image>
			</view>
			
		</view>
		<van-goods-action>
		  <van-goods-action-icon  icon="wap-home" text="首页"  />
		  <van-goods-action-icon  @click='click_shopCar' icon="cart" text="购物车" info="5" />
		  <van-goods-action-button text="加入购物车" type="warning" />
		  <van-goods-action-button @click='buy_shop'  text="立即购买" />
		</van-goods-action>
		<van-popup
		round
		  :show="show"
		  closeable
		  position="bottom"
		  custom-style="height: 50%"
		  @close="onClose"
		>
		<view class="buy">
			<view class="buy_img">
				<image class="buy_img" src="../../static/image/shop.png" mode=""></image>
			</view>
			<view class="buy_test">
				<view class="buy_price">
					￥ 200.00
				</view>
				<view class="buy_num">
					<view class="num_tit">
						库存
					</view>
					<view class="num_main">
						100
					</view>
					<view class="num_tit">
						件
					</view>
				</view>
				<view class="stepper">
					<view class="num">
						数量
					</view>
					<view class="num_q">
						<van-stepper :value="1" @change="stepper_onChange" />
					</view>
					
				</view>
				
			</view>
			
		</view>
		<view class="button">
			<view class="but">
				立即购买
			</view>
		</view>
		</van-popup>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
			id:'',
			data:'',
			url:'',
			show:false
			}
				 
		},
		onLoad(e) {
			//商品id
			this.id=e.id
			console.log(e)
			this.creat_data(this.id)
		},
		methods: {
			
			//步进器改变
			stepper_onChange(e){
				console.log(e)
				},
			//点击购买
			buy_shop(){
				this.show=true
			},
			
			//详情所有数据
		   creat_data(id){
			   this.$myRequest({
			   	url:"/product/getById",
			     data:{id:id},
			   	method:'get',
			   }).then((res)=>{
					console.log(res)
					this.data=res.data
			      }).catch((res)=>{console.log(res)})
		   },
		   //跳转购物车
		   click_shopCar(){
			   uni.navigateTo({
				  url:`../shop_car/shop_car`,
				  success:res =>{console.log(res)},
				  fail:(msg) =>{console.log(msg)}
				 
			   });
		   },
		   //点击退出图标
		   onClose(){
			   this.show=false
			   },
		},
		created(){
			this.url=getApp().globalData.url
			
		},
	}
</script>

<style>
	.but{
		height: 80rpx;
		width: 70%;
		margin: 190rpx auto 0 auto;
		text-align: center;
		line-height: 80rpx;
		border-radius: 30rpx;
		background-color: #d43030;
		color: #fff;
		font-weight: bold;
	}
	.num{
		line-height: 60rpx;
	}
	.num_q{
		margin-left: 10rpx;
	}
	.stepper{
		display: flex;
		margin-top: 30rpx;
	}
	.buy_test{
		margin-left: 50rpx;
		margin-top: 50rpx;
	}
	.num_main{
		margin-left: 10rpx;
		line-height: 60rpx;
		color: red;
		font-size: 14px;
	}
	.num_tit{
		line-height: 60rpx;
		font-size: 14px;
	}
	.buy_img{
		margin-top: 30rpx;
		margin-left: 30rpx;
		width: 219rpx;
		height: 210rpx;
		object-fit: cover;
	}
	.buy_price{
		line-height: 80rpx;
		color: red;
		font-size: 23px;
		font-weight: bold;
	}
	.buy_num{
		display: flex;
	}
	.buy{
		display: flex;
		}
	.imgs_list{
		width: 100vw;
		object-fit: cover;
	}
	.shop_tit{
		background-color: #E5E5E5;
		color: #8b8b8b;
		font-size: 14px;
		text-align: center;
		height: 73rpx;
		line-height: 73rpx;
		}
	.text2{
		margin-left: 13rpx;
		font-weight: bold;
		font-size: 18px;
		margin-top: 30rpx;
		}
	.text1{
		height: 50rpx;
		margin-bottom: 13rpx;
		display: flex;
		margin-top: 26rpx;
	}
	.text1_1{
		line-height: 50rpx;
		color: red;
		font-size: 17px;
	}
	.text1_2{
		line-height: 50rpx;
		margin-left: 19rpx;
		color: #979797;
		font-size: 13px;
	}
	.text1_3{
		line-height: 50rpx;
		text-decoration: line-through;
		color: #979797;
		font-size: 13px;
		margin-left: 140rpx;
	}
	.wrap{
		padding-bottom: 100rpx;
		background-color: #e5e5e5;
	}
	.main_img{
		width: 100vw;
		height: 755rpx;
		object-fit: cover;
	}
	.main_text{
		overflow: hidden;
		height: 186rpx;
		border-radius: 30rpx;
		margin: 10rpx auto 0rpx auto;
		background-color: #fff;
	}
</style>
