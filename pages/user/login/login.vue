<template>
	<view>
		<cmd-nav-bar back title="用户登录" rightText="注册" @rightText="fnRegisterWin" font-color="#FFFFFF" background-color="#048ABF"></cmd-nav-bar>
		<cmd-page-body type="top">
			<view class="login">
				<!-- 上部分 start -->
				<view class="login-title">{{ status ? '手机快捷登录': '使用账号密码登录'}}</view>
				<view class="login-explain">{{ status ? '已注册用户可通过手机验证码直接登录': '未注册用户可通过点击右上角进行注册'}}</view>
				<!-- 上部分 end -->
				<!-- 手机表单登录 start -->
				
				<cmd-transition name="fade-up">
					<view v-if="status">
						<view class="login-phone">
							<cmd-input v-model="mobile.phone" type="number" focus maxlength="11" placeholder="请输入手机号"></cmd-input>
							<view class="login-phone-getcode" @tap="!safety.state ? fnGetPhoneCode() : ''">{{!safety.state&&'获取验证码'||(safety.time+' s')}}</view>
						</view>
						<view class="login-code">
							<cmd-input v-model="mobile.code" type="number" maxlength="6" placeholder="请输入短信验证码"></cmd-input>
						</view>
						<button class="btn-login"  :disabled="!loginMobile" @tap="fnLogin">登录</button>
					</view>
				</cmd-transition>
				
				<!-- #ifndef H5 -->
				<!-- <cmd-transition name="fade-up" v-if="status">
					<view class="login-phone">
						<cmd-input v-model="mobile.phone" type="number" focus maxlength="11" placeholder="请输入手机号"></cmd-input>
						<view class="login-phone-getcode" @tap="!safety.state ? fnGetPhoneCode() : ''">{{!safety.state&&'获取验证码'||(safety.time+' s')}}</view>
					</view>
					<view class="login-code">
						<cmd-input v-model="mobile.code" type="number" maxlength="6" placeholder="请输入短信验证码"></cmd-input>
					</view>
					<button class="btn-login" :class="loginMobile ? 'btn-login-active':''" :disabled="!loginMobile" hover-class="btn-login-hover"
					 @tap="fnLogin">登录</button>
				</cmd-transition> -->
				<!-- #endif -->
				<!-- 手机表单登录 end -->
				<!-- 账号表单登录 start -->
				<!-- #ifdef H5 -->
				<!-- <cmd-transition name="fade-up">
          <view v-if="!status">
            <view class="login-username">
              <cmd-input v-model="account.username" type="text" focus maxlength="26" placeholder="请输入账号"></cmd-input>
            </view>
            <view class="login-password">
              <cmd-input v-model="account.password" type="password" displayable maxlength="26" placeholder="请输入密码"></cmd-input>
            </view>
            <button class="btn-login" :class="loginAccount ? 'btn-login-active':''" :disabled="!loginAccount"
              hover-class="btn-login-hover" @tap="fnLogin">登录</button>
          </view>
        </cmd-transition> -->
				<!-- #endif -->
				<!-- #ifndef H5 -->
				<!-- <cmd-transition name="fade-up" v-if="!status">
          <view class="login-username">
            <cmd-input v-model="account.username" type="text" focus maxlength="26" placeholder="请输入账号"></cmd-input>
          </view>
          <view class="login-password">
            <cmd-input v-model="account.password" type="password" displayable maxlength="26" placeholder="请输入密码"></cmd-input>
          </view>
          <button class="btn-login" :class="loginAccount ? 'btn-login-active':''" :disabled="!loginAccount" hover-class="btn-login-hover"
            @tap="fnLogin">登录</button>
        </cmd-transition> -->
				<!-- #endif -->
				<!-- 账号表单登录 end -->
				<!-- 切换登录方式 -->
				<!-- <view class="login-mode" @tap="fnChangeStatus(false)">{{status ?	'账号密码登录' : '手机快捷登录'}}</view> -->
			</view>
		</cmd-page-body>
	</view>
</template>

