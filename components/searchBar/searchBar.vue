<template>
	<view class="messagePage">
		<Navbar/>
		<view class="messageContent">
			<view class="searchContent uni-form-item uni-column">
				<input class="serachBar" confirm-type="search" cursor="20px" focus placeholder="搜索" @confirm="search()" v-model="searchData"/>
				<image class="searchBarLogo" src="../../static/search/searchbar.png" mode=""></image>
			</view>
			{{searchData}}
		</view>

	</view>
</template>

<script>
	import Navbar from '../../components/navbar/navbar.vue'
	
	export default {
		data() {
			return {
				searchData:''
			}
		},
		components:{
			Navbar,
		},
		
		methods: {
			search(){
				console.log("搜！");
				this.searchData = '';
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
		/* background-color: red; */
	}


	.messageContent {
		padding-top: 160upx;
	}

	.searchContent {
		position: relative;
		height: 150upx;
		background-color: red;
		padding: 50upx 50upx 50upx 50upx;
	}

	.serachBar {
		height: 70upx;
		background-color: #CCCCCC;
		padding: 10upx 10upx 10upx 60upx;
		border-radius: 5px;
	}
	
	.searchBarLogo {
		position: absolute;
		bottom:40upx;
		left:55upx;
		height:50upx;
		width:50upx
	}
</style>
