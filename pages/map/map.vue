<template>
	<view>
		<Navbar/>
		<!-- 试验田 -->
		<view class="mapContent">
			<view class="page-body">
				<view class="page-section page-section-gap">
					<map  style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers"
					 :include-points="covers" @markertap="loacalTitle" scale="11">
					</map>
				</view>
			</view>
		</view>
		<!-- 试验田 -->

		<view class="showLocation" v-for="cover in coversAll" :key="cover.id">
			<view class="showLocationLogo">
				<image src="../../static/20190629154358.png" mode=""></image>
			</view>
			<view class="showLocationText">
				<view class="LocationName">{{cover.callout.content}}</view>
				<view>{多少}人</view>
			</view>
		</view>	
		<!-- <button @click="numberAlert(index)" v-for="(buttonNumber,index) in buttonNumbers" :key="index">{{buttonNumber.number}}</button> -->

		<!-- 通过计算 id 等于 renderId 返回来的数据循环渲染 -->
		<!-- <view v-for="cover in coversAll" :key="cover.id">{{cover.callout.content}}
			<button @click="goMap(cover)">导航</button>
		</view> -->

		<!-- 用v-if 判断 id 等于 renderId 显示 -->
		<!-- <view v-if="cover.id === renderId" v-for="cover in covers" :key="cover.id + 'if'" >{{renderId}}{{cover.callout.content}}</view> -->

	</view>
</template>

<script>
	import Navbar from '../../components/navbar/navbar.vue'
	import gcoord from 'gcoord'

	export default {
		onReady() {
			
		},
		onLoad() {
		},
		mounted() {
			
		},
		data() {
			return {
				localID: '测试id',
				//导航需要的坐标
				mapLatitude: '',
				mapLongitude: '',
				destination: '',

				// 试验田
				title2: 'map',
				latitude: 37.457591,
				longitude: 121.446829,
				renderId: 0,
				covers: [{
						id: 1111,
						latitude: 37.457591,
						longitude: 121.446829,
						iconPath: '../../static/20190629154358.png',
						// label:{
						//        content:'文本2',
						//        color:'#F76350',
						//        bgColor:'#fff',
						//        padding:5,
						//        borderRadius:4,
						// },
						callout: {
							content: '地点1 ID:111',
							color: '#F76350',
							fontSize: 12,
							// display:'ALWAYS'
						}
					},

					{
						id: 2222,
						latitude: 37.448938,
						longitude: 121.468887,
						iconPath: '../../static/20190629154358.png',
						callout: {
							content: '地点2 ID:222',
							color: '#F76350',
							fontSize: 12
						}
					},
					{
						id: 3333,
						latitude: 37.443282, 
						longitude: 121.449404,
						iconPath: '../../static/20190629154358.png', //定点图标
						callout: {
							content: '地点3 ID:333',
							color: '#F76350', //点击定点弹出字体颜色
							fontSize: 12
						}
					},
					{
						id: 4444,
						latitude: 37.438852,
						longitude: 121.433782,
						iconPath: '../../static/20190629154358.png',
						callout: {
							content: '地点4 ID:444',
							color: '#F76350',
							fontSize: 12
						}
					}
				],
				//试验田
				polyline: [{
					'points': [{
						latitude: 39.909,
						longitude: 116.39742
					}, {
						latitude: 39.968033,
						longitude: 116.401244
					}],
					color: '#000000 ',
					width: 3
				}, ]
				// points:[
				// 	{latitude: 39.909,longitude: 116.39742},
				// 	{latitude: 39.90,longitude: 116.39},
				// 	{latitude: 39.902230,longitude: 116.427097},
				// ],
				// color:'red',
				// width:20,
				// borderColor:'red',
				// borderWidth:3,
			}
		},
		computed: {
			// coversAll() {
			// 	return this.covers.filter(cover => cover.id === this.renderId)
			// }
			// 
			coversAll() {
				return this.covers
			}
		},
		methods: {
			loacalTitle(e) {
				console.log('点击了气泡')
				console.log(e);
				console.log(e.detail.markerId);
				this.localID = e.detail.markerId;
				this.renderId = e.detail.markerId;
			},
			mapAlert() {
				console.log('点击了地图');
			},
			goMap(mapLocal) {
				this.mapLatitude = mapLocal.latitude;
				this.mapLongitude = mapLocal.longitude;
				this.destination = mapLocal.callout.content;


				//转坐标
				let result = gcoord.transform(
					[this.mapLongitude, this.mapLatitude], // 经纬度坐标
					gcoord.WGS84, // 当前坐标系
					gcoord.GCJ02 // 目标坐标系
				);

				console.log(123456)

				//调用手机导航
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					geocode:'true',
					success: () => {

						// 						let result = gcoord.transform(
						// 							[this.mapLongitude, this.mapLatitude], // 经纬度坐标
						// 							gcoord.WGS84, // 当前坐标系
						// 							gcoord.GCJ02// 目标坐标系
						// 						);
						// 
						// 						const latitude = result[1];
						// 						const longitude = result[0];


						const latitude = this.mapLatitude
						const longitude = this.mapLongitude;
						const destination = this.destination;
						console.log(2222);
						uni.openLocation({
							// geocode:'true',
							name: destination,
							address: 'lallaa大街',
							latitude: latitude,
							longitude: longitude,
							success: function() {
								console.log('success');
							}
						});

						// uni.chooseLocation({
						// 	success: function(res) {
						// 		console.log('位置名称：' + res.name);
						// 		console.log('详细地址：' + res.address);
						// 		console.log('纬度：' + res.latitude);
						// 		console.log('经度：' + res.longitude);
						// 	}
						// });
					},
					fail: (res) => {
						console.log(res)
					}
				});
			}

		},
	
	components: {
		Navbar,
	},
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
	
	.mapContent {
		padding-top: 160upx;
		/* height: 500upx; */
		/* position: fixed; */
	}
	
	.logoContent {
		position: fixed;
		z-index: 99;
		width: 100%;
	}

	.logo {
		width: 100%;
		height: 200upx;
	}
	
	
	.showLocation{
		display: flex;
		flex-direction: row;
		
		padding: 30upx;
		
	}
	
	.showLocationLogo {
		width: 20%;
		text-align: right;
		padding: 10upx;
	}
	
	.showLocationLogo image{
		width: 120upx;
		height: 120upx;
	}
	
	.showLocationText {
		line-height: 1.5;
		width: 80%;
		margin-left: 20upx;
		margin-right: 30upx;
		border-bottom: 1.5px solid #959293;
	}
	
	.LocationName {
		font-size: 40upx;
	}
</style>
