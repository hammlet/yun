<template>
	<view>
		<view class="logoContent">
			<image class="logo" src="http://photocdn.sohu.com/20130311/Img368359870.jpg"></image>
		</view>


		<view class="swiper2">
			<SwiperMade />
		</view>

		<view class="noLogin" @click="gotoLogin">未登录</view>

		<view class="userGroup">
			<view>我的应用</view>
			<view class="userFlex">
				<view class="userGroupLogoContent" v-for="(item ,index) in userApp" :key="index">
					<image class="userGroupLogo" src="../../static/logo.png"></image>
					<view>{{item.title}}</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import SwiperMade from '../../components/swiperMade/swiperMade.vue'
	export default {
		data() {
			return {
				userApp: [{
						title: '我的积分'
					},

					{
						title: '我的活动'
					},
					{
						title: '未参加活动'
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
			SwiperMade
		},
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
	
	.noLogin {
		border: 1px solid #008000;
		display: inline-block;
		padding: 10px;
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
	}

	.userGroupLogo {
		width: 100upx;
		height: 100upx;
		margin-bottom: 15upx;
	}
</style>
