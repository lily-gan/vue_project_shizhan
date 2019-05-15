import {
  reqRuleList,
  reqPicList,
  reqFocusList,
  reqPrivateList,
  reqFlashSale,
  reqTopicList,
  reqCrowd,
  reqCategoryList,
  reqIdentifyList,
  reqUser
} from '../api'
import {
  RECEIVE_RULELIST,
  RECEIVE_PICLIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_PRIVATELIST,
  RECEIVE_FLASHSALE,
  RECEIVE_TOPICLIST,
  RECEIVE_CROWD,
  RECEIVE_CATEGORYLIST,
  RECEIVE_IDENTIFYLIST,
  RECEIVE_USER
} from './mutation-types'

export const actions = {
  // 首页轮播图
  async getFocusList ({commit}) {
    const result = await reqFocusList()
    if (result.code === 0) {
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST, focusList)
    }
  },
  // 首页轮播图下方三个购物规则
  async getRuleList ({commit}) {
    const result = await reqRuleList()
    if (result.code === 0) {
      const ruleList = result.data
      commit(RECEIVE_RULELIST, ruleList)
    }
  },
  //  首页小图片列表
  async getPicList ({commit}) {
    const result = await reqPicList()
    if (result.code === 0) {
      const picList = result.data
      commit(RECEIVE_PICLIST, picList)
    }
  },
  //  首页私人订制
  async getPrivateList ({commit}) {
    const result = await reqPrivateList()
    if (result.code === 0) {
      const privateList = result.data
      commit(RECEIVE_PRIVATELIST, privateList)
    }
  },
  //  限时购
  async getFlashSale ({commit}) {
    const result = await reqFlashSale()
    if (result.code === 0) {
      const flashSale = result.data
      commit(RECEIVE_FLASHSALE, flashSale)
    }
  },
  //  专题精选
  async getTopiclist ({commit}) {
    const result = await reqTopicList()
    if (result.code === 0) {
      const topiclist = result.data
      commit(RECEIVE_TOPICLIST, topiclist)
    }
  },
  //  众筹
  async getCrowd ({commit}) {
    const result = await reqCrowd()
    if (result.code === 0) {
      const crowd = result.data
      commit(RECEIVE_CROWD, crowd)
    }
  },
  /*  分类页面  */
  async getCategoryList ({commit}) {
    const result = await reqCategoryList()
    if (result.code === 0) {
      const categoryList = result.data
      commit(RECEIVE_CATEGORYLIST, categoryList)
    }
  },
  /*  识物页面  */
  async getIndentify ({commit}) {
    const result = await reqIdentifyList()
    if (result.code === 0) {
      const identifyList = result.data
      commit(RECEIVE_IDENTIFYLIST, identifyList)
    }
  },
  /*  登录页面  */
  async getUser ({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  }
}
