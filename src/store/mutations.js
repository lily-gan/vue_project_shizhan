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
export const mutations = {
  [RECEIVE_FOCUSLIST] (state, focusList) {
    state.focusList = focusList
  },
  [RECEIVE_RULELIST] (state, ruleList) {
    state.ruleList = ruleList
  },
  [RECEIVE_PICLIST] (state, picList) {
    state.picList = picList
  },
  [RECEIVE_PRIVATELIST] (state, privateList) {
    state.privateList = privateList
  },
  [RECEIVE_FLASHSALE] (state, flashSale) {
    state.flashSale = flashSale
  },
  [RECEIVE_TOPICLIST] (state, topiclist) {
    state.topiclist = topiclist
  },
  [RECEIVE_CROWD] (state, crowd) {
    state.crowd = crowd
  },
  [RECEIVE_CATEGORYLIST] (state, categoryList) {
    state.categoryList = categoryList
  },
  [RECEIVE_IDENTIFYLIST] (state, identifyList) {
    state.identifyList = identifyList
  },
  [RECEIVE_USER] (state, user) {
    state.user = user
  }
}
