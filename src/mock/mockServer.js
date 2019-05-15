import msite from './homeData.json'
import categoryList from './categoryList.json'
import identify from './shiwu.json'
import Mock from 'mockjs'
/* 首页 */
//  轮播图
Mock.mock('/focusList', {code: 0, data: msite.focusList})

//  首页轮播图下方三个购物规则
Mock.mock('/policyDescList', {code: 0, data: msite.policyDescList})

//  首页小图片列表
Mock.mock('/picList', {code: 0, data: msite.kingKongModule})

//  首页私人订制
Mock.mock('/privatelist', {code: 0, data: msite.personalShop})
//  限时购
Mock.mock('/flashSaleModule', {code: 0, data: msite.flashSaleModule})
//  专题精选
Mock.mock('/topicList', {code: 0, data: msite.topicList})
//  众筹
Mock.mock('/zhongChouList', {code: 0, data: msite.zhongChouList})
// 最底部的列表
Mock.mock('/categoryModule', {code: 0, data: msite.categoryModule})

/*  分类页面  */
Mock.mock('/categoryList', {code: 0, data: categoryList})

/*  识物页面  */
Mock.mock('/identify', {code: 0, data: identify})
