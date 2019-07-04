<template>
	<view class="share">
		<NewsDetail :news="news"/>
	</view>
</template>

<script>
	// #ifdef APP-PLUS
	// 如下为分享内容定义，可根据业务需求自行定义
	var strShareUrl = "https://uniapp.dcloud.io"
	var strShareTitle = "跨端神器uni-app，开发一次，App、小程序、H5全覆盖"
	var strShareSummary = "iOS、Android、H5、微信/支付宝/百度小程序，一套代码全覆盖"
	var strShareImageUrl = "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"

	//以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心
	var screenWidth = plus.screen.resolutionWidth
	//以360px宽度屏幕为例，上下左右边距及2排按钮边距留25像素，图标宽度55像素，同行图标间的间距在360宽的屏幕是30px，但需要动态计算，以此原则计算4列图标分别的left位置
	//图标下的按钮文字距离图标5像素，文字大小12像素
	//底部取消按钮高度固定为44px
	//TODO 未处理横屏和pad，这些情况6个图标应该一排即可
	var margin = 25,
		iconWidth = 55,
		icontextSpace = 5,
		textHeight = 12
	var left1 = margin / 360 * screenWidth
	var iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
	if (iconSpace <= 5) { //屏幕过窄时，缩小边距和图标大小，再算一次
		margin = 15
		iconWidth = 40
		left1 = margin / 360 * screenWidth
		iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
	}
	var left2 = left1 + iconWidth + iconSpace
	var left3 = left1 + (iconWidth + iconSpace) * 2
	var left4 = left1 + (iconWidth + iconSpace) * 3
	var top1 = left1
	var top2 = top1 + iconWidth + icontextSpace + textHeight + left1
	// 	console.log("screenWidth: " + screenWidth + " ;height: " + plus.screen.resolutionHeight);
	// 	console.log("left1: " + left1);
	// 	console.log("iconSpace: " + iconSpace);
	var nvMask = new plus.nativeObj.View("nvMask", { //先创建遮罩层
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.2)'
	});
	nvMask.addEventListener("click", function() { //处理遮罩层点击
		nvMask.hide();
		nvImageMenu.hide();
	})
	var nvImageMenu = new plus.nativeObj.View("nvImageMenu", { //创建底部图标菜单
		bottom: '0px',
		left: '0px',
		height: '264px',
		width: '100%',
		backgroundColor: 'rgb(255,255,255)'
	});
	//绘制底部图标菜单的内容
	nvImageMenu.draw([{
			tag: 'rect', //菜单顶部的分割灰线
			color: '#e7e7e7',
			position: {
				top: '0px',
				height: '1px'
			}
		},
		{
			tag: 'font',
			id: 'sharecancel', //底部取消按钮的文字
			text: '取消分享',
			textStyles: {
				size: '14px'
			},
			position: {
				bottom: '0px',
				height: '44px'
			}
		},
		{
			tag: 'rect', //底部取消按钮的顶部边线
			color: '#e7e7e7',
			position: {
				bottom: '45px',
				height: '1px'
			}
		},
		{
			tag: 'img',
			id: 'imgwechatfriend',
			src: '/static/sharemenu/wechatfriend.png',
			position: {
				top: top1,
				left: left1,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontwechatfriend',
			text: '微信好友',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left1,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgwechatmoments',
			src: '/static/sharemenu/wechatmoments.png',
			position: {
				top: top1,
				left: left2,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontwechatmoments',
			text: '微信朋友圈',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left2 - 2.5,
				width: iconWidth + 5,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgweibo',
			src: '/static/sharemenu/weibo.png',
			position: {
				top: top1,
				left: left3,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontweibo',
			text: '微博',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left3,
				width: iconWidth,
				height: textHeight
			}
		},
		{
			tag: 'img',
			id: 'imgqq',
			src: '/static/sharemenu/qq.png',
			position: {
				top: top1,
				left: left4,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontqq',
			text: 'QQ',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top1 + iconWidth + icontextSpace,
				left: left4,
				width: iconWidth,
				height: textHeight
			}
		},
		// {
		// 	tag: 'img',
		// 	id: 'imgcopyurl',
		// 	src: '/static/sharemenu/copyurl.png',
		// 	position: {
		// 		top: top2,
		// 		left: left1,
		// 		width: iconWidth,
		// 		height: iconWidth
		// 	}
		// },
		// {
		// 	tag: 'font',
		// 	id: 'fontcopyurl',
		// 	text: '复制',
		// 	textStyles: {
		// 		size: textHeight
		// 	},
		// 	position: {
		// 		top: top2 + iconWidth + icontextSpace,
		// 		left: left1,
		// 		width: iconWidth,
		// 		height: textHeight
		// 	}
		// },
		{
			tag: 'img',
			id: 'imgmore',
			src: '/static/sharemenu/more.png',
			position: {
				top: top2,
				left: left1,
				width: iconWidth,
				height: iconWidth
			}
		},
		{
			tag: 'font',
			id: 'fontmore',
			text: '更多',
			textStyles: {
				size: textHeight
			},
			position: {
				top: top2 + iconWidth + icontextSpace,
				left: left1,
				width: iconWidth,
				height: textHeight
			}
		},
		//如果想要增加更多按钮，请在这里继续添加，第二列还有2个空位
	])
	nvImageMenu.addEventListener("click", function(e) { //处理底部图标菜单的点击事件，根据点击位置触发不同的逻辑
		// console.log("click menu"+JSON.stringify(e));
		if (e.screenY > plus.screen.resolutionHeight - 44) { //点击了底部取消按钮
			nvMask.hide();
			nvImageMenu.hide();
		} else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5) {
			//屏幕左右边缘5像素及菜单顶部5像素不处理点击
		} else { //点击了图标按钮
			var iClickIndex = -1 //点击的图标按钮序号，第一个图标按钮的index为0
			var iRow = e.clientY < (top2 - (left1 / 2)) ? 0 : 1
			var iCol = -1
			if (e.clientX < (left2 - (iconSpace / 2))) {
				iCol = 0
			} else if (e.clientX < (left3 - (iconSpace / 2))) {
				iCol = 1
			} else if (e.clientX < (left4 - (iconSpace / 2))) {
				iCol = 2
			} else {
				iCol = 3
			}
			if (iRow == 0) {
				iClickIndex = iCol
			} else {
				iClickIndex = iCol + 4
			}
			console.log("点击按钮的序号: " + iClickIndex);
			if (iClickIndex >= 0 && iClickIndex <= 4) { //处理具体的点击逻辑，此处也可以自行定义逻辑。如果增减了按钮，此处也需要跟着修改
				var strProvider = "",
					strScene = ""
				switch (iClickIndex) {
					case 0:
						strProvider = "weixin"
						strScene = "WXSceneSession"
						break;
					case 1:
						strProvider = "weixin"
						strScene = "WXSenceTimeline"
						break;
					case 2:
						strProvider = "sinaweibo"
						break;
					case 3:
						strProvider = "qq"
						break;
						// case 4:
						// 	uni.setClipboardData({
						// 		data: strShareUrl,
						// 		complete() {
						// 			uni.showToast({
						// 				title: "已复制到剪贴板"
						// 			})
						// 		}
						// 	})
						// 	break;
					case 4:
						plus.share.sendWithSystem({
							content: strShareUrl,
						})
						break;
				}
				if (strProvider != "") { //点击了0-3序号的这4个按钮
					console.log('share!!!!')
					uni.share({
						provider: strProvider,
						scene: strScene,
						type: 0,
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
			}
		}
	})
	/* nvImageMenu.addEventListener("touchstart", function(e) {
		if (e.screenY > (plus.screen.resolutionHeight - 44)) {
			//TODO 这里可以处理按下背景变灰的效果
		}
	})
	nvImageMenu.addEventListener("touchmove", function(e) {
		//TODO 这里可以处理按下背景变灰的效果
		if (e.screenY > plus.screen.resolutionHeight - 44) {}
	})
	nvImageMenu.addEventListener("touchend", function(e) {
		//TODO 这里可以处理释放背景恢复的效果
	})
	*/
	// #endif


	// 详情页
	import NewsDetail from 'pages/picNewsDetail/picNewsDetail.vue'

	export default {
		onReady() {
			console.log('传递'+ this.urlId)
		},

		onLoad(option) {
			console.log(option.id); //打印出上个页面传递的参数。
			this.urlId = option.id
		},

		data() {
			return {
				urlId:'',
				
				newsList: [{
						id: 1,
						autor: '新华社',
						title: '河口区美丽庭院创建活动如火如荼',
						autor: '新华社',
						time: '2019-4-21',
						text: `<p style="text-indent:45px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;letter-spacing:1px;background: white">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份，河口区各镇（街道）将“共建美丽庭院·助力乡村振兴”主题活动列入了各村“党员主题活动日”自选动作中。各镇、街道，区直部门单位积极行动，充分发挥党员的先锋带头作用，积极对接帮扶村，并结合实际开展工作，推动全区形成“美丽庭院”创建的良好氛围。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">&nbsp;</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇“绿野仙踪”乡村振兴示范片区积极行动，宣读《美丽庭院创建实施方案》，组织开展“党员率先垂范，签定承诺书”活动，集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动。各村党员积极签订承诺书，严格按照 “干净、整齐、舒适、漂亮”四有标准，改善家居环境，让庭院灵动美丽。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道</span>
</p>
<p style="text-indent:43px">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道组织全体党员参与主题活动，每月走进一户困难家庭或老年人家庭，开展美化庭院大扫除，包括院内及室内。党员领导干部、妇联执委带头签订创建美丽庭院承诺书，明确分工，责任到人，做到创建美丽庭院家家知晓，美丽庭院人人创建。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">六合街道</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">“创建一座美丽舒适的庭院，打造一个温馨宜居的家园。这是我们开展美丽庭院活动的初心和使命，也是我们参与乡村振兴战略的信心和承诺。”六合街道各村党员干部们带头许下“我践行，我承诺”的创建诺言，带动大家参与到美丽庭院的创建中来。</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">&nbsp;</span>
</p>
<p style="text-indent:203px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">区直部门单位</span>
</p>
<p>
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">河口公安分局、区畜牧局、区文旅局、区商务局等部门单位纷纷组织干部职工到下派帮扶村开展“共建美丽庭院 助力乡村振兴”志愿服务活动，赢得村民群众的一致好评。</span>
</p>
<p>
    <br/>
</p>`
					},

					{
						id: 2,
						title: '河口区招商引资优惠奖励十条 ',
						autor: '新华社',
						time: '2019-2-21',
						text: `<p style="text-indent:45px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;letter-spacing:1px;background: white">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份，河口区各镇（街道）将“共建美丽庭院·助力乡村振兴”主题活动列入了各村“党员主题活动日”自选动作中。各镇、街道，区直部门单位积极行动，充分发挥党员的先锋带头作用，积极对接帮扶村，并结合实际开展工作，推动全区形成“美丽庭院”创建的良好氛围。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">&nbsp;</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇“绿野仙踪”乡村振兴示范片区积极行动，宣读《美丽庭院创建实施方案》，组织开展“党员率先垂范，签定承诺书”活动，集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动。各村党员积极签订承诺书，严格按照 “干净、整齐、舒适、漂亮”四有标准，改善家居环境，让庭院灵动美丽。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道</span>
</p>
<p style="text-indent:43px">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道组织全体党员参与主题活动，每月走进一户困难家庭或老年人家庭，开展美化庭院大扫除，包括院内及室内。党员领导干部、妇联执委带头签订创建美丽庭院承诺书，明确分工，责任到人，做到创建美丽庭院家家知晓，美丽庭院人人创建。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">六合街道</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">“创建一座美丽舒适的庭院，打造一个温馨宜居的家园。这是我们开展美丽庭院活动的初心和使命，也是我们参与乡村振兴战略的信心和承诺。”六合街道各村党员干部们带头许下“我践行，我承诺”的创建诺言，带动大家参与到美丽庭院的创建中来。</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">&nbsp;</span>
</p>
<p style="text-indent:203px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">区直部门单位</span>
</p>
<p>
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">河口公安分局、区畜牧局、区文旅局、区商务局等部门单位纷纷组织干部职工到下派帮扶村开展“共建美丽庭院 助力乡村振兴”志愿服务活动，赢得村民群众的一致好评。</span>
</p>
<p>
    <br/>
</p>`
					},
					{
						id: 3,
						title: '市督导组来我区督察中央生态环境保护监督整改工作',
						autor: '新华社',
						time: '2019-5-21',
						text: `<p style="text-indent:45px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;letter-spacing:1px;background: white">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份，河口区各镇（街道）将“共建美丽庭院·助力乡村振兴”主题活动列入了各村“党员主题活动日”自选动作中。各镇、街道，区直部门单位积极行动，充分发挥党员的先锋带头作用，积极对接帮扶村，并结合实际开展工作，推动全区形成“美丽庭院”创建的良好氛围。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">&nbsp;</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇“绿野仙踪”乡村振兴示范片区积极行动，宣读《美丽庭院创建实施方案》，组织开展“党员率先垂范，签定承诺书”活动，集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动。各村党员积极签订承诺书，严格按照 “干净、整齐、舒适、漂亮”四有标准，改善家居环境，让庭院灵动美丽。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道</span>
</p>
<p style="text-indent:43px">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道组织全体党员参与主题活动，每月走进一户困难家庭或老年人家庭，开展美化庭院大扫除，包括院内及室内。党员领导干部、妇联执委带头签订创建美丽庭院承诺书，明确分工，责任到人，做到创建美丽庭院家家知晓，美丽庭院人人创建。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">六合街道</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">“创建一座美丽舒适的庭院，打造一个温馨宜居的家园。这是我们开展美丽庭院活动的初心和使命，也是我们参与乡村振兴战略的信心和承诺。”六合街道各村党员干部们带头许下“我践行，我承诺”的创建诺言，带动大家参与到美丽庭院的创建中来。</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">&nbsp;</span>
</p>
<p style="text-indent:203px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">区直部门单位</span>
</p>
<p>
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">河口公安分局、区畜牧局、区文旅局、区商务局等部门单位纷纷组织干部职工到下派帮扶村开展“共建美丽庭院 助力乡村振兴”志愿服务活动，赢得村民群众的一致好评。</span>
</p>
<p>
    <br/>
</p>`
					},
					{
						id: 4,
						title: '中共河口区纪委监委机关成立党员大会召开',
						autor: '新华社',
						time: '2019-6-21',
						text: `<p style="text-indent:45px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;letter-spacing:1px;background: white">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份，河口区各镇（街道）将“共建美丽庭院·助力乡村振兴”主题活动列入了各村“党员主题活动日”自选动作中。各镇、街道，区直部门单位积极行动，充分发挥党员的先锋带头作用，积极对接帮扶村，并结合实际开展工作，推动全区形成“美丽庭院”创建的良好氛围。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">&nbsp;</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇“绿野仙踪”乡村振兴示范片区积极行动，宣读《美丽庭院创建实施方案》，组织开展“党员率先垂范，签定承诺书”活动，集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动。各村党员积极签订承诺书，严格按照 “干净、整齐、舒适、漂亮”四有标准，改善家居环境，让庭院灵动美丽。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道</span>
</p>
<p style="text-indent:43px">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道组织全体党员参与主题活动，每月走进一户困难家庭或老年人家庭，开展美化庭院大扫除，包括院内及室内。党员领导干部、妇联执委带头签订创建美丽庭院承诺书，明确分工，责任到人，做到创建美丽庭院家家知晓，美丽庭院人人创建。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">六合街道</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">“创建一座美丽舒适的庭院，打造一个温馨宜居的家园。这是我们开展美丽庭院活动的初心和使命，也是我们参与乡村振兴战略的信心和承诺。”六合街道各村党员干部们带头许下“我践行，我承诺”的创建诺言，带动大家参与到美丽庭院的创建中来。</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">&nbsp;</span>
</p>
<p style="text-indent:203px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">区直部门单位</span>
</p>
<p>
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">河口公安分局、区畜牧局、区文旅局、区商务局等部门单位纷纷组织干部职工到下派帮扶村开展“共建美丽庭院 助力乡村振兴”志愿服务活动，赢得村民群众的一致好评。</span>
</p>
<p>
    <br/>
</p>`
					},
					{
						id: 5,
						title: '山东河口蓝色经济开发区招商引资政策',
						autor: '新华社',
						time: '2019-7-21',
						text: `<p style="text-indent:45px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;letter-spacing:1px;background: white">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份，河口区各镇（街道）将“共建美丽庭院·助力乡村振兴”主题活动列入了各村“党员主题活动日”自选动作中。各镇、街道，区直部门单位积极行动，充分发挥党员的先锋带头作用，积极对接帮扶村，并结合实际开展工作，推动全区形成“美丽庭院”创建的良好氛围。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">&nbsp;</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇“绿野仙踪”乡村振兴示范片区积极行动，宣读《美丽庭院创建实施方案》，组织开展“党员率先垂范，签定承诺书”活动，集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动。各村党员积极签订承诺书，严格按照 “干净、整齐、舒适、漂亮”四有标准，改善家居环境，让庭院灵动美丽。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道</span>
</p>
<p style="text-indent:43px">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道组织全体党员参与主题活动，每月走进一户困难家庭或老年人家庭，开展美化庭院大扫除，包括院内及室内。党员领导干部、妇联执委带头签订创建美丽庭院承诺书，明确分工，责任到人，做到创建美丽庭院家家知晓，美丽庭院人人创建。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">六合街道</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">“创建一座美丽舒适的庭院，打造一个温馨宜居的家园。这是我们开展美丽庭院活动的初心和使命，也是我们参与乡村振兴战略的信心和承诺。”六合街道各村党员干部们带头许下“我践行，我承诺”的创建诺言，带动大家参与到美丽庭院的创建中来。</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">&nbsp;</span>
</p>
<p style="text-indent:203px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">区直部门单位</span>
</p>
<p>
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">河口公安分局、区畜牧局、区文旅局、区商务局等部门单位纷纷组织干部职工到下派帮扶村开展“共建美丽庭院 助力乡村振兴”志愿服务活动，赢得村民群众的一致好评。</span>
</p>
<p>
    <br/>
</p>`
					},
					{
						id: 6,
						title: '"双招双引"培育新功能推动园区高质量发展',
						autor: '新华社',
						time: '2019-8-21',
						text: `<p style="text-indent:45px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;letter-spacing:1px;background: white">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份，河口区各镇（街道）将“共建美丽庭院·助力乡村振兴”主题活动列入了各村“党员主题活动日”自选动作中。各镇、街道，区直部门单位积极行动，充分发挥党员的先锋带头作用，积极对接帮扶村，并结合实际开展工作，推动全区形成“美丽庭院”创建的良好氛围。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">&nbsp;</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇“绿野仙踪”乡村振兴示范片区积极行动，宣读《美丽庭院创建实施方案》，组织开展“党员率先垂范，签定承诺书”活动，集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动。各村党员积极签订承诺书，严格按照 “干净、整齐、舒适、漂亮”四有标准，改善家居环境，让庭院灵动美丽。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道</span>
</p>
<p style="text-indent:43px">
    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道组织全体党员参与主题活动，每月走进一户困难家庭或老年人家庭，开展美化庭院大扫除，包括院内及室内。党员领导干部、妇联执委带头签订创建美丽庭院承诺书，明确分工，责任到人，做到创建美丽庭院家家知晓，美丽庭院人人创建。</span>
</p>
<p style="text-align:center;line-height:39px" align="center">
    <span style="font-size:21px;font-family:仿宋_GB2312">六合街道</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">“创建一座美丽舒适的庭院，打造一个温馨宜居的家园。这是我们开展美丽庭院活动的初心和使命，也是我们参与乡村振兴战略的信心和承诺。”六合街道各村党员干部们带头许下“我践行，我承诺”的创建诺言，带动大家参与到美丽庭院的创建中来。</span>
</p>
<p style="text-indent:43px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">&nbsp;</span>
</p>
<p style="text-indent:203px;line-height:39px">
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">区直部门单位</span>
</p>
<p>
    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">河口公安分局、区畜牧局、区文旅局、区商务局等部门单位纷纷组织干部职工到下派帮扶村开展“共建美丽庭院 助力乡村振兴”志愿服务活动，赢得村民群众的一致好评。</span>
</p>
<p>
    <br/>
</p>`
					},
					{
											id: 7,
											title: '"双招双引"培育新功能推动园区高质量发展',
											autor: '新华社',
											time: '2019-4-21',
											text: `<p style="text-indent:45px;line-height:39px">
					    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;letter-spacing:1px;background: white">为加快推进乡村振兴战略深入实施，提升农村人居环境，自6月份，河口区各镇（街道）将“共建美丽庭院·助力乡村振兴”主题活动列入了各村“党员主题活动日”自选动作中。各镇、街道，区直部门单位积极行动，充分发挥党员的先锋带头作用，积极对接帮扶村，并结合实际开展工作，推动全区形成“美丽庭院”创建的良好氛围。</span>
					</p>
					<p style="text-align:center;line-height:39px" align="center">
					    <span style="font-size:21px;font-family:仿宋_GB2312">&nbsp;</span>
					</p>
					<p style="text-align:center;line-height:39px" align="center">
					    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇</span>
					</p>
					<p style="text-indent:43px;line-height:39px">
					    <span style="font-size:21px;font-family:仿宋_GB2312">新户镇“绿野仙踪”乡村振兴示范片区积极行动，宣读《美丽庭院创建实施方案》，组织开展“党员率先垂范，签定承诺书”活动，集中观摩了“美丽庭院示范户”，共同推进以“每家每户 大美新户”为主题的美丽庭院创建工作开展。</span>
					</p>
					<p style="text-align:center;line-height:39px" align="center">
					    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇</span>
					</p>
					<p style="text-indent:43px;line-height:39px">
					    <span style="font-size:21px;font-family:仿宋_GB2312">义和镇部分村积极开展“共建美丽庭院•助力乡村振兴”党员主题日活动。各村党员积极签订承诺书，严格按照 “干净、整齐、舒适、漂亮”四有标准，改善家居环境，让庭院灵动美丽。</span>
					</p>
					<p style="text-align:center;line-height:39px" align="center">
					    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道</span>
					</p>
					<p style="text-indent:43px">
					    <span style="font-size:21px;font-family:仿宋_GB2312">河口街道组织全体党员参与主题活动，每月走进一户困难家庭或老年人家庭，开展美化庭院大扫除，包括院内及室内。党员领导干部、妇联执委带头签订创建美丽庭院承诺书，明确分工，责任到人，做到创建美丽庭院家家知晓，美丽庭院人人创建。</span>
					</p>
					<p style="text-align:center;line-height:39px" align="center">
					    <span style="font-size:21px;font-family:仿宋_GB2312">六合街道</span>
					</p>
					<p style="text-indent:43px;line-height:39px">
					    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">“创建一座美丽舒适的庭院，打造一个温馨宜居的家园。这是我们开展美丽庭院活动的初心和使命，也是我们参与乡村振兴战略的信心和承诺。”六合街道各村党员干部们带头许下“我践行，我承诺”的创建诺言，带动大家参与到美丽庭院的创建中来。</span>
					</p>
					<p style="text-indent:43px;line-height:39px">
					    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">&nbsp;</span>
					</p>
					<p style="text-indent:203px;line-height:39px">
					    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">区直部门单位</span>
					</p>
					<p>
					    <span style="font-size:21px;font-family:仿宋_GB2312;color:black;background:white">河口公安分局、区畜牧局、区文旅局、区商务局等部门单位纷纷组织干部职工到下派帮扶村开展“共建美丽庭院 助力乡村振兴”志愿服务活动，赢得村民群众的一致好评。</span>
					</p>
					<p>
					    <br/>
					</p>`
										}
				]
			}
		},
		components: {
			NewsDetail
		},


		onBackPress() {
			//监听back键，关闭弹出菜单
			if (nvImageMenu.isVisible()) {
				nvImageMenu.hide()
				nvMask.hide()
				return true
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e)
			switch (e.text) {
				case "\ue607": //点击分享按钮
					//TODO 未处理h5，h5应调用qq浏览器等自带的share api，如果浏览器不自带share，那么分享图标不应该显示。或者从简的话，h5整个就不显示分享按钮
					// #ifdef APP-PLUS
					nvMask.show()
					nvImageMenu.show() //5+应支持从底部向上弹出的动画
					// #endif
					break;
			}
		},
		methods: {
			
		},
		
		computed:{
			news(){
				return this.newsList.filter(item=>{
					return item.id == this.urlId
				})
			}
		},
	}
</script>

<style scoped>
	page {
		background-color: #FFFFFF;
	}

	
</style>