<script>
	import cmdNavBar from "../../../components/loginUser/cmd-nav-bar/cmd-nav-bar.vue"
	import cmdPageBody from "../../../components/loginUser/cmd-page-body/cmd-page-body.vue"
	import cmdTransition from "../../../components/loginUser/cmd-transition/cmd-transition.vue"
	import cmdInput from "../../../components/loginUser/cmd-input/cmd-input.vue"

	export default {
		components: {
			cmdNavBar,
			cmdPageBody,
			cmdTransition,
			cmdInput
		},

		data() {
			return {
				// 账号登录部分数据
				account: {
					username: '',
					password: ''
				},
				usernameReg: /^[A-Za-z0-9]+$/,
				passwordReg: /^\w+$/,
				loginAccount: false,
				// 手机登录部分数据
				mobile: {
					phone: '',
					code: ''
				},
				phoneReg: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
				loginMobile: false,
				// 验证码
				safety: {
					time: 60,
					state: false,
					interval: ''
				},
				status: true // true手机登录,false账号登录
			};
		},

		watch: {
			/**
			 * 监听手机登录数值
			 */
			mobile: {
				handler(newValue) {
					if (this.phoneReg.test(newValue.phone) && newValue.code.length === 6) {
						this.loginMobile = true;
					} else {
						this.loginMobile = false;
					}
				},
				deep: true
			},
			/**
			 * 监听账号登录数值
			 */
			account: {
				handler(newValue) {
					if ((this.usernameReg.test(newValue.username) && newValue.username.length >= 8) && (this.passwordReg.test(
							newValue.password) && newValue.password.length >= 8)) {
						this.loginAccount = true;
					} else {
						this.loginAccount = false
					}
				},
				deep: true
			}
		},

		methods: {
			/**
			 * 登录按钮点击执行
			 */
			fnLogin() {
				if (this.status) {
					console.log(JSON.stringify(this.mobile));
				} else {
					console.log(JSON.stringify(this.account));
				}
			},
			/**
			 * 获取验证码
			 */
			fnGetPhoneCode() {
				if (this.phoneReg.test(this.mobile.phone)) {
					uni.showToast({
						title: "正在发送验证码",
						icon: "loading",
						success: () => {
							// 成功后显示倒计时60s后可在点击
							this.safety.state = true;
							// 倒计时
							this.safety.interval = setInterval(() => {
								if (this.safety.time-- <= 0) {
									this.safety.time = 60;
									this.safety.state = false;
									clearInterval(this.safety.interval);
								}
							}, 1000);
							uni.showToast({
								title: "发送成功",
								icon: "success"
							})
						}
					})
				} else {
					uni.showToast({
						title: "手机号不正确",
						icon: "none"
					})
				}
			},
			/**
			 * 改变登录方式状态 reset作为重置标识
			 */
			fnChangeStatus(reset) {
				// 手机登录部分
				this.mobile = {
					phone: '',
					code: ''
				}
				this.loginMobile = false
				// 账号登录部分
				this.account = {
					username: '',
					password: ''
				}
				this.loginAccount = false
				// 验证码时间状态还原
				clearInterval(this.safety.interval);
				this.safety.time = 60;
				this.safety.state = false;
				if (!reset) {
					// 可以延迟3毫秒后切换
					this.status = !this.status;
				}
			},
			/**
			 * 跳转注册页面
			 */
			fnRegisterWin() {
				uni.navigateTo({
					url: "/pages/user/register/register"
				})
				/**
				 * 改变状态重置，跳转不会摧毁实例
				 */
				this.fnChangeStatus(true);
			}
		},

		beforeDestroy() {
			/**
			 * 关闭页面清除轮询器
			 */
			clearInterval(this.safety.interval);
		}
	}
</script>

<style>
	.login {
		margin-top: 56upx;
		margin-right: 72upx;
		margin-left: 72upx;
	}

	.login-title {
		font-size: 56upx;
		font-weight: 500;
	}

	.login-explain {
		font-size: 28upx;
		/* color: #9E9E9E; */
		color:#048ABF;
	}

	.login-phone {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2upx #dedede solid;
		margin-top: 56upx;
		margin-bottom: 40upx;
	}

	.login-phone-getcode {
		color: #048ABF;
		text-align: center;
		min-width: 140upx;
	}

	.login-code {
		border-bottom: 2upx #dedede solid;
	}

	.login-username {
		margin-top: 56upx;
		margin-bottom: 40upx;
		border-bottom: 2upx #dedede solid;
	}

	.login-password {
		border-bottom: 2upx #dedede solid;
	}

	.btn-login {
		margin-top: 50upx;
		border-radius: 10px;
		/* font-size: 16px; */
		/* color: #fff; */
		/* background: linear-gradient(to right, #88a1f9, #9ac6ff); */
		background-color: #048ABF !important;
		color:#FFFFFF !important;
	}

	/* .btn-login-active {
		background: linear-gradient(to right, #365fff, #36bbff);
	} */

/* 	.btn-login-hover {
		background: linear-gradient(to right, #365fdd, #36bbfa);
	} */


	.login-mode {
		text-align: center;
		margin-top: 32upx;
	}
</style>
