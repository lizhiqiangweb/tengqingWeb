// JavaScript Document
var locationpc = "/pc";
var locationm = "/m";
var ctmargin1 = new Vue({
	el: '#ctmargin',
	data: {
		parentMessage: 'Parent',
		banners: [
			"images/index_06.png",
			"images/customer_02.jpg",
			"images/index_06.png"
		],
		caseimgs: [
			{
				id: 1,
				img: "images/saseimg_03.jpg",
				type: 1,
				types: 0
			},
			{
				id: 3,
				img: "images/saseimg_05.jpg",
				type: 1,
				types: 0
			},
			{
				id: 4,
				img: "images/saseimg_07.jpg",
				type: 1,
				types: 0
			},
			{
				id: 4,
				img: "images/saseimg_09.jpg",
				type: 1,
				types: 0
			},
			{
				id: 1,
				img: "images/saseimg_15.jpg",
				type: 1,
				types: 0
			},
			{
				id: 2,
				img: "images/saseimg_16.jpg",
				type: 1,
				types: 0
			},
			{
				id: 2,
				img: "images/saseimg_17.jpg",
				type: 1,
				types: 0
			},
			{
				id: 7,
				img: "images/saseimg_18.jpg",
				type: 1,
				types: 0
			},
			{
				id: 6,
				img: "images/saseimg_23.jpg",
				type: 1,
				types: 0
			},
			{
				id: 8,
				img: "images/saseimg_24.jpg",
				type: 1,
				types: 0
			},
			{
				id: 9,
				img: "images/saseimg_25.jpg",
				type: 1,
				types: 0
			},
			{
				id: 10,
				img: "images/saseimg_26.jpg",
				type: 1,
				types: 0
			},
		],
		utqs: [
			{
				img: "images/index_09.png",
				title: "无需代码，一键生成",
				text: "消除技术门槛，不懂代码出可立刻上手制作.300秒快速生或小程字"
			},
			{
				img: "images/index_11.png",
				title: "可视化拖拽",
				text: "操怍轻松使捷，所见即所得快速呈现每个细节改动，看得见的精彩"
			},
			{
				img: "images/index_13.png",
				title: "率先采用VUE前端技术",
				text: "业界首家采用VUE前端框架技术打造极致轻量，稳定，快速"
			},
			{
				img: "images/index_15.png",
				title: "深度优化底层框架",
				text: "前后端分离,优化前后端教据交互路线深吴次优化结构，提升微容能力与速度"
			},
			{
				img: "images/index_21.png",
				title: "多后台独立管理",
				text: "每个小程序作品拥有独立后台用户可自由切换,实时管理。"
			},
			{
				img: "images/index_22.png",
				title: "海量模板多样组件",
				text: "海星行业模板持续更新多样化知件轻松满足开发需求。"
			},
			{
				img: "images/index_23.png",
				title: "完善的行业解决方案",
				text: "电商、餐饮、旅游、教育、金融行业解决方系持续更新中。"
			},
			{
				img: "images/index_24.png",
				title: "实时预览、下载、分享",
				text: "支持界面预览，实时查看精彩效果制作完成后发布小程序，一键打包对接微信开发者工具"
			}
		],//首页选择我们
		cbtqs: [
			{
				img: "images/index_34.png",
				title: "小程序开发",
				text: "各领域的轻量级传播推广新利器，无需下载，即用即走",
				class: "bluebg"
			},
			{
				img: "images/index_36.png",
				title: "网站设计",
				text: "品牌官网建设，集团网站建设商城网站开发，营销型网站建设",
				class: "violetbg"
			},
			{
				img: "images/index_38.png",
				title: "APP开发",
				text: "为客户提供专业的商务咨询、研发等运营解决方案，从而提升用户的转化率。",
				class: "redbg"
			},
			{
				img: "images/index_40.png",
				title: "定制开发",
				text: "各领域的定制开发，满足不同类型的用户需求。",
				class: "yellowbg"
			},
			{
				img: "images/index_46.png",
				title: "ERP",
				text: "ERP 具有整合性、系统性、灵活性、实时控制性等显著特点。",
				class: "violetbg"
			},
			{
				img: "images/index_47.png",
				title: "CRM",
				text: "CRM是现代营销管理理念和信息技术的完美结合。",
				class: "yellowbg"
			},
			{
				img: "images/index_48.png",
				title: "OA",
				text: "OA强调办公的便捷方便，提高效率,具备五大特性：易用性、健壮性、开放性、严密性、实用性。",
				class: "bluebg"
			},
			{
				img: "images/index_49.png",
				title: "SaaS",
				text: "服务的收费方式风险小，灵活选择模块，备份，维护，安全，升级",
				class: "redbg"
			}
		],//核心业务
		casetqs: [
			{
				img: "images/index_55.png",
				brief: "分销系统团队分红综合平台订单、物流等",
				main: "分销系统团队分红电商购物综合平台订单物流等",
				adapt: "百货商品  电商服务  服装鞋包"
			},
			{
				img: "images/index_55.png",
				brief: "分销系统团队分红综合平台订单、物流等",
				main: "分销系统团队分红电商购物综合平台订单物流等",
				adapt: "百货商品  电商服务  服装鞋包"
			},
			{
				img: "images/index_55.png",
				brief: "分销系统团队分红综合平台订单、物流等",
				main: "分销系统团队分红电商购物综合平台订单物流等",
				adapt: "百货商品  电商服务  服装鞋包"
			},
			{
				img: "images/index_55.png",
				brief: "分销系统团队分红综合平台订单、物流等",
				main: "分销系统团队分红电商购物综合平台订单物流等",
				adapt: "百货商品  电商服务  服装鞋包"
			},
			{
				img: "images/index_55.png",
				brief: "分销系统团队分红综合平台订单、物流等",
				main: "分销系统团队分红电商购物综合平台订单物流等",
				adapt: "百货商品  电商服务  服装鞋包"
			},
			{
				img: "images/index_55.png",
				brief: "分销系统团队分红综合平台订单、物流等",
				main: "分销系统团队分红电商购物综合平台订单物流等",
				adapt: "百货商品  电商服务  服装鞋包"
			}
		],//首页成功案例
		customers: [
			{
				class: "",
				title: "Restaurant ",
				title2: "餐饮行业",
				text: "为餐饮行业提供专业服务",
				classlr: "left",
				img: "images/customer_05.jpg",
				classlrt: "right",
				customerps: [
					{
						text: "1",
						text2: "线上宣传：（放置网页广告位、微信朋友圈、发帖、EDM等）；"
					},
					{
						text: "2",
						text2: "线下推广：（派发DM单、会员宣传手册、组织相关的美食活动等）；"
					},
					{
						text: "3",
						text2: "导航系统：建立合作商家的电子地图，作为会员消费的指南针；"
					},
					{
						text: "4",
						text2: "网站建设：帮助商家构建网站；"
					},
					{
						text: "5",
						text2: "专业人士不定期回访：帮忙、指导、策划营销活动；"
					}
				]
			},
			{
				class: "customerboxb",
				title: "Beauty Clinic ",
				title2: "医美行业",
				text: "为医美行业提供专业服务",
				classlr: "right",
				img: "images/customer_09.jpg",
				classlrt: "left",
				customerps: [
					{
						text: "1",
						text2: "设计活动二维码在线分享，从而获得顾客；"
					},
					{
						text: "2",
						text2: "利用小程序在线推广进行品牌营销，刺激以客带客；"
					},
					{
						text: "3",
						text2: "网络建设、社群交流系统；"
					},
					{
						text: "4",
						text2: "平台广告展示：利用线上宣传增加品牌曝光率，加深消费者印象；"
					},
					{
						text: "5",
						text2: "资源整合、营销活动策划；"
					}
				]
			},
			{
				class: "customerboxb customerboxWathet",
				title: "Education",
				title2: "教育行业",
				text: "为教育行业提供专业服务",
				classlr: "left",
				img: "images/customer_13.jpg",
				classlrt: "right",
				customerps: [
					{
						text: "1",
						text2: "利用小程序线上推广,帮分享微信群,朋友圈；"
					},
					{
						text: "2",
						text2: "在人流量较多的地区发传单；"
					},
					{
						text: "3",
						text2: "电话推广；"
					},
					{
						text: "4",
						text2: "帮策划一些优惠活动,吸引新顾客；"
					},
					{
						text: "5",
						text2: "人员不足时,可以辅助贵司招聘；"
					}
				]
			},
			{
				class: "",
				title: "apparels",
				title2: "服装行业",
				text: "为服装行业提供专业服务",
				classlr: "right",
				img: "images/customer_17.jpg",
				classlrt: "left",
				customerps: [
					{
						text: "1",
						text2: "利用小程序线上推广,分享至微信群；"
					},
					{
						text: "2",
						text2: "定期更新一些新款图片,发送至不同的朋友圈；"
					},
					{
						text: "3",
						text2: "帮策划一些优惠活动吸引新老顾客；"
					},
					{
						text: "4",
						text2: "在店铺周边人流量较多的地方发传单；"
					}
				]
			},
			{
				class: "customerboxb",
				title: "Custom",
				title2: "家居定制行业",
				text: "为定制行业提供专业服务",
				classlr: "left",
				img: "images/customer_05.jpg",
				classlrt: "right",
				customerps: [
					{
						text: "1",
						text2: "帮客户电话邀约业主。"
					},
					{
						text: "2",
						text2: "新楼盘交房帮助客户扫楼盘。"
					},
					{
						text: "3",
						text2: "免费帮客户量尺。"
					},
					{
						text: "4",
						text2: "客户提出要求帮助客户出三维家或酷家乐效果图。"
					},
					{
						text: "5",
						text2: "帮助客户提货送货到业主家。"
					},
					{
						text: "6",
						text2: "为客户提供安装清洁服务。"
					}
				]
			},
			{
				class: "customerboxb customerboxWathet",
				title: "Decoration",
				title2: "装饰行业",
				text: "为装饰行业提供专业服务",
				classlr: "right",
				img: "images/customer_05.jpg",
				classlrt: "left",
				customerps: [
					{
						text: "1",
						text2: "为客户电话邀约业主"
					},
					{
						text: "2",
						text2: "为客户提供验房服务。"
					},
					{
						text: "3",
						text2: "为客户把户型图，施工图纸做好。"
					},
					{
						text: "4",
						text2: "根据客户图纸提供最精准预算。"
					},
					{
						text: "5",
						text2: "为客户联系好各种施工人员。"
					},
					{
						text: "6",
						text2: "为客户提供最精致的清洁服务"
					}
				]
			}
		],//客户服务
		casesetjzs: [{ text: "全部", classs: "current" }, { text: "家居", class: "" }, { text: "餐饮", class: "" }, { text: "服装", class: "" }, { text: "医美", class: "" },
		{ text: "教育", class: "" }, { text: "旅游", class: "" }, { text: "评估", class: "" }, { text: "拍卖", class: "" }, { text: "装修", class: "" }, { text: "其他", class: "" }
		],
		casesetjzs2: [{ text: "小程序开发", classs: "current" }, { text: "网站设计", classs: "" }, { text: "APP开发", classs: "" }, { text: "定制开发", classs: "" }, { text: "ERP", classs: "" }, { text: "CRM", classs: "" }, { text: "OA", classs: "" }, { text: "SaaS", classs: "" }],

		casesetjzs3: [{ text: "全部", classs: "current" }, { text: "咨询版", classs: "" }, { text: "电商版", classs: "" }, { text: "营销版", classs: "" }],
		guigeSpan: "",
		kouweiSpan: "0",
		kouweisSpan: "0",
		activeStatus: ''
	},
	methods: {
		guige: function (index) {  //当点击时候点亮，同级的span标签删除Class
			if(index) {
				this.guigeSpan = index;
				console.log(index);
			}	else {
				this.guigeSpan = 0;
			}
		},
		kouwei: function (index) {
			this.kouweiSpan = index;
		},
		kouweis: function (index) {
			this.kouweisSpan = index;
		},
	},

});
