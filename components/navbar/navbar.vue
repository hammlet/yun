<template>
	<view class="logoContent">
		<view>
			<image class="navLogo" src="../../static/20190629154358.png" mode=""></image>
		</view>

		<view class="navTitle">
			河口新时代文明实践智慧平台
		</view>

		<view class="search" @click="gotoSearch">
			<image class="navSearch" src="../../static/icon/search.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			gotoSearch() {
				uni.navigateTo({
					url: `/pages/searchPage/searchPage`,
				})
			}
		}
	}
</script>

<style>
	.navLogo {
		width: 80upx;
		height: 80upx;
	}

	.navSearch {
		width: 40upx;
		height: 40upx;
		margin-top: 10upx;

	}

	/deep/ uni-image>img {
		opacity: 1;
	}

	.navTitle {
		color: #FFFFFF;
		font-size: 40upx;
	}

	.logoContent {
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 160upx;
		background-color: #048ABF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 20upx 0 20upx;
	}
</style>
