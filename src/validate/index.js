import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)
//  指定本地提示信息
VeeValidate.Validator.localize('zh-CN', {
  messages: zhCN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
})
//  自定义验证规则
VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位的手机号'
})
