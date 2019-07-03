<template>
	<view v-if="show" class="mask" @click="toggleMask" @touchmove.stop.prevent="stopPrevent"
		:style="{backgroundColor: backgroundColor}"
	>
		<view 
			class="mask-content"
			@click.stop.prevent="stopPrevent"
			:style="[{
				height: config.height, 
				transform: transform
			}]"
		>
			<scroll-view class="view-content" scroll-y>
				<view class="share-header">
					分享到
				</view>
				<view class="share-list">
					<view 
						v-for="(item, index) in shareList" :key="index"
						class="share-item" 
						@click="shareToFriend(item.type)"
					>
						<image :src="item.icon" mode=""></image>
						<text>{{item.text}}</text>
					</view>
				</view>
			</scroll-view>
			<view class="bottom b-t" @click="toggleMask">取消分享</view>
		</view>
	</view>
</template>

<script>
	var strShareUrl = "https://m3w.cn/zhishidao"
	var strShareTitle = "知识岛-企业一站式创业服务平台"
	var strShareSummary = "中国商标网备案代理机构,提供商标免费查询、商标注册、商标转让、版权登记、专利申请、贯标、软著申请、品牌保护、高新企业认证、科技项目、经信项目、专利评估融资管理等知识产权一站服务。"
	var strShareImageUrl = "https://wechat.zhishidao.com/static/image/share.png"
	
	export default {
		data() {
			return {
				transform: 'translateY(50vh)',
				timer: 0,
				backgroundColor: 'rgba(0,0,0,0)',
				show: false,
				config: {},
			};
		},
		props:{
			contentHeight:{
				type: Number,
				default: 0
			},
			//是否是tabbar页面
			hasTabbar:{
				type: Boolean,
				default: false
			},
			shareList:{
				type: Array,
				default: function(){
					return [];
				}
			}
		},
		created() {
			const height = uni.upx2px(this.contentHeight) + 'px';
			this.config = {
				height: height,
				transform: `translateY(${height})`,
				backgroundColor: 'rgba(0,0,0,.4)',
			}
			this.transform = this.config.transform;
		},
		methods:{
			toggleMask(){
				//防止高频点击
				if(this.timer == 1){
					return;
				}
				this.timer = 1;
				setTimeout(()=>{
					this.timer = 0;
				}, 500)
				
				if(this.show){
					this.transform = this.config.transform;
					this.backgroundColor = 'rgba(0,0,0,0)';
					setTimeout(()=>{
						this.show = false;
						this.hasTabbar && uni.showTabBar();
					}, 200)
					return;
				}
				
				this.show = true;
				//等待mask重绘完成执行
				if(this.hasTabbar){
					uni.hideTabBar({
						success: () => {
							setTimeout(()=>{
								this.backgroundColor = this.config.backgroundColor;
								this.transform = 'translateY(0px)';
							}, 10)
						}
					});
				}else{
					setTimeout(()=>{
						this.backgroundColor = this.config.backgroundColor;
						this.transform = 'translateY(0px)';
					}, 10)
				}
			},
			//防止冒泡和滚动穿透
			stopPrevent(){},
			//分享操作
			shareToFriend(type){
				console.log(`分享类型:${type}`);
				var strProvider="",strScene="";
				switch (type) {
					case 0:
						strProvider = "weixin"
						strScene = "WXSceneSession"
						break;
					case 1:
						strProvider = "weixin"
						strScene = "WXSenceTimeline"
						break;
					case 2:
						strProvider = "qq"
						break;
					case 3:
						uni.setClipboardData({
							data: strShareUrl,
							complete() {
								uni.showToast({
									title: "已复制到剪贴板"
								})
							}
						})
						break;
					case 4:
						plus.share.sendWithSystem({
							content: strShareUrl,
						})
						break;
				}
				if (strProvider!="") { //点击了0-3序号的这4个按钮
					uni.share({
						provider: strProvider,
						scene:strScene,
						type: strProvider=='qq' ? 1 : 0,
						href: strShareUrl,
						title: strShareTitle,
						summary: strShareSummary,
						imageUrl: strShareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					})
				}
				this.toggleMask();
			},
		}
	}
</script>

<style lang='scss'>
	.mask{
		position:fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display:flex;
		justify-content: center;
		align-items: flex-end;
		z-index: 998;
		transition: .3s;
		.bottom{
			position:absolute;
			left: 0;
			bottom: 0;
			display:flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 90upx;
			background: #fff;
			z-index: 9;
			font-size: $uni-font-size-base + 2upx;
			color: #333;
		}
	}
	
	.mask-content{
		width: 100%;
		height: 580upx;
		transition: .3s;
		background: #fff;
		&.has-bottom{
			padding-bottom: 90upx;
		}
		.view-content{
			height: 100%;
		}
	}
	.share-header{
		height: 110upx;
		font-size: $uni-font-size-base+2upx;
		color: #333;
		display:flex;
		align-items:center;
		justify-content: center;
		padding-top: 10upx;
		&:before, &:after{
			content: '';
			width: 240upx;
			heighg: 0;
			border-top: 1px solid #E4E7ED;
			transform: scaleY(.5);
			margin-right: 30upx;
		}
		 &:after{
			 margin-left: 30upx;
			 margin-right: 0;
		 }
	}
	.share-list{
		display:flex;
		flex-wrap: wrap;
	}
	.share-item{
		/* min-width: 33.33%; */
		min-width: 25%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 180upx;
		image{
			width: 80upx;
			height: 80upx;
			margin-bottom: 16upx;
		}
		text{
			font-size: $uni-font-size-base;
			color: $uni-text-color;
		}
	}
</style>
