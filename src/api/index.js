import ajax from './ajax.js'
const BASE = '/api'
/* 首页 */
//  首页轮播图
export const reqFocusList = () => ajax('/focusList')
//  首页轮播图下方三个购物规则
export const reqRuleList = () => ajax('/policyDescList')
//  首页小图片列表
export const reqPicList = () => ajax('/picList')
//  首页私人订制
export const reqPrivateList = () => ajax('/privatelist')
//  限时购
export const reqFlashSale = () => ajax('/flashSaleModule')
//  专题精选
export const reqTopicList = () => ajax('/topicList')
//  众筹
export const reqCrowd = () => ajax('/zhongChouList')
/*  分类页面  */
export const reqCategoryList = () => ajax('/categoryList')
/*  识物页面  */
export const reqIdentifyList = () => ajax('/identify')
/*  登录页面  */
//  用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')
// 手机号验证码登录
export const resSmsLogin = ({phone, code}) => ajax(BASE + '/login_sms', {phone, code}, 'POST')
//  根据会话获取用户信息
export const reqUser = () => ajax(BASE + '/userinfo')
//  发送短信验证码
export const reqCode = (phone) => ajax(BASE + '/sendcode', {phone})
