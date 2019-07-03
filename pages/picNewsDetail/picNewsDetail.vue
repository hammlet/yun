<template>
	<view class="detailPage">
		<view class="detailTitle">标题</view>
		<view class="detailTimeContent">
			<view class="detailAutor">平台</view>
			<view class="detailTime">时间</view>
		</view>
		<view class="detailText">内容</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			console.log(option.id); //打印出上个页面传递的参数。
			this.urlId = option.id
		},

		data() {
			return {
				urlId: '',


				newsDeail: [{
						id: 1,
						title: '中共河口区纪委监委机关成立党员大会召开',
						autor: '新华社',
						time: '2019-2-21',
						newsText: ''
					},

					{
						id: 2,
						title: '中国共产党东营市河口区纪委监委机关委员会成立',
						autor: '新华社',
						time: '2019-3-21',
						newsText: ''
					},

					{
						id: 3,
						title: '市督导组来我区督察中央生态环境保护监督整改工作',
						autor: '新华社',
						time: '2019-7-1',
						newsText: ''
					},

					{
						id: 4,
						title: '中共河口区纪委监委机关成立党员大会召开',
						autor: '新华社',
						time: '2019-7-4',
						newsText: ''
					},

					{
						id: 5,
						title: '山东河口蓝色经济开发区招商引资政策',
						autor: '新华社',
						time: '2019-3-7',
						newsText: ''
					},

					{
						id: 6,
						title: '"双招双引"培育新功能推动园区高质量发展',
						autor: '新华社',
						time: '2019-4-7',
						newsText: ''
					},
					{
						id: 7,
						title: '河口区招商引资优惠奖励十条',
						autor: '新华社',
						time: '2019-5-7',
						newsText: ''
					},

				]
			}
		},

		components: {

		},

		methods: {
			onNavigationBarButtonTap(e) {
				console.log("share")
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
	}

	.detailAutor {
		/* width: 30%; */
		text-align: left;
	}

	.detailTime {
		margin-left: 20upx;
		/* width: 70%; */
		text-align: left;
		color:#cccccc;

	}

	.detailText {
		padding: 20upx;
		font-size: 24upx;
	}
</style>
