<template>
	<view class="detailPage">
		<!-- {{newsDetail}} -->
		<view class="detailTitle">{{newsDetail.title}}</view>
		<view class="detailTimeContent">
			<view class="detailAutor">{{newsDetail.autor}}</view>
			<view class="detailTime">{{newsDetail.time}}</view>
		</view>
		<view v-html="newsDetail.text" class="detailText">{{newsDetail.text}}</view>
	</view>
</template>

<script>
	export default {
		
		

		data() {
			return {
				urlId: '',


				
				
			}
		},

		components: {

		},
		
		props:['news'],

		methods: {
			onNavigationBarButtonTap(e) {
				console.log("share")
			}
		},
		
		computed:{
			newsDetail(){
				return this.news[0]
			}
		}
	}
</script>

<style>
	.detailPag {
		background-color: red;
	}
	
	.detailTitle {
		font-size: 50upx;
		padding: 20upx;

	}

	.detailTimeContent {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 10upx;
		align-items: flex-end;
		border-bottom: 1px solid #cccccc;
	}

	.detailAutor {
		padding-left: 20upx;
		/* width: 30%; */
		text-align: left;
	}

	.detailTime {
		padding-left: 10upx;
		/* width: 70%; */
		text-align: left;
		color:#cccccc;

	}

	.detailText {
		padding: 20upx;
		font-size: 32upx;
		
	}
</style>
