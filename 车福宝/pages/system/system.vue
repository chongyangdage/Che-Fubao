<template>
	<view class="wrap">
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
		<view class="text">
			<van-collapse accordion :value=" activeName " @change="onChange_sfq">
			  <van-collapse-item v-for='(item,index) in text_wrap' :key='index' :title="item.name" :name="index+1">
			    {{item.text}}
			  </van-collapse-item>
			
			</van-collapse>
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
				// 手风琴
				activeName: '',
				
				 //规则文本
				 text_wrap:[],
				  // 轮播图
				  homeSlide:[]
				  
				  }
				 
		},
		onLoad() {
	
		},
		methods: {
			//轮播图查询
			getSwipers_text() {
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
			//规章制度查询
			getSwipers() {
			               this.$myRequest({
			                   url:"/rulesRegulations/list",
							   data:{'isDelete':1},
			                   method:'get',
			               }).then((res)=>{
							   for(let i=0;i<res.data.length;i++){
								   
								   this.text_wrap.push({'name':res.data[i].name,'text':res.data[i].content})
							   }
							   
							   console.log(res)
							   }).catch((res)=>{console.log(res)})
			              
			           },
			//手风琴
			onChange_sfq(event) {
						// event.detail 的值为当前选中项的索引
						this.activeName=event.detail;
						console.log(this.activeName)
			 },
	
				   
		},
		created(){
			this.getSwipers_text();
			this.getSwipers();
		},
	}
</script>

<style>
	.wrap{
		padding-bottom: 70rpx;
	}
	.swiper{
		width: 100vw;
		height: 338rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}
	.autoplay{
		width: 100vw;
	}
</style>
