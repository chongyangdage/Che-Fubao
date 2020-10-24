<template>
	<view class="wrap_car">
		<view v-if="false" class="no_shop">
			<view class="text1">
				您没有相关订单
			</view>
			<view class="text2">
				可以去看看有哪些需要买的
			</view>
			<view class="button">
				随便逛逛
			</view>
		</view>
		<view class="shop_main_wrap">
			<van-checkbox-group :value="result" @change="onChange">
			
				<view class="shops_list">
					
					<view class="choose">
						<van-checkbox name="a"></van-checkbox>
					</view>
					<view class="imgs">
						<view class="imgs_l">
							<image class="imgs_l" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="imgs_r">
							<view class="r_1">
								车辆头盔
							</view>
							<view class="r_2">
								特别好的
							</view>
							<view class="r_3">
								<view class="r_3_1">
									￥ 90.00
								</view>
								<view class="r_3_2">
									x2
								</view>
							</view>
						</view>
					</view>
					
				</view>
			</van-checkbox-group>
		</view>
		<van-submit-bar
		  :price="3050"
		  button-text="提交订单"
		  bind:submit="onClickButton"
		>
		 <!-- <van-tag type="primary">标签</van-tag> -->
		  <view class="box">
		  	<van-checkbox @change='check' :value="checked" icon-size="25px">全选</van-checkbox>
		  </view>
		</van-submit-bar>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
					result:[],
				  checked:false
				  
				  }
				 
		},
		onLoad() {
	
		},
		methods: {
			//全选
			check(e){
				this.checked=e.detail
				console.log(e.detail)
			},
			//选择改变
			onChange(e){
				this.result=e.detail
				console.log(e)
				console.log(this.result)
			}
				   
		},
		created(){
			
		},
	}
</script>

<style>
	.r_1{
		line-height: 54rpx;
	}
	.r_2{
		line-height: 54rpx;
	}
	.choose{
		margin-top: 60rpx;
		margin-right: 30rpx;
	}
	.r_3_1{
		color: red;
		font-weight: bold;
	}
	.r_3_2{
		color: #525355;
		font-size: 13px;
		margin-left: 157rpx;
	}
	.r_3{
		display: flex;
		margin-top: 29rpx;
	}
	.imgs_l{
		width: 174rpx;
		height: 174rpx;
		object-fit: cover;
	}
	.shops_list{
		width: 700rpx;
		background-color: #fff;
		margin: 15rpx auto 0 auto;
		border-radius: 20rpx;
		display: flex;
		padding-top: 55rpx;
		padding-left: 30rpx;
		padding-bottom: 55rpx;
	}
	.imgs{
	
		
		
		
		display: flex;
		
	}
	.no_shop{
		margin: 45% auto 0 auto;
	}
	.text1{
		height: 80rpx;
		line-height: 80rpx;
		width: 100%;
		text-align: center;
	}
	.text2{
		height: 80rpx;
		line-height: 80rpx;
		width: 100%;
		text-align: center;
	}
	.imgs_r{
		margin-left: 25rpx;
	}
	.button{
		width: 254rpx;
		height: 104rpx;
		line-height: 104rpx;
		text-align: center;
		border-radius: 30rpx;
		margin: 30rpx auto 0 auto;
		background-color: #d43030;
		color: #fff;
		font-weight: bold;
		font-size: 18px;
		}
	.wrap_car{
		overflow: hidden;
		min-height: 100vh;
		width: 100vw;
		background-color: #E5E5E5;
	}
</style>
