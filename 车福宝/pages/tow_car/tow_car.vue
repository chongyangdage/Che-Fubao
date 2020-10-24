<template>
	<view class="wrap">
		<view v-if="!data[0]" class="wu">
			暂无二手车
		</view>
		<view v-for="(item,index) in data" :key='index' class="main">
			<view @click="details(item)"  class="img_wrap">
				<view class="img">
					<image class="img1" :src="url+item.carImgOneLocation" mode=""></image>
				</view>
				<view class="img">
					<image class="img1" :src="url+item.carImgTwoLocation" mode=""></image>
				</view>
			</view>
			<view @click="details(item)" class="text">
				<view class="price">
					<text  :decode="true" class="p_tit">
						售&emsp;&emsp;价&emsp;&emsp;
					</text>
					<view :decode="true" class="p_num">
						{{item.price}}&ensp;￥
					</view>
				</view>
				<view class="kind">
					<text  :decode="true" class="k_tit">
						品&emsp;&emsp;牌:&emsp;
					</text>
					<view :decode="true" class="k_num">
						{{item.brand}}
					</view>
				</view>
				<view class="kind">
					<text  :decode="true" class="k_tit">
						类&emsp;&emsp;型:&emsp;
					</text>
					<view :decode="true" class="k_num">
						{{item.type}}
					</view>
				</view>
				<view class="kind">
					<text  :decode="true" class="k_tit">
						颜&emsp;&emsp;色:&emsp;
					</text>
					<view :decode="true" class="k_num">
						{{item.color}}
					</view>
				</view>
				<view class="kind">
					<text  :decode="true" class="k_tit">
						购车日期:
					</text>
					<view class="button">
						<view :decode="true" class="k_num">
							{{item.buyTime}}
						</view>
						<view class="icon">
							<van-icon custom-class='icon1' color='#000' size='20px' name="manager-o" />
							<view class="name_text">
								{{item.contactName}}
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
			<view class="name">
				<van-icon color='red' size='40px' name="phone-circle" />
			</view>
		</view>
		<tab active=10></tab>
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
				//所有车辆数据
				data:[],
				url:''
		  }
				 
		},
		onLoad() {
	
		},
		methods: {
			//车辆详情
			details(e){
				console.log(e)
				let data=JSON.stringify(e)
				uni.navigateTo({
				                  url:`../details/details?data=${data}`,
				                  success:res =>{console.log(3333)},
				                  fail:(msg) =>{console.log(msg)}
				                 
				              });
			},
			//二手车查询
			getSwipers() {
				this.url=getApp().globalData.url
			               this.$myRequest({
			                   url:"/secondHandCar/list",
			                   method:'get',
			               }).then((res)=>{
							  
							   this.data=res.data
							   console.log(res)
							   }).catch((res)=>{console.log(res)})
			              
			           },
	
				   
		},
		created(){
			this.getSwipers()
		},
	}
</script>

<style>
	.wu{
		width: 100%;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		
		}
	.icon1{
	
	}
	.name{
		top: 425rpx;
		left: 590rpx;
		position: absolute;
	}
	.icon{
		top: -31rpx;
		left: 250rpx;
		position: absolute;
		display: flex;
		justify-content: space-around;
		width: 185rpx;
		height: 66rpx;
		background-color: #e5e5e5;
		border-radius: 35rpx;
		line-height: 66rpx;
		}
	.button{
		position: relative;
		display: flex;
	}
	.k_num{
		margin-left: 18rpx;
	}
	.p_num{
		margin-left: 38rpx;
	}
	.kind{
		margin-top: 6rpx;
		font-size: 14px;
		display: flex;
	}
	.price{
		margin-top: 6rpx;
		color: red;
		display: flex;
	}
	.img_wrap{
		margin-top: 28rpx;
		display: flex;
		justify-content: space-between;
	}
	.img{
		width: 313rpx;
		height: 238rpx;
		border: 6rpx #e5e5e5 solid;
		
		overflow: hidden;
		object-fit: cover;
	}
	.img1{
		width: 313rpx;
		height: 235rpx;
		
		object-fit: cover;
	}
	.main{
		position: relative;
		overflow: hidden;
		border-radius: 50rpx;
		padding-left: 25rpx;
		padding-right: 25rpx;
		width: 680rpx;
		height: 535rpx;
		background-color: #fff;
		margin: 25rpx auto 0 auto;
	}
	.wrap{
		overflow: hidden;
		padding-bottom: 60rpx;
		background-color: #e5e5e5;
	}
</style>
