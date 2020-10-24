<template>
	<view class="content">
	<view class="phone_img">
		<image class="phone" src="../../static/image/dianhua.svg" mode=""></image>
	</view>
		<view class="page-section-spacing">
			<swiper circular='true' class="swiper" 
				indicator-dots="true" 
				autoplay="true" 
				interval="3000" 
				duration="1500"	>
				<swiper-item v-for="(item,index) in homeSlide" :key='index' >
					<image class="autoplay" :src="item" mode="aspectFill"></image>
				</swiper-item>		
			</swiper>
		</view>
		<view class="notice">
			
			<van-notice-bar
			   left-icon="volume"
			  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
			  color="#bc1618"
			   background-color="#dce8f8"
			/>
		
		</view>
		<view class="icon">
			<view class="icon_list">
		
				<image class="icon_imgs" src="../../static/image/baoxian.svg" mode=""></image>
				<view class="icon_text">
					车辆保险
				</view>
			</view>
			<view @click="system(1)" class="icon_list">
				<image class="icon_imgs" src="../../static/image/zhidu.svg" mode=""></image>
				<view class="icon_text">
					规章制度
				</view>
			</view>
			<view  @click="system(2)" class="icon_list">
				<image class="icon_imgs" src="../../static/image/shangpin.svg" mode=""></image>
				<view class="icon_text">
					车辆用品
				</view>
			</view>
			<view class="icon_list">
				<image class="icon_imgs" src="../../static/image/mycar.svg" mode=""></image>
				<view class="icon_text">
					我的车辆
				</view>
			</view>
			<view @click="system(4)" class="icon_list">
				<image class="icon_imgs" src="../../static/image/ershouche.svg" mode=""></image>
				<view class="icon_text">
					二手车
				</view>
			</view>
		</view>
		<view class="main_top">
			<view class="buy_back">
				<view class="main_tit">
					<view style="margin-left: 15rpx;" class="tit_left">
						买车分期
					</view>
					<view class="tit_right">
						<view class="right_text">
							更多
						</view>
						<van-icon custom-style='margin-top:7rpx' color='#949494' name="arrow" />
					</view>
				</view>
				<view class="img_list_wrap">
					<view class="main_imgs">
						<view class="img_list">
							<image class="img_list" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="img_list_tit">
							商品标题啊啊啊啊啊啊啊啊啊
						</view>
						
					</view>
					<view class="main_imgs">
						<view class="img_list">
							<image class="img_list" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="img_list_tit">
							商品标题啊啊啊啊啊啊啊啊啊
						</view>
						
					</view>
					<view class="main_imgs">
						<view class="img_list">
							<image class="img_list" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="img_list_tit">
							商品标题啊啊啊啊啊啊啊啊啊
						</view>
						
					</view>
					<view class="main_imgs">
						<view class="img_list">
							<image class="img_list" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="img_list_tit">
							商品标题啊啊啊啊啊啊啊啊啊
						</view>
					
					</view>
					<view class="main_imgs">
						<view class="img_list">
							<image class="img_list" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="img_list_tit">
							商品标题啊啊啊啊啊啊啊啊啊
						</view>
						
					</view>
					<view class="main_imgs">
						<view class="img_list">
							<image class="img_list" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="img_list_tit">
							商品标题啊啊啊啊啊啊啊啊啊
						</view>
						
					</view>
					<view class="main_imgs">
						<view class="img_list">
							<image class="img_list" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="img_list_tit">
							商品标题啊啊啊啊啊啊啊啊啊
						</view>
						
					</view>
				</view>
			</view>
			
			<view class="page-section-spacing">
				<swiper circular='true' class="swiper2" 
					autoplay="true" 
					interval="3000" 
					duration="1500"	>
					<swiper-item v-for="(item,index) in homeSlide" :key='index' >
						<image class="autoplay" :src="item" mode="aspectFill"></image>
					</swiper-item>		
				</swiper>
			</view>
			<view class="baoxian">
				<view class="baoxian_tit">
					违章查询
				</view>
				<view class="button">
					违章查询入口
				</view>
				<image class="weizhang_img" src="../../static/image/weizhang.jpg" mode=""></image>
			</view>
			<view class="shop">
				<view class="main_tit">
					
					<view class="tit_left">
						电瓶购买
					</view>
					<view  class="tit_right">
						<view class="right_text">
							查看更多
						</view>
						<van-icon custom-style='margin-top:7rpx' color='#949494' name="arrow" />
					</view>
				</view>
				<view v-for='item in 3' class="shop_main" :key='item'>
					<view class="shop_list">
						<view class="sm1">
							<image class="sm1" src="../../static/image/shop.png" mode=""></image>
						</view>
						<view class="sm2">
							这里是商品
						</view>
						<view class="sm3">
							200 ￥
						</view>
						<view class="sm4">
							<view class="sm4_1">
								538人已购买
							</view>
							<view class="sm4_2">
								购买
							</view>
						</view>
					</view>
				
				</view>
				
				
			</view>
			<view class="baoxian_wrap">
				<view class="main_tit">
					
					<view class="tit_left">
						车辆保险
					</view>
					<view  class="tit_right">
						<view class="right_text">
							查看更多
						</view>
						<van-icon custom-style='margin-top:7rpx' color='#949494' name="arrow" />
					</view>
				</view>
				<view class="footer_wrap">
					<view class="footer">
						<view class="footer_t">
							<image class="footer_img" src="../../static/image/footer1.jpg" mode=""></image>
						</view>
						<view class="footer_m">
							行车保险
						</view>
						<view class="footer_b">
							       这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介。
						</view>
					</view>
					<view  class="footer">
						<view class="footer_t">
							<image class="footer_img" src="../../static/image/footer2.jpg" mode=""></image>
						</view>
						<view class="footer_m">
							丢失险
						</view>
						<view class="footer_b">
							       这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介这里是保险简介。
						</view>
					</view>
				</view>
			</view>
			
		
		</view>
		<tab active=0></tab>
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
				active: 0,
				homeSlide:[]
			}
		},
		onLoad(e) {
			console.log(e)
		},
		methods: {
			//点击规章制度跳转
			system(e){
				console.log(e)
				switch (e){
					case 1:
					uni.redirectTo({
					                  url:"../system/system",
					                  success:res =>{console.log(3333)},
					                  fail:(msg) =>{console.log(msg)}
					                 
					              });
						break;
						case 4:
						uni.redirectTo({
						                  url:"../tow_car/tow_car",
						                  success:res =>{console.log(3333)},
						                  fail:(msg) =>{console.log(msg)}
						                 
						              });
							break;
						case 2:
						uni.redirectTo({
						                  url:"../shop/shop",
						                  success:res =>{console.log(3333)},
						                  fail:(msg) =>{console.log(msg)}
						                 
						              });
							break;
					default:
						break;
				}
				 
			},
			//底部导航
		 onChange(event) {
		 			// event.detail 的值为当前选中项的索引
		 			this.active=event.detail;
		 			console.log(11111)
		  },
		  //轮播图查询
		getSwipers() {
		               this.$myRequest({
		                   url:"/slideShowImage/list",
						   data:{'isDelete':1},
		                   method:'get',
		               }).then((res)=>{
						   for(let i=0;i<res.data.length;i++){
							   this.homeSlide.push(getApp().globalData.url+res.data[i].imgLocation)
						   }
						   
						   console.log(res)
						   }).catch((res)=>{console.log(res)})
		              
		           },
		//上传类 如上传单张图片如下
		// loadNewsList() {
		// 	uni.chooseImage({
		// 		count: 1, //默认9
		// 		success: (chooseImageRes) => {
		// 		const tempFilePaths = chooseImageRes.tempFilePaths[0];//选择后的图片本地地址
		// 		console.log(tempFilePaths)
		// 		this.img=tempFilePaths
		// 			this.$myUploadFile({
		// 				url: '/uploadPicPros',
		// 				header: {},
		// 				formData: {},
		// 				name: 'file',//图片参数名
		// 				filePath: tempFilePaths//图片本地地址
		// 				}).then(function(response) {
		// 					console.log(response)
		// 				}).catch(function(error) {
		// 						console.log(error);
		// 				});
		// 			}
		// 	});
		// }

				   
		},
		created(){
			this.getSwipers()
		},
	}
