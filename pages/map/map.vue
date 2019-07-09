<template>
	<view>
		<Navbar />
		<!-- 试验田 -->
		<view class="mapContentGroup">
			<view class="mapContent">
				<view class="page-body">
					<view class="page-section page-section-gap">
						<map style="width: 100%; height: 250px;" :latitude="latitude" :longitude="longitude" :markers="covers"
						 :include-points="covers" @markertap="loacalTitle" scale="11">

						</map>


						<!-- 搜索 -->
						<!-- <view class="searchContentMap">
							<view class="searchContent uni-form-item uni-column">
								<input class="serachBar" confirm-type="search" cursor="20px" placeholder="搜索" v-model="searchData" />
								<image class="searchBarLogo" src="../../static/search/searchbar.png" mode=""></image>
							</view>
						</view> -->

					</view>
				</view>
			</view>
		</view>
		<!-- 试验田 -->

		<scroll-view v-if="scrollShow" class="showLocationGroup" :scroll-top="scrollTop" scroll-y="true">
			<view class="showLocation" v-for="cover in coversAll" :key="cover.id">
				<view class="showLocationLogo">
					<image src="../../static/20190629154358.png" mode=""></image>
				</view>
				<view class="showLocationText">
					<view class="LocationName">{{cover.callout.content}}</view>
					<view>{多少}人</view>
				</view>

				<!-- 通过计算 id 等于 renderId 返回来的数据循环渲染 -->
				<!-- <view v-for="cover in coversAll" :key="cover.id"> -->
				<!-- {{cover.callout.content}} -->
				<view class="gotoLocation" @click="goMap(cover)">
					<image src="../../static/map/map.png" mode=""></image>
					<view>去这里</view>
				</view>
				<!-- </view> -->
			</view>
		</scroll-view>

		<scroll-view v-else class="showLocationGroup" :scroll-top="scrollTop" scroll-y="true">
			<view class="showLocation" v-for="cover in coversAllChange" :key="cover.id">
				<view class="showLocationLogo">
					<image src="../../static/20190629154358.png" mode=""></image>
				</view>
				<view class="showLocationText">
					<view class="LocationName">{{cover.callout.content}}</view>
					<view>{多少}人</view>
				</view>

				<!-- 通过计算 id 等于 renderId 返回来的数据循环渲染 -->
				<!-- <view v-for="cover in coversAll" :key="cover.id"> -->
				<!-- {{cover.callout.content}} -->
				<view class="gotoLocation" @click="goMap(cover)">
					<image src="../../static/map/map.png" mode=""></image>
					<view>去这里</view>
				</view>
				<!-- </view> -->
			</view>
		</scroll-view>
		<!-- <button @click="numberAlert(index)" v-for="(buttonNumber,index) in buttonNumbers" :key="index">{{buttonNumber.number}}</button> -->


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
		onLoad() {},
		mounted() {

		},
		data() {
			return {
				scrollShow: true,
				searchData: '',

				scrollTop: 0,
				sHeight: '',

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
					},
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
			coversAllChange() {
				return this.covers.filter(cover => cover.id === this.renderId)
			},

			coversAll() {
				return this.covers
			},
		},
		methods: {
			loacalTitle(e) {
				console.log('点击了气泡')
				console.log(e);
				console.log(e.detail.markerId);
				// this.localID = e.detail.markerId;
				this.renderId = e.detail.markerId;
				this.scrollShow =false;
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
					geocode: 'true',
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
							// address: 'lallaa大街',
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
	.searchtest {
		border: 1px solid red;
		position: absolute;
		top: 20upx
	}

	page {
		background-color: #FFFFFF;
	}

	.mapContentGroup {
		padding-top: 160upx;
	}

	.mapContent {
		width: 100%;
		/* position: fixed; */
		/* z-index: 999;	 */
	}

	.page-body {
		position: relative;
	}


	.showLocationGroup {
		padding-top: 20upx;
		height: calc(100vh - var(--window-bottom) - 250px - 200upx);

		/* #ifdef APP-PLUS */
		height: calc(100vh - 250px - 200upx);
		/* #endif  */
		;
	}

	.showLocation {
		display: flex;
		flex-direction: row;

		padding: 5upx;

	}

	.showLocationLogo {
		width: 20%;
		text-align: right;
		padding: 10upx;
	}

	.showLocationLogo image {
		width: 100upx;
		height: 100upx;
	}

	.showLocationText {
		line-height: 1.5;
		width: 55%;
		margin-left: 20upx;
		/* margin-right: 30upx; */
		border-bottom: 1px solid #959293;
	}

	.LocationName {
		font-size: 40upx;
	}

	.gotoLocation {
		width: 15%;
		border-bottom: 1px solid #959293;
	}
	
	.gotoLocation image {
		/* margin-top: 20upx; */
		width: 80upx;
		height: 80upx;
	}

	/* 搜索 */
	.searchContentMap {
		position: absolute;
		top: 500upx;
		left: 20upx;
		padding-top: 30upx;
	}

	.searchContent {
		position: relative;
		/* height: 140upx; */
		/* background-color: red; */
		/* padding: 50upx 20upx 20upx 20upx; */
		border: 1px solid #AFADAD;
		box-shadow: 0px 6px 5px 0px #C3C3C4;
		border-radius: 10px;
		overflow: hidden;
	}

	.serachBar {
		height: 90upx;
		background-color: #F2F1ED;
		/* padding: 10upx 10upx 10upx 60upx; */
		padding-left: 60upx;

	}

	.searchBarLogo {
		position: absolute;
		bottom: 20upx;
		left: 10upx;
		height: 50upx;
		width: 50upx
	}
</style>
