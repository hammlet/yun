<template>
	<!-- index 新闻 -->
	<view class="homeNews">
		<view class="newsLogo">
			<image v-for="(pic, index) in newsP" :key="index" :src="pic.Files" mode=""></image>
		</view>

		<view class="newsGroup">
			<view class="newsText" v-for="(item ,index) in newslist" :key="index">
				<image class="newsPlay" src="../../static/icon/play.png" mode=""></image>
				<view class="news">{{item}}</view>
			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				newslist: ['123313131313131', '吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱吱',
					'333333333333333333333', '44444444444444444', '55555555555555555', '6666666666666666666', '7777777777777777'
				]
			}
		},
		
		props:['newsPic'],
		methods: {

		},
		
		computed:{
			newsP(){
				return this.newsPic
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
