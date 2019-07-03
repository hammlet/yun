<template>
	<view class="content">
		<Navbar/>
		<view class="tabs">
			<Tabs :TabList="TabList" :currentTab="current" @tabs="tabsChange">
				<TabPane>
					<SwiperMade :swiperPic="swiperPic" />
					<PicNews :newsPic="newsPic" />
					<TimeNews />
				</TabPane>
				<TabPane>
					<view>2</view>
				</TabPane>
				<TabPane>
					<view>3</view>
				</TabPane>
				<TabPane>
					<view>4</view>
				</TabPane>
				<TabPane>
					<view>5</view>
				</TabPane>
				<TabPane>
					<view>6</view>
				</TabPane>
			</Tabs>
		</view>

	</view>
</template>

<script>
	import Navbar from '../../components/navbar/navbar.vue'
	import Tabs from '../../components/tabs/tabs.vue'
	import TabPane from '../../components/tabs/tabPane.vue'
	import SwiperMade from '../../components/swiperMade/swiperMade.vue'
	import PicNews from '../../components/picnews/picnews.vue'
	import TimeNews from '../../components/timeNews/timeNews.vue'

	export default {
		data() {
			return {
				title: 'Hello',
				TabList: ['信息前沿', '文化服务', '普法服务', '文艺服务'],
				current: 0,
				swiperPic: [],
				newsPic:[],
			}
		},

		components: {
			Navbar,
			Tabs,
			TabPane,
			SwiperMade,
			PicNews,
			TimeNews
		},

		onLoad() {
			uni.request({
				url: this.Api + '/api/Pic/GetAll',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				data: {
					"systemcode": "localhost"
				},
				dataType: 'json', //直接做了一次json.parse
				success: (res) => {
					console.log(res.data);
					// result = JSON.parse(res.data) 
					this.swiperPic = res.data;

				}
			});
			
			uni.request({
				url: this.Api + '/api/news/getall',
				method: 'POST',
				header: {
					'content-type': 'application/json'
				},
				data: {
					"systemcode": "localhost"
				},
				dataType: 'json', //直接做了一次json.parse
				success: (res) => {
					console.log(res.data);
					// result = JSON.parse(res.data) 
					this.newsPic = res.data;
			
				}
			});
		},

		computed: {

		},
		methods: {
			tabsChange(index) {
				this.current = index
			},

			// 试验田
		}
	}
</script>

<style>
	page {
		/* background-color: #FFFFFF; */
	}
	/* nav*/
	
	

	/* .logo {
		width: 100%;
		height: 200upx;
	} */
	
	/* tabs */
	.tabs {
		padding-top: 78upx;
		position: fixed;
		width: 100%;
		padding-bottom: 200upx;
		background-color: #FFFFFF;
		padding-bottom:170upx;
	}

	/deep/ .tabs .active-switch .active-item .item {
		font-family: Microsoft YaHei;
		font-size: 32upx;
		/* font-weight: bold;	 */
	}
	
	
</style>
