<template>

	<!-- <view>
		<view :class="[{borderAdd:clickAdd},'timeNewsGroup']"  @click="changeColor">
			<view class="timeNewsTime">
				<view class="timeNewsBoder" >
					<view class="newsDay">12</view>
					<view class="newsMonth">九月</view>
				</view>
			</view>
			<view class="timeNewsContent">
				<view :class="[{Add:clickAdd},'timeNewsTitle']">title</view>
				<view class="timeNewsText">内容</view>
			</view>
			
				<image v-show="clickAdd" class="addPic" src="/static/icon/add.png" mode=""></image>
			
		</view>
		
		<view :class="[{borderAdd:clickAdd},'timeNewsGroup']"  @click="changeColor">
			<view class="timeNewsTime">
				<view class="timeNewsBoder" >
					<view class="newsDay">12</view>
					<view class="newsMonth">九月</view>
				</view>
			</view>
			<view class="timeNewsContent">
				<view :class="[{Add:clickAdd},'timeNewsTitle']">title</view>
				<view class="timeNewsText">内容</view>
			</view>
			
				<image v-show="clickAdd" class="addPic" src="/static/icon/add.png" mode=""></image>
			
		</view>
	</view> -->
	<view>
		<view class="timeNewsGroupTest">
			<view class="timeNewsTime">
				<view class="timeNewsBoder">
					<view class="newsDay">12</view>
					<view class="newsMonth">九月</view>
				</view>
			</view>
			<view class="timeNewsContent">
				<view class="timeNewsTitle Add">title</view>
				<view class="timeNewsText">内容</view>
			</view>
			<image class="addPic" src="/static/icon/add.png" mode=""></image>
		</view>

		<view class="timeNewsGroup">
			<view class="timeNewsTime">
				<view class="timeNewsBoder">
					<view class="newsDay">12</view>
					<view class="newsMonth">九月</view>
				</view>
			</view>
			<view class="timeNewsContent">
				<view class="timeNewsTitle">title</view>
				<view class="timeNewsText">内容</view>
			</view>

			<image v-show="clickAdd" class="addPic" src="/static/icon/add.png" mode=""></image>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clickAdd: false,
			};
		},

		methods: {
			changeColor() {
				this.clickAdd = !this.clickAdd;
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

	.timeNewsTime {
		width: 15%;
		border-right: 2px solid #5E5E5E;
	}

	.timeNewsBoder {
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
	.Add {
		color: #048ABF;
	}

	.borderAdd {
		border: 2px solid #000000;
	}
</style>
