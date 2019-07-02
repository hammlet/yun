<template>
	<view class="messagePage">
		<Navbar/>
		<SearchBar/>

			<view class="messageList">
				2314
			</view>
		</view>

	</view>
</template>

<script>
	import Navbar from '../../components/navbar/navbar.vue'
	import SearchBar from '../../components/searchBar/searchBar.vue'
	export default {
		data() {
			return {

			}
		},
		components:{
			Navbar,
			SearchBar,
		},
		
		methods: {

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
	
	


	.messageList {
		display: block;
		text-align: center;
	}
</style>
