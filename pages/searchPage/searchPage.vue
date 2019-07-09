<template>
	<view>
		<view class="searchContent uni-form-item uni-column">
			<input class="serachBar" confirm-type="search" cursor="20px" placeholder="搜索" v-model="searchData" />
			<image class="searchBarLogo" src="../../static/search/searchbar.png" mode=""></image>
		</view>

		<view class="searchTextContentGroup">
			<view class="searchTextContent">
				<view class="searchDetailTitle">
					<view class="DetailTitle">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份</view>
					<view class="DetailTime">2018-03-21</view>
				</view>
			
				<view class="DetailText">
					集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchData:'',	
			}
		},

		onReady() {

		},

		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
		/* background-color: red; */
	}

	.searchContent {
		position: relative;
		height: 140upx;
		/* background-color: red; */
		padding: 20upx 20upx 20upx 20upx;
	}

	.serachBar {
		height: 90upx;
		background-color: #CCCCCC;
		/* padding: 10upx 10upx 10upx 60upx; */
		padding-left: 60upx;
		border-radius: 5px;
	}

	.searchBarLogo {
		position: absolute;
		bottom: 50upx;
		left: 30upx;
		height: 50upx;
		width: 50upx
	}


	.searchTextContentGroup {
		border-top: 1px solid #048ABF;
		padding-top: 20upx;
	}

	.searchTextContent {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20upx;
		border-bottom: 1px solid #cccccc;
		line-height: 1.7;
	}

	.searchDetailTitle {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.DetailTitle {
		width: 70%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 32upx;
		font-weight: bold;
	}

	.DetailTime {
		width: 30%;
		text-align: right;
	}

	.DetailText {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
