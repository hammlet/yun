<template>
	<view>
		<view class="messageFrom"></view>
		<view class="messageDate"></view>
		<view class="messageText">
			<view class="messageLogo"></view>
			<view class="messageText"></view>
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

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
