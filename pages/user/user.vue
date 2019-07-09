<template>
	<view>
		<Navbar />
		
		<view class="userBg">
			<image src="../../static/icon/user/userBackground.png" mode=""></image>
		</view>		
		<view class="noLoginContent">
			<view class="noLogin" @click="gotoLogin">未登录</view>
		</view>

		<view class="userGroup">
			<view class="userGroupTitle">我的应用</view>
			<view class="userFlex">
				<view class="userGroupLogoContent" v-for="(item ,index) in userApp" :key="index">
					<image class="userGroupLogo" :src="item.pic"></image>
					<view class="userGroupText">{{item.title}}</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	
	import Navbar from '../../components/navbar/navbar.vue'
	// import SwiperMade from '../../components/swiperMade/swiperMade.vue'
	export default {
		data() {
			return {
				userApp: [{
						title: '我的积分',
						pic:'../../static/icon/user/jifen.png'
					},

					{
						title: '我的活动',
						pic:'../../static/icon/user/huodong.png'
					},
					{
						title: '未参加活动',
						pic:'../../static/icon/user/huodong2.png'
					}
				],

			}
		},
		methods: {
			//登录页面
			gotoLogin() {
				console.log('login page');
				uni.navigateTo({
					url: '/pages/user/login/login'
				})
			}

		},
		components: {
			Navbar,
			// SwiperMade
		},
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
	
	.userBg {
		padding: 180upx 20upx 20upx 20upx;
		/* border:1px solid red; */
		
	}
	
	.userBg image {
		width: 100%;
		border:1px solid #eeeeee;
		border-radius: 15px;
		box-shadow: 0px 6px 5px 0px #C3C3C4;

	}
	
	.noLoginContent {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.noLogin {
		/* border: 2px solid #048ABF; */
		background-color: #048ABF;
		color:#FFFFFF;
		display: inline-block;
		padding: 15upx 25upx 15upx 25upx;
		font-size: 36upx;
		font-weight: bold;
		border-radius: 10px;
	}

	.logoContent {
		position: fixed;
		z-index: 99;
		width: 100%;
	}

	.logo {
		width: 100%;
		height: 200upx;
	}

	.swiper2 {
		padding-top: 220upx;
	}

	.userGroup {
		margin: 40upx;
		padding: 20upx;
	}

	.userFlex {
		display: flex;
		flex-direction: row;
	}

	.userGroupLogoContent {
		margin-top: 50upx;
		margin-right: 50upx;
		text-align: center;
	}
	
	.userGroupTitle {
		font-size: 36upx;
		font-weight: bold;
	}

	.userGroupLogo {
		width: 100upx;
		height: 100upx;
		margin-bottom: 15upx;
	}
	
	.userGroupText {
		font-size: 36upx;
		color:#737373;
	}
</style>
