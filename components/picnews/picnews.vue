<template>
	<!-- index 新闻 -->
	<view class="homeNews">
		<view class="newsLogo">
			<!-- <image v-for="(pic, index) in newsP" :key="index" :src="pic.Files" mode=""></image> -->
			<view class="newsImageText" v-for="(pic, index) in newsPicNow" :key="index">
				<image class="newsPicPic" :src="pic.src" mode="">
				</image>

				<view class="picTitle" v-show="pic.id<=2">{{pic.title}}</view>
			</view>
		</view>

		<view class="newsGroup">
			<view class="newsText" v-for="(item ,index) in newsTextNow" :key="index" @click="goDeail(item.id)">
				<image class="newsPlay" src="../../static/icon/play.png" mode=""></image>

				<view class="news">{{item.title}}</view>
			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},

		props: ['newsText', 'newsPic'],
		methods: {

		},

		computed: {
			newsTextNow() {
				return this.newsText
			},
			newsPicNow(){
				return this.newsPic
			}
		},

		methods: {
			goDeail(id) {
				uni.navigateTo({
					// url: `/pages/picNewsDetail/picNewsDetail?id=${id}`
					// url: `/components/shareWindow/shareWindow?id=${id}`
					url: `/components/shareWindow/shareSimple/shareSimple?id=${id}`

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

	.newsImageText {
		position: relative;
	}

	.newsPicPic {
		margin-bottom: 20upx;
	}

	.picTitle {
		position: absolute;
		bottom: 20upx;
		width: 220upx;
		background-color: #111A34;
		opacity: 0.7;
		text-align: center;
		padding: 10upx 50upx 10upx 50upx;
		color: #FFFFFF;
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
