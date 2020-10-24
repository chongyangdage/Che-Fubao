<template>
	<view class="wrap_s">
		<view class="search">
			<van-search @change='change_search' use-action-slot :value="value" placeholder="请输入商品名称" >
				<view slot="action"  @click="search">搜索</view>
				</van-search>
		</view>
		<view class="shop_list">
			<van-tabs :active='active'  animated @click='click_tab'>
				<van-tab :name='Number(0)' title="全部">
					<view  class="shop_wrap">
					  <view v-if="data_all.length==0" class="text">
					  						暂无商品
					  </view>
						<view v-for="(item,index) in data_all" :key='index' @click="shop_details(item.id)" class="shop_main">
											
							<view class="shop_img">
								<image class="shop_img" :src="url+item.imgPath" mode=""></image>
							</view>
							<view class="shop_tit">
								{{item.name}}
							</view>
							<view class="shop_price">
								￥ {{item.currentPrice}}
							</view>
						</view>
					</view>
				</van-tab>
				
			  <van-tab  :name='Number(index1+1)' v-for='(item1,index1) in data_kind'  :key='index1'  :title="item1.typeName">
				
				  <view  class="shop_wrap">
					  <view v-if="data_main.length==0" class="text">
					  	暂无商品
					  </view>
				  	<view v-for="(item,index) in data_main" @click="shop_details(item.id)" :key='index' class="shop_main">
						
				  		<view class="shop_img">
				  			<image class="shop_img" :src="url+item.imgPath" mode=""></image>
				  		</view>
						<view class="shop_tit">
							{{item.name}}
						</view>
						<view class="shop_price">
							￥ {{item.currentPrice}}
						</view>
				  	</view>
				  </view>
				  
			  </van-tab>
			
			</van-tabs>
			
		</view>
		<tab active=2></tab>
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
				active:Number(0),
				//搜索
				value:'',
				data_all:'',
				name:'',
				//分类名称
				data_kind:'',
				//分类商品
				data_main:'',
				url:'',
				index:'',
				search_data:''
				  
		}
				 
		},
		onLoad() {
	
		},
		methods: {
			
			//搜索文字改变
			change_search(e){
				console.log(3333333)
				console.log(e)
				this.value= e.detail
			},
		   //商品分类名称查询
		   Driving_test() {
			  this.$myRequest({
				  url:"/productType/list",
				  method:'get',
			  }).then((res)=>{
			  
			 this.data_kind=res.data
			 this.index=res.data[0].id
			 this.Driving_details(this.index)
			   console.log(res)
			   }).catch((res)=>{console.log(res)})
			 
		  },
		  //商品分类详情查询
			 Driving_details(e) {
				this.$myRequest({
					url:"/product/listByType",
				  data:{productTypeId:e},
					method:'get',
				}).then((res)=>{
				  
				 this.data_main=res.data
				 console.log(this.data_main.length)
				   console.log(res)
				   }).catch((res)=>{console.log(res)})
			   
			},
			
			//搜索
			search(e){
				
				this.active-=this.active
				console.log(666666666666)
				console.log(this.active)
				this.$myRequest({
					url:"/product/listByName",
				  data:{name:this.value},
					method:'get',
				}).then((res)=>{
				  
				 this.data_all=res.data
				   console.log(res)
				   }).catch((res)=>{console.log(res)})
			},
			
			//全部商品详情查询
						 Driving_all(e) {
							this.$myRequest({
								url:"/product/listByType",
								method:'get',
							}).then((res)=>{
							  
							 this.data_all=res.data
							   console.log(res)
							   }).catch((res)=>{console.log(res)})
						   
						},
					  
			//点击分类标题事件
			click_tab(e){
				console.log(e)
				this.active=e.detail.index
				// console.log(this.name)
				let text=e.detail.title
				for(let i=0;i<this.data_kind.length;i++){
					
					if(this.data_kind[i].typeName==text){
						// console.log(5555555555555)
						// console.log(text)
						// console.log(this.index)
						this.index=this.data_kind[i].id
					}
					
				}
				
				this.Driving_details(this.index)
				
			},
			//改变分类标题事件
			change(e){
				// this.index=e.detail.id
				// this.Driving_details(this.index)
				console.log(e)
			},
			//点击商品进入详情页
			shop_details(e){
				uni.navigateTo({
				  url:`../shop_details/shop_details?id=${e}`,
				  success:res =>{console.log(res)},
				  fail:(msg) =>{console.log(msg)}
				 
			  });
			}
		},
		
		
		created(){
			// this.index=this.data_kind[0].id
			this.url=getApp().globalData.url
				this.Driving_test()
				this.Driving_all()
		}
	}
</script>

<style>
	.text{
		width: 100%;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		
		}
	.shop_price{
		color: red;
		text-align: left;
		margin-top: 15rpx;
	}
	.shop_wrap{
		width: 666rpx;
		padding:32rpx;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 8rpx auto 0 auto;
		border-radius: 30rpx;
	}
	.shop_tit{
		text-align: left;
		margin-top: 10rpx;
		width: 100%;
		overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
		}
	.shop_main{
		margin-top: 34rpx;
		width: 299rpx;
	}
	.shop_img{
		width: 299rpx;
		height: 286rpx;
	}
	.wrap_s{
		min-height: 100vh;
		background-color: #e5e5e5;
		padding-bottom: 100rpx;
	}
</style>
