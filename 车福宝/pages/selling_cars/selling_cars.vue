<template>
	<view class="map">
		<view class="car_wrap">
			
			<view class="car_tit">
				在售车辆
			</view>
			<view class="list" v-for="(item,index) in car_data_all" :key='index'>
				<view class="imgs_list">
					<view class="imgs">
						<image class="img" :src="url+item.carImgOneLocation" mode=""></image>
					</view>
					<view class="imgs">
						<image class="img" :src="url+item.carImgTwoLocation" mode=""></image>
					</view>
				</view>
				<view class="text1">
					<view :decode="true" class="text1_1">
						品&emsp;&emsp;牌:
					</view>
					<view class="text1_1">
						{{item.brand}}
					</view>
					<view :decode="true" class="text1_2">
						联系人：
					</view>
					<view class="text1_1">
						{{item.contactName}}
					</view>
				</view>
				<view class="text1">
					<view :decode="true" class="text1_1">
						类&emsp;&emsp;型:
					</view>
					<view class="text1_1">
						{{item.type}}
					</view>
					
				</view>
				<view class="text1">
					<view :decode="true" class="text1_1">
						颜&emsp;&emsp;色:
					</view>
					<view class="text1_1">
						{{item.color}}
					</view>
					
				</view>
				
				<view class="text1">
					<view :decode="true" class="text1_1">
						购车日期
					</view>
					<view class="text1_1">
						{{item.buyTime}}
					</view>
					<view class="button">
						<van-button :disabled='item.status==0?false:true' @click='button(item.id)' color='#d43030' round type="danger">{{item.status==0?'确认售出':'已出售'}}</van-button>
					</view>
				</view>
			</view>
			
		</view>
		
	<tab active=100000></tab>
	<van-dialog id="van-dialog" />
	<van-notify id="van-notify" />
	</view>
</template>

<script>
	
	import Notify  from '../../wxcomponents/dist/notify/notify';
	import Dialog from '../../wxcomponents/dist/dialog/dialog';
	import tab from '../../components/tab/tab.vue';
	export default {
		components:{
			tab
		},
		data() {
			return {
				button_text:'确认售出',
				disabled:false,
				url:'',
				car_data_all:''
			}
				 
		},
		onLoad(e) {
			
			
		},
		methods: {
			
			//查询售车信息
			car_data(){
				this.url=getApp().globalData.url
			   this.$myRequest({
				   url:"/secondHandCar/listByUser",
				   method:'get',
				   data:{userId:1},
			   }).then((res)=>{
				  console.log(88888)
				   this.car_data_all=res.data
				   
				   console.log(res)
				   }).catch((res)=>{console.log(res)})
			},
			
			//加载弹窗
			dialog(id){
				Dialog.confirm({
				  title: '确认车辆出售？',
				  message: '确认后平台将不在显示该车辆信息',
				  asyncClose: true
				})
				  .then(() => {
					  
					  this.$myRequest({
					   url:`/secondHandCar/updateStatus?id=${id}`,
					   method:'post',
					  				  
					  }).then((res)=>{
						if(res.code==200){
							Notify('车辆已出售');
							this.car_data()
						}else{
							Notify('售出失败');
						}
						   }).catch((res)=>{console.log(res)})
					  this.disabled=true
					
				      Dialog.close();
				   
				  })
				  .catch(() => {
				    Dialog.close();
				  });
			},
			
			//点击出售按钮
			button(id){
				this.dialog(id)
			}
			
			
		},
		created(){
			this.car_data()
			
		},
	}
</script>

<style>
	.list{
		margin-top: 60rpx;
	}
	.button{
		margin-top: -20rpx;
		margin-left: 150rpx;
	}
	.text1_1{
		margin-left: 20rpx;
	}
	.text1_2{
		margin-left: 120rpx;
	}
	.text1{
		margin-top: 16rpx;
		display: flex;
		margin-left: 25rpx;
		}
	.imgs{
		width: 310rpx;
		height: 226rpx;
		border: 6rpx #E5E5E5 solid;
	}
	.img{
		width: 310rpx;
		height: 226rpx;
		
	}
	.imgs_list{
		margin-top: 19rpx;
		display: flex;
		justify-content: space-around;
	}
	.car_tit{
		height: 67rpx;
		line-height: 77rpx;
		padding-left: 30rpx;
		border-bottom: 6rpx #E5E5E5 solid;
	}
	.car_wrap{
		overflow: hidden;
		width: 730rpx;
		margin: 20rpx auto 0 auto;
		border-radius: 30rpx;
		background-color: #fff;
		padding-bottom:30rpx ;
	}
	.map{
		min-height: 100vh;
		background-color: #E5E5E5;
		overflow: hidden;
		padding-bottom: 100rpx;
	}
	
</style>
