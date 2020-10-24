<template>
	<view class="wrap">
		
		
		<view v-for="(item,index) in data_drive" :key='index' class="xingshi">
			<view class="text">
				{{item.title}}
			</view>
			<view  class="text_list">
				<view class="text_main1">
					车牌号码
				</view>
				<view class="text_main2">
					{{item.carNum}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					车辆类型
				</view>
				<view class="text_main2">
					{{item.carType}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					所有人
				</view>
				<view class="text_main2">
					{{item.owner}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					住址
				</view>
				<view class="text_main2">
					{{item.address}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					品牌
				</view>
				<view class="text_main2">
					{{item.brand}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					机架号
				</view>
				<view class="text_main2">
					{{item.carRackNum}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					电机号
				</view>
				<view class="text_main2">
					{{item.carMotorNum}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					发证日期
				</view>
				<view class="text_main2">
					{{item.dateOfIssue}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					车辆颜色
				</view>
				<view class="text_main2">
					{{item.color}}
				</view>
			</view>
			
			<view  class="text_list">
				<view class="text_main1">
					购车日期
				</view>
				<view class="text_main2">
					{{item.buyTime}}
				</view>
			</view>
			<view class="text_f">
				<view class="yinzhang">
					{{item.stamp}}
				</view>
				<view class="button_r">
					<view class="time">
						检验有效期至{{item.validity}}
					</view>
					<view class="button_f">
						<van-button @click='out_car(item.id)' custom-class='button_class' color='#d43030' round type="info">出售</van-button>
					</view>
						
					
					
				</view>
				
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
				// 手风琴
				activeName: '',
				
				 //规则文本
				 text_wrap:[],
				  // 轮播图
				  homeSlide:[],
				  //价格等信息
				  data_top:'',
				  data_drive:''
				  
				  }
				 
		},
		onLoad(e) {
			this.url=getApp().globalData.url
			
		},
		methods: {
			//行驶证信息查询
			Driving_test() {
			               this.$myRequest({
			                   url:"/drivingLicense/listByUserId",
							   data:{'userId':1},
			                   method:'get',
			               }).then((res)=>{
							  
							 this.data_drive=res.data
							   console.log(res)
							   }).catch((res)=>{console.log(res)})
			              
			           },
			//跳转填写售车信息
			out_car(id){
				uni.navigateTo({
				                  url:`../sell/sell?id=${id}`,
				                  success:res =>{console.log(3333)},
				                  fail:(msg) =>{console.log(msg)}
				                 
				              });
			}
			
		
	
				   
		},
		created(){
			
			this.Driving_test()
		},
	}
</script>

<style>
	.button_class{
		width: 150rpx !important;
	}
	.button_f{
		margin-top: 22rpx;
		margin-left: 300rpx;
		width: 100%;
	}
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
