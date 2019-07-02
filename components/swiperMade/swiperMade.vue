<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" previous-margin="15px" next-margin="15px" indicator-active-color="#048ABF" indicator-color="#FFFFFF" :circular="true">
                        <swiper-item v-for="(pic ,index) in swiperP" :key="index">
                            <image class="swiperPicWidth" :src="pic.Files" mode="widthFix"></image>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
		 
		
    </view>
</template>

<script>
	export default {
    data() {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
			
			// swiperP:this.swiperPic
			
        }
    },
	computed:{
		swiperP(){
			return this.swiperPic
		}
	},
	props:['swiperPic'],
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        }
    }
}
</script>

<style>
	.swiperPicWidth {
		
		/* height:100%; */
		display: block;
		margin: 0 auto;
		width: 96%;
		border-radius: 10px;
		/* height: 400px; */
		box-shadow: 0px 6px 5px 0px #C3C3C4;	
	}
	
	.uni-padding-wrap {
		padding: 20upx 0 0upx 0;
		/* background-color: red; */
		/* height: 500upx; */
	}
	
	swiper {
		height: 371upx;
		
	}
	
 
</style>
