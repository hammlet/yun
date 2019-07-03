<template>
	<!-- index 新闻 -->
	<view class="homeNews">
		<view class="newsLogo">
			<image v-for="(pic, index) in newsP" :key="index" :src="pic.Files" mode=""></image>
		</view>

		<view class="newsGroup">
			<view class="newsText" v-for="(item ,index) in newslist" :key="index" @click="goDeail(item.id)">
				<image class="newsPlay" src="../../static/icon/play.png" mode=""></image>
				
				<view class="news">{{item.title}}</view>
			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				newslist: [{
						id: 1,
						title: '中共河口区纪委监委机关成立党员大会召开',
					},

					{
						id: 2,
						title: '中国共产党东营市河口区纪委监委机关委员会成立',
					},
					{
						id: 3,
						title: '市督导组来我区督察中央生态环境保护监督整改工作',
					},
					{
						id: 4,
						title: '中共河口区纪委监委机关成立党员大会召开',
					},
					{
						id: 5,
						title: '山东河口蓝色经济开发区招商引资政策',
					},
					{
						id: 6,
						title: '"双招双引"培育新功能推动园区高质量发展',
					},
					{
						id: 7,
						title: '河口区招商引资优惠奖励十条',
					},
				]
			}
		},

		props: ['newsPic'],
		methods: {

		},

		computed: {
			newsP() {
				return this.newsPic
			}
		},

		methods: {
			goDeail(id) {
				uni.navigateTo({
					// url: `/pages/picNewsDetail/picNewsDetail?id=${id}`
					url: `/components/shareWindow/shareWindow?id=${id}`
				});
			}
		}
	}
</script>

<style>
	.homeNews {
		display: flex;
		flex-direction: row;
		padding: 20upx;
		background-color: #ffffff;
	}

	.newsLogo {
		width: 35%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 10upx;
	}

	.newsLogo image {
		width: 220upx;
		height: 210upx;
	}

	.newsGroup {
		width: 65%;
		padding: 20upx 20upx 0 20upx;
	}

	.newsText {
		padding: 15upx 30upx 15upx 10upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;



		/* padding: 20upx; */
		/* display: flex; */
		/* flex-direction:column; */
		/* justify-content:space-between; */
		/* color:#000000; */
	}

	.newsPlay {
		width: 25upx;
		height: 25upx;
		margin-right: 20upx;
	}

	.news {
		display: inline-block;

	}
</style>
