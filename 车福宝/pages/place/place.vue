<template>
	<view class="map">
		
		<view class="place">
			{{place_name}}
		</view>
		<map id="map" :longitude="longitude" :latitude="latitude" scale="14"  bindcontroltap="controltap" :markers="markers" bindmarkertap="markertap"  bindregionchange="regionchange"  style="width: 100%; height: 80vh;"></map>
		<tab active=100000></tab>
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
				
				 markers: [{
				      iconPath: "../../static/image/location.png",
				      id: 0,
				      latitude: '',
				      longitude: '',
				      
				    }],
				  place_name:'',
				  latitude:'',
				  longitude:''
				  }
				 
		},
		onLoad(e) {
			this.place_name=e.name
			this.markers[0].latitude=Number(e.latitude)
			this.markers[0].longitude=Number(e.longitude)
			this.latitude=Number(e.latitude)
			this.longitude=Number(e.longitude)
			console.log(this.latitude)
			
		},
		methods: {

		},
		created(){
			
			this.place()
		},
	}
</script>

<style>
	.map{
		min-height: 100vh;
		background-color: #E5E5E5;
		overflow: hidden;
	}
	.place{
		text-align: center;
		width: 730rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 25rpx;
		margin: 20rpx auto 20rpx auto;
		background-color: #fff;
	}
</style>
