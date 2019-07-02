<template>
	<view>
		<Navbar />
		<PicNews />
		<TimeNews />
	</view>
</template>

<script>
	import Navbar from '../../components/navbar/navbar.vue'
	import PicNews from '../../components/picnews/picnews.vue'
	import TimeNews from '../../components/timeNews/timeNews.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		
		components: {
			Navbar,
			PicNews,
			TimeNews
		},
	}
</script>

<style>
	
	page {
		background-color: #FFFFFF;
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
	
	.actionContent {
		padding-top: 200upx;
	}
</style>
