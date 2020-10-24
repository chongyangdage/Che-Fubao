<template>
	<view class="wrap_c">
		<form @submit="submit" @reset="">
			<view class="top_tit">
				个人车辆出售登记
			</view>
			<view class="main1">
				<view class="main1_text">
					1.请填写相关信息
				</view>
				<view class="input">
					<van-icon size='25px' custom-class='icons' color='#4990e0' name="phone" />
					<input type="number" name='phone' class="input1" placeholder="请输入电话号" value="" />
				</view>
				<view class="input">
					<van-icon size='25px' custom-class='icons' color='#4990e0' name="manager" />
					<input  class="input1" name='user_name' type="text" placeholder="请填写联系人姓名" value="" />
				</view>
				<view class="explain">
					<textarea id="textarea" name='explain'  placeholder="填写说明"  >
				
					</textarea> 
				</view>
				<view class="input">
					<van-icon size='25px' custom-class='icons' color='#d43030' name="gold-coin" />
					<input  class="input1" name='price' type="number" placeholder="请填写出售价格" value="" />
				</view>
				<view class="main1_text margin">
					4.请上传车辆前45°和后45°照片
				</view>
				<view class="imgs_show margin">
					<view class="img_show">
						<image  class="img_show1"  src="../../static/image/footer1.jpg" mode=""></image>
					</view>
					<view class="img_show">
						<image  class="img_show1"  src="../../static/image/footer1.jpg" mode=""></image>
					</view>
				</view>
				<view class="imgs_text">
					请您按照上方演示严格上传照片并确保照片真实有效
				</view>
				<view style="margin-top: 50rpx;" class="imgs_show margin1">
					<view @click="chooseImage1" class="img_show">
						<image  class="img_show1"  :src="img_url1" mode=""></image>
					</view>
					<view  @click="chooseImage2" class="img_show">
						<image  class="img_show1"  :src="img_url2" mode=""></image>
					</view>
				</view>
				<view class="price_text margin">
					在线出售车辆我们将收取9.9元信息发布费用
				</view>
				<button form-type="submit" class="button_submit">
					立即提交
				</button>
			</view>
			<tab active=190000></tab>
			<van-notify id="van-notify" />
		</form>
		
	</view>
</template>

<script>
	import tab from '../../components/tab/tab.vue';
	import Notify  from '../../wxcomponents/dist/notify/notify';
	export default {
		components:{
			tab
		},
		data() {
			return {
				id:'',
				img_url1:'../../static/image/uolod.png',
				img_url2:'../../static/image/uolod.png',
		}
				 
		},
		onLoad(e) {
			this.id=e.id
			console.log(e.id)
		},
		methods: {
			
			//提交表单
			submit(e){
				console.log(e)
				let obj=e.detail.value
				 for(let key  in obj){
				        if(obj.key==''){
							Notify('请填写完整信息再进行提交');
							return;
						}
				  }
				  if(this.img_url1=='../../static/image/uolod.png'||this.img_url2=='../../static/image/uolod.png'){
					  Notify('请填写完整信息再进行提交');
					  return;
				  }
				
			},
			//上传前45
			 chooseImage1(){
				uni.chooseImage({
					count: 1, //默认9
					success: (chooseImageRes) => {
					const tempFilePaths = chooseImageRes.tempFilePaths[0];//选择后的图片本地地址
					this.img_url1=tempFilePaths
					console.log(tempFilePaths)
					
						this.$myUploadFile({
							url: '/uploadPicPros',
							header: {},
							formData: {},
							name: 'file',//图片参数名
							filePath: tempFilePaths//图片本地地址
							}).then(function(response) {
								console.log(response)
							}).catch(function(error) {
									console.log(error);
							});
						
					}
				});
		                      
		                   
		     },
			 //上传后45
			  chooseImage2(){
			 	uni.chooseImage({
			 		count: 1, //默认9
			 		success: (chooseImageRes) => {
			 		const tempFilePaths = chooseImageRes.tempFilePaths[0];//选择后的图片本地地址
			 		this.img_url2=tempFilePaths
			 		console.log(tempFilePaths)
			 		
			 			this.$myUploadFile({
			 				url: '/uploadPicPros',
			 				header: {},
			 				formData: {},
			 				name: 'file',//图片参数名
			 				filePath: tempFilePaths//图片本地地址
			 				}).then(function(response) {
			 					console.log(response)
			 				}).catch(function(error) {
			 						console.log(error);
			 				});
			 			
			 		}
			 	});
			                   
			                
			  },
			
			
			
		},
		
		
		created(){
	
		}
	}
</script>

<style>
	.button_submit{
		width: 257rpx;
		height: 70rpx;
		color: #fff;
		font-weight: bold;
		background-color: #b31c1c;
		line-height: 70rpx;
		border-radius: 30rpx;
		margin: 40rpx auto 40rpx auto;
	}
	.price_text{
		width: 670rpx;
		height: 91rpx;
		border-radius: 30rpx;
		background-color: #fff;
		text-align: center;
		margin: 27rpx auto 0 auto;
		line-height: 91rpx;
	}
	.margin1{
		margin-top: 30rpx;
		}
.imgs_show{
	width: 670rpx;
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
}
.imgs_text{
	height: 50rpx;
	background-color: #E5E5E5;
	text-align: center;
	line-height: 50rpx;
	border-radius: 15rpx;
	width: 670rpx;
	margin: 10rpx auto 0 auto;
	font-size: 13px;
}
	.img_show{
		width: 278rpx;
		height: 199rpx;
		border: 4rpx solid #fff;
		
	} 
	.img_show1{
		width: 278rpx;
		height: 199rpx;
		object-fit: cover;
		
	} 　　
	　.margin{
		margin-top: 27rpx;
	}
	#textarea{
		background-color: #e5e5e5;
		margin: 23rpx auto 23rpx  auto;
		width: 504rpx;
		height: 244rpx;
		border-radius: 30rpx;
		text-align: center;
		
	}
	.input1::-ms-input-placeholder{text-align: center;}
	.input1::-webkit-input-placeholder{text-align: center;}
	 
	
	      
	.icons{
		margin-left: 28rpx;
	}
	.input{
		margin: 22rpx auto 0 auto;
		display: flex;
		width: 505rpx;
		
		height: 71rpx;
		border-radius: 30rpx;
		background-color: #fff;
		color: #918d86;
	}
	.input1{
		
		text-align: center;
		height: 71rpx;
	
		background-color: #fff;
		color: #918d86;
	}
	.main1{
		width: 100%;
	}
	.main1_text{
		
		color: #fff;
		font-size: 15px;
		margin-left: 120rpx;
		height: 54rpx;
		line-height: 54rpx;
		
		
		font-weight: bold;
		}
	.top_tit{
		font-size: 20px;
		color: #fff;
		font-weight: bold;
		text-align: center;
		line-height: 242rpx;
	}
.wrap_c{
	background-color: #4990e0;
	padding-bottom: 160rpx;
}
</style>