</script>

<style>
	
	.shop_list{
		width: 323rpx;
		margin-top: 29rpx;
	}
	.sm1{
		width: 323rpx;
		height: 314rpx;
		object-fit: cover;
		display: block;
	}
	.sm2{
		width: 100%;
	overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
	}
	.sm3{
		
		color: red;
		
	}
	.sm4{
		display: flex;
		justify-content: space-between;
		width: 100%;
		
	}
	.sm4_1{
		font-size: 13px;
		color: #b8b8b8;
	}
	.sm4_2{
		background-color: #d43030;
		width: 105rpx;
		height: 60rpx;
		border-radius: 40rpx;
		color: #fff;
		font-size: 15px;
		font-weight: bold;
	
		text-align: center;
		line-height: 60rpx;
	}
	.shop_main{
		height: 500rpx;
	}
	.shop{
		padding-left: 27rpx;
		padding-right: 27rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 676rpx;
		height: 1120rpx;
		overflow: hidden;
		background-color: #fff;
		border-radius: 40rpx;
		margin: 22rpx auto 0 auto;
	}
	.button{
		background-color: #448fe3;
		width: 388rpx;
		height: 100rpx;
		border-radius: 40rpx;
		color: #fff;
		font-size: 19px;
		font-weight: bold;
		position: absolute;
		left: 40rpx;
		text-align: center;
		line-height: 100rpx;
		top: 234rpx;
	}
	.baoxian_tit{
		font-size: 18px;
		line-height: 45rpx;
		font-weight: bold;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		margin-left: 20rpx;
	}
	.weizhang_img{
		border-radius: 40rpx;
		overflow: hidden;
		width: 684rpx;
		height: 308rpx;
		object-fit: cover;
		display: block;
		margin: 0 auto;
	}
	.baoxian{
		overflow: hidden;
		position: relative;
		margin: 22rpx auto 0 auto;
		width: 730rpx;
		background-color: #fff;
		border-radius: 40rpx;
		height: 497rpx;
	}
	.van-notice-bar__content{
		color:#2e2fa3 !important ;
	}
	.notice-swipe {
	    height: 40px;
	    line-height: 40px;
	  }
	.phone_img{
		z-index: 10000000;
		position: fixed;
		top: 700rpx;
		right: 0rpx;
		width: 140rpx;
		height: 140rpx;
		margin-right: -20rpx;
		
	}
