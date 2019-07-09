<template>
	<view class="messageDetailContent">
		<view class="messageFrom">{{messageDetail[0].autor}}</view>
		
		<view class="messageTextContent">
			<view class="messageLogo">
				<image :src="messageDetail[0].logo" mode=""></image>
			</view>
			<view class="messageText">{{messageDetail[0].text}}</view>
		</view>
		<view class="messageDateContent">
			<view class="messageDateLogo"></view>
			<view class="messageDate">{{messageDetail[0].date}}</view>
		</view>
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
				urlId:'',
				
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
		methods: {
			
		},
		
		computed: {
			messageDetail() {
				return this.message.filter(item=>{
					return this.urlId == item.id
				})
			}
		},
	}
</script>

<style>
	.messageDetailContent {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 15upx 30upx 15upx 30upx;
	}
	
	.messageFrom {
		text-align: center;
		font-size: 40upx;
		font-weight: bold;
		padding-bottom: 20upx;
		border-bottom: 1px solid #cccccc;
	}
	
	.messageTextContent {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 30upx;
	}
	
	.messageLogo {
		width: 20%;
	}
	
	.messageLogo image {
		width: 100upx;
		height: 100upx;
	}
	
	.messageText {
		width: 80%;
		padding: 15upx;
		font-size: 32upx;
		border: 2px solid #048ABF;
		border-radius: 10px;
	}
	
	.messageDateContent {
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		margin-top: 15upx;
	}
	
	.messageDateLogo {
		width: 20%;
	}
	
	.messageDate {
		width: 80%;
	}
	
</style>
