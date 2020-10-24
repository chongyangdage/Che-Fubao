<template>
	<view class="wrap">
		<view class="main1">
			<view class="main1_list1">
				车辆售价：
			</view>
			<view class="main1_list2">
				￥ {{data_top.price}}
			</view>
			<view class="main1_list1">
				车辆照片：
			</view>
			<view class="main1_list4">
				<image class="main1_list4_1" :src="url+data_top.carImgOneLocation" mode=""></image>
			</view>
			<view class="main1_list4">
				<image class="main1_list4_1" :src="url+data_top.carImgTwoLocation" mode=""></image>
			</view>
			<view class="main1_list1">
				车辆描述：
			</view>
			<view class="main1_list7">
				{{data_top.description}}
			</view>
		</view>
		<view class="title">
			行驶证
		</view>
		<view class="xingshi">
			<view class="text">
				{{data_drive.title}}
			</view>
			<view  class="text_list">
				<view class="text_main1">
					车牌号码
				</view>
				<view class="text_main2">
					{{data_drive.carNum}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					车辆类型
				</view>
				<view class="text_main2">
					{{data_drive.carType}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					所有人
				</view>
				<view class="text_main2">
					{{data_drive.owner}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					住址
				</view>
				<view class="text_main2">
					{{data_drive.address}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					品牌
				</view>
				<view class="text_main2">
					{{data_drive.brand}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					机架号
				</view>
				<view class="text_main2">
					{{data_drive.carRackNum}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					电机号
				</view>
				<view class="text_main2">
					{{data_drive.carMotorNum}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					发证日期
				</view>
				<view class="text_main2">
					{{data_drive.dateOfIssue}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					车辆颜色
				</view>
				<view class="text_main2">
					{{data_drive.color}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					购车日期
				</view>
				<view class="text_main2">
					{{data_drive.buyTime}}
				</view>
			</view>
			<view class="text_f">
				<view class="yinzhang">
					{{data_drive.stamp}}
				</view>
				<view class="time">
					检验有效期至{{data_drive.validity}}
				</view>
			</view>
		
		</view>
		<view class="phone">
			<view class="phone_but">
				<van-button round custom-class='button_buy' color='#b31c1c' icon="phone" type="primary">联系卖家</van-button>
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
				url:'',
				
				
				 //规则文本
				 text_wrap:[],
				 
				  //价格等信息
				  data_top:'',
				  data_drive:''
				  
				  }
				 
		},
		onLoad(e) {
			this.url=getApp().globalData.url
			//车辆详情信息
			this.data_top=JSON.parse(e.data)
			console.log(JSON.parse(e.data))
			this.Driving_test(JSON.parse(e.data).id)
		},
		methods: {
			//行驶证信息查询
			Driving_test(e) {
			               this.$myRequest({
			                   url:"/drivingLicense/getByUserId",
							   data:{'id':e},
			                   method:'get',
			               }).then((res)=>{
							  
							 this.data_drive=res.data
							   console.log(res)
							   }).catch((res)=>{console.log(res)})
			              
			           },
		
			
			
	
				   
		},
		created(){
			this.getSwipers_text();
			this.getSwipers();
		},
	}
</script>

<style>
	.button_buy{
		
		margin: 25rpx auto 0 45rpx;
	}
	.phone_but{
		width: 306rpx;
		height: 80rpx;
		margin: 0 auto;
		
	}
	.phone{
		height: 136rpx;
		border-radius: 30rpx;
		margin: 35rpx auto 35rpx auto;
		padding-top: 27rpx;
		padding-bottom: 27rpx;
		width: 730rpx;
		background-color: #fff;
		
		}
	.time{
		margin-top: 23rpx;
		width: 451rpx;
		height: 50rpx;
		font-size: 12px;
		line-height: 50rpx;
		text-align: center;
		border: 6rpx solid #000;
	}
	.yinzhang{
		padding-left: 15rpx;
		
		padding-top: 8rpx;
		width: 190rpx;
		height: 190rpx;
		border:6rpx #d22727 solid; 
		line-height: 60rpx;
		font-size: 15px;
		color: #d22727;
	}
	.text_f{
		margin-top: 61rpx;
		display: flex;
		justify-content: space-around;
	}
	.text_main1{
		margin-left: 41rpx;
	}
	.text_main2{
		margin-left: 25rpx;
	}
	.text_list{
		display: flex;
		line-height: 70rpx;
	}
	.text{
		height: 93rpx;
		line-height: 93rpx;
		width: 100%;
		text-align: center;
		font-size: 19px;
		font-weight: bold;
	}
	.xingshi{
		border-radius: 30rpx;
		margin: 35rpx auto 35rpx auto;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		width: 730rpx;
		background-color: #fff;
	}
	.title{
		font-size: 23px;
		text-align: center;
		width: 100vw;
		margin-top: 55rpx;
		margin-bottom: 30rpx;
	}
	.main1_list1{
		margin-left: 30rpx;
		margin-top: 20rpx;
	}
	.main1_list7{
		text-indent:2em;
		line-height: 60rpx;
		width: 700rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		background-color:#e5e5e5;
		margin: 20rpx auto 0 auto;
		border-radius: 20rpx;
		}
	.main1_list4{
		margin: 30rpx auto 0 auto;
		width: 614rpx;
		height: 451rpx;
		border: 20rpx solid #e5e5e5;
		border-radius: 30rpx;
	}
	.main1_list4_1{
		object-fit: cover;
		width: 614rpx;
		height: 451rpx;
		
	}
	.main1_list2{
		margin: 40rpx auto 40rpx auto;
		width: 277rpx;
		height: 84rpx;
		border-radius: 30rpx;
		background-color: #d43030;
		color: #FFF;
		font-size: 20px;
		font-weight: bold;
		line-height: 84rpx;
		text-align: center;
		}
	.main1{
		width: 730rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		background-color: #fff;
		border-radius: 40rpx;
		margin: 22rpx auto 0 auto;
	}
	.wrap{
		overflow: hidden;
		padding-bottom: 60rpx;
		background-color: #e5e5e5;
	}
</style>