.phone{
		display: unset;
		height: 160rpx;
}
	.footer_wrap{
		display: flex;
		justify-content: space-around;
	}
	.footer_b{
		padding-top: 25rpx;
		padding-bottom: 25rpx;
		text-indent:2em;
		font-size: 11px;
		margin: 0 auto;
		width: 317rpx;
		height: 185rpx;
		border-radius: 30rpx;
		background-color: #fff;
	}
	.footer_img{
		width: 100%;
		height: 187rpx;
		object-fit: cover;
	}
	.footer_m{
		margin-top: 13rpx;
		margin-bottom: 22rpx;
		font-weight: bold;
		margin-left: 17rpx;
	}
	.footer{
		margin-top: 42rpx;
		width: 345rpx;
		height: 530rpx;
		background-color: #e4fefb;
		border-bottom-left-radius: 45rpx;
		border-bottom-right-radius: 45rpx;
	}
	.swiper2{
		height: 88rpx;
	}
	.background{
		height: 88rpx;
	}
	::-webkit-scrollbar { background-color:#fff; }
	.img_list_wrap{
		width: 100vw;
		overflow: scroll;
		overflow-y: hidden;
		height: 340rpx;
		margin-top: 33rpx;
		
		/* flex-shrink:0; */
		display: flex;
	}
	.img_list_money{
		color: #d34e54;
		font-size: 13px;
		}
	.img_list_tit{
		margin-top: 22rpx;
		margin-bottom: 22rpx;
		width: 182rpx;
		overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
		}
	.img_list{
		width: 182rpx;
		height: 182rpx;
		object-fit: cover;
	}
	.main_imgs{
		margin-left: 21rpx;
		
		height: 340rpx;
	}
	.main_top{
		overflow: hidden;
		margin-top: 22rpx;
	}
	.right_text{
		color: #949494;
		
		line-height: 45rpx;
	}
	.tit_left{
		
		font-size: 18px;
		line-height: 45rpx;
		font-weight: bold;
	}
	.tit_right{
		display: flex;
	}
	.baoxian_wrap{
		overflow: hidden;
		margin-top: 22rpx;
		background-color: #fff;
		border-radius: 40rpx;
		height: 720rpx;
		margin: 22rpx auto 0 auto;
		width: 730rpx;
	}
	.buy_back{
		margin: 0 auto 22rpx auto;
		width: 730rpx;
	
		overflow: hidden;
		background-color: #fff;
		border-radius: 50rpx;
		height: 420rpx;
	}
	.main_tit{
		
		width: 718rpx;
		margin: 40rpx auto 0 auto;
		height: 45rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.icon_text{
		margin-top: 17rpx;
		width: 105rpx;
		text-align: center;
		font-size: 13px;
	}
	.icon_imgs{
		width: 105rpx;
		height: 74rpx;
	}
	.icon{
		height: 221rpx;
		background-color: #fff;
		width:100vw;
		display: flex;
		justify-content: space-around;
		}
	.notice{
		width: 100vw;
		height: 62rpx;
		
	}
	.swiper{
		width: 100vw;
		height: 380rpx;
	}
	.autoplay{
		width: 100vw;
	}
	.content {
		background-color: #e5e5e5;
		position: relative;
		padding-bottom: 120rpx;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.icon_list{
		margin-top: 45rpx;
	}
</style>
