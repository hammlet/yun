<template>
	<view class="messagePage">
		<Navbar />
		<!-- <SearchBar/> -->

		<view class="searchContent">
			<view class="searchContent uni-form-item uni-column">
				<input class="serachBar" confirm-type="search" cursor="20px"  placeholder="搜索" v-model="searchData" />
				<image class="searchBarLogo" src="../../static/search/searchbar.png" mode=""></image>
			</view>
		</view>

		<view class="messageGroup">
			<view class="messageList" v-for="item in searchList" :key="item.id" @click="goMessageDeatil(item.id)">
				<view class="messageLogo">
					<image :src="item.logo" mode=""></image>
				</view>
				<view class="messageContent">
					<view class="messageAutor">{{item.autor}}</view>
					<view class="messageText">{{item.text}}</view>
				</view>
				<view class="messageDate">
					<view>{{item.date}}</view>

				</view>
			</view>
		</view>
		<!-- {{searchList}} -->
	</view>

	</view>
</template>

<script>
	import Navbar from '../../components/navbar/navbar.vue'
	// import SearchBar from '../../components/searchBar/searchBar.vue'
	export default {
		data() {
			return {

				searchData: '',


				message: [{
						id: 1,
						autor: '小目标',
						logo: '../../static/icon/message/fileBox.png',
						text: '并向居民宣传普及常见病、多发病预防知识和科学处',
						date: '2019-03-14'
					},
					{
						id: 2,
						autor: '您的发言',
						logo: '../../static/icon/message/cloud.png',
						text: '志愿者为义和镇寿光村居民现场提供心电图、血压',
						date: '2019-05-02'
					},
					{
						id: 3,
						autor: '新邮件',
						logo: '../../static/icon/message/mail.png',
						text: '抽血检测、彩超等检查服务，理方式，向居民认真解读医疗保',
						date: '2019-04-18'
					},
					{
						id: 4,
						autor: '小目标',
						logo: '../../static/icon/message/fileBox.png',
						text: '抽血检测、彩超等检查服务，理方式，向居民认真解读医疗保',
						date: '2019-04-18'
					},
					{
						id: 5,
						autor: '新邮件',
						logo: '../../static/icon/message/mail.png',
						text: '抽血检测、彩超等检查服务，理方式，向居民认真解读医疗保',
						date: '2019-04-18'
					}
				]
			}
		},
		components: {
			Navbar,
			// SearchBar,
		},

		computed: {
			searchList() {
				return this.message.filter(item => {
					return item.text.indexOf(this.searchData) != -1 || item.autor.indexOf(this.searchData) != -1
				})
			}
		},

		methods: {
			goMessageDeatil(id) {
				uni.navigateTo({
					// url: `/pages/picNewsDetail/picNewsDetail?id=${id}`
					// url: `/components/shareWindow/shareWindow?id=${id}`
					url: `/pages/messageDetail/messageDetail?id=${id}`

				})
			}
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
		height: 200upx;
		/* background-color: red; */
		padding: 100upx 20upx 50upx 20upx;
	}

	.serachBar {
		height: 90upx;
		background-color: #CCCCCC;
		padding: 10upx 10upx 10upx 60upx;
		border-radius: 5px;
	}

	.searchBarLogo {
		position: absolute;
		bottom: 30upx;
		left: 30upx;
		height: 50upx;
		width: 50upx
	}


	.messageGroup {
		margin-top: 100upx;
	}

	.messageList {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 20upx 40upx 20upx 40upx;

	}

	.messageLogo {
		width: 20%;

	}

	.messageLogo image {
		width: 80upx;
		height: 80upx;
	}

	.messageContent {
		width: 60%;
		line-height: 1.5;
		border-bottom: 1px solid #cccccc;
	}

	.messageAutor {
		font-size: 40upx;
		font-weight: bold;
	}

	.messageText {
		font-size: 30upx;
		color: #5E5E5E;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.messageDate {
		width: 20%;
		border-bottom: 1px solid #cccccc;
	}
</style>
