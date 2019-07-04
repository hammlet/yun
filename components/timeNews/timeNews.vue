<template>

	<view >
		<view :class="[ {timeNewsGroupTest:item.id==1},'timeNewsGroup']" v-for="item in timeNewsText" :key="item.id" @click="gotoDetail(item.id)">
			<view class="timeNewsTime">
				<view class="timeNewsDate">
					<view class="newsDay">12</view>
					<view class="newsMonth">九月</view>
				</view>
			</view>
			<view class="timeNewsContent">
				<view :class="[{Top:item.id==1},'timeNewsTitle']">{{item.title}}</view>
				<view class="timeNewsText">{{item.simple}}</view>
				<!-- <u-parse :content="item.text"  class="timeNewsText"></u-parse> -->
			</view>
			<image v-show="item.id==1" class="addPic" src="/static/icon/add.png" mode=""></image>

		</view>

	</view>

</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	
	export default {
		data() {
			return {
				Top: '',
			};
		},

		props: ['timeNewsText'],

		components: {
			uParse,
		},

		computed: {
		
		},

		methods: {
			gotoDetail(id){
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
	.timeNewsGroupTest {
		position: relative;
		display: flex;
		flex: row;
		border: 1px solid #E2E0E1;
		padding: 15upx 10upx 15upx 20upx;
		margin-left: 30upx;
		margin-right: 60upx;

		box-shadow: 0px 0px 2px 3px #F1F1F1;
	}

	.timeNewsGroup {
		position: relative;
		display: flex;
		flex: row;
		/* border: 1px solid red; */
		padding: 15upx 10upx 15upx 20upx;
		margin-left: 30upx;
		margin-right: 60upx;
		
	}
	
	.timeNewsTitle {
		font-size: 26upx;
		color:#000000;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.timeNewsTime {
		width: 15%;
		border-right: 2px solid #5E5E5E;
	}
	
	.timeNewsText {
		color:#5E5E5E;
		height:40upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 24upx;
	}

	.timeNewsDate {
		text-align: center;
		padding: 10upx;
	}

	.timeNewsContent {
		padding: 0upx 30upx 0 30upx;
		width: 80%;
		line-height: 1.5;
		
	}

	.newsDay {
		font-size: 35upx;
		line-height: 0.9;
	}

	.newsMonth {
		font-size: 18upx;
	}

	.addPic {
		width: 30upx;
		height: 30upx;
		z-index: 999;
	}

	/* 动态class */
	.Top {
		color: #048ABF;
	}

	
</style>
