<template>
	<view class="share">
		<NewsDetail :news="news" />
	</view>
</template>

<script>
	// 详情页
	import NewsDetail from 'pages/picNewsDetail/picNewsDetail.vue'

	export default {
		onReady() {
			console.log('传递' + this.urlId)
		},

		onLoad(option) {
			console.log(option.id); //打印出上个页面传递的参数。
			this.urlId = option.id
		},

		data() {
			return {
				urlId: '',

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
		computed: {
			news() {
				return this.newsList.filter(item => {
					return item.id == this.urlId
				})
			}
		},
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
</style>
