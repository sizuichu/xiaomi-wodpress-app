/*
 * 
 * WordPres版微信66666      * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "xiaomi.weask.club";
var MINAPPTYPE="0";//小程序的类型，如果是企业小程序请填：0 ，如果是个人小程序请填：1
var WEBSITENAME="小觅学长"; //网站名称
var ABOUTID = 7; //wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var ABOUTIDAd =316; //wordpress网站"通知页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT='10'; //每页文章数目
var CATEGORIESID='all'  //显示全部的分类
//var CATEGORIESID = '1,1059,98,416,189,374,6,463';//指定显示的分类的id
var PAYTEMPPLATEID = 'hzKpxuPF2rw7O-qTElkeoE0lMwr0O4t9PJkLyt6v8rk';//赞赏消息模版id
var REPLAYTEMPPLATEID = 'IDcefDyNDl8QIwVqsPQ0didYFsj8Bu3B8IB_aebBDKY';//回复评论消息模版id
 //首页图标导航
 //参数说明：'name'为名称，'image'为图标路径，'redirectlink'为跳转的页面，'redirecttype'为跳转的类型，page为本小程序的页面，app为其他微信小程序
 //        'appid' 当redirecttype为app时，这个值为其他微信小程序的appid，如果redirecttype为page时，这个值设置为空。
var INDEXNAV = [
  { id: '1', name: '文库', image: '../../images/shop.png', redirectlink: 'pages/shelf/shelf', redirecttype: 'app', appid:'wx03a85e8ad46f532b' },
    { id: '2', name: '排行', image: '../../images/ranking.png', redirectlink: '../hot/hot', redirecttype: 'page', appid: ''},
    { id: '3', name: '专题', image: '../../images/tar-topic.png', redirectlink: '../topic/topic', redirecttype: 'page', appid: ''},
    { id: '4', name: '联系', image: '../../images/ad.png', redirectlink: '../guangbo/guangbo', redirecttype: 'page', appid: '' },
   
    ]

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getAboutId: ABOUTID,
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getCategoriesID :CATEGORIESID,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getMinAppType:MINAPPTYPE
}