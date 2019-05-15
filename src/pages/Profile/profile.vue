<template>
  <div class="wrap">
    <Head>
      <div class="find" slot="mid">
        <img src="../../pages/images/logo.png" alt="">
      </div>
    </Head>
    <div class="container">
      <div class="content">
        <div class="pic"><img src="../images/profile/lo.png" alt=""></div>
        <div class="loginType">
          <div class="phone" @click="$router.push('/login')">
            <i class="iconfont icon-shouji"></i>
            <span class="login1">手机号码登录</span>
          </div>
          <div class="email">
            <i class="iconfont icon-youxiang"></i>
            <span class="login2">邮箱账号登录</span>
          </div>
          <div class="quick" @click="$router.push('/login')">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-iconfontjiantou2"></i>
          </div>
        </div>
      </div>
      <div class="loginWay">
        <span class="wechat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </span>
        <span class="qq">
          <i class="iconfont icon-QQ-copy"></i>
          <span>qq</span>
        </span>
        <span class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../../components/Head/Head.vue'
export default {
  components: {
    Head
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    overflow hidden
    .container
      width 100%
      margin-top 88px
      height 1245px
      background-color #f5f5f5
      position relative
      .content
        width 750px
        height 410px
        position relative
        .pic
          width 100%
          height 90px
          text-align center
          >img
            width 268px
            height 90px
            position absolute
            left 0
            top 0
            right 0
            bottom 0
            margin auto
        .loginType
          width 750px
          text-align center
          position absolute
          top 450px
          .phone
            width 670px
            margin 0 40px 30px 40px
            height 90px
            background-color #b4282d
            text-align center
            .icon-shouji
              display inline-block
              width 50px
              height 90px
              line-height  90px
              color white
              font-size 46px
            .login1
              display inline-block
              width 200px
              height 90px
              line-height  90px
              color white
              font-size 28px
          .email
            width 670px
            margin 0 40px 30px 40px
            height 90px
            background-color #b4282d
            text-align center
            .icon-youxiang
              display inline-block
              width 50px
              height 90px
              line-height  90px
              color white
              font-size 46px
            .login2
              display inline-block
              width 200px
              height 90px
              line-height 90px
              color white
              font-size 28px
          .quick
            width 100%
            height 60px
            line-height 60px
            font-size 28px
            .icon-iconfontjiantou2
              display inline-block
              font-size 36px
      .loginWay
        width 690px
        height 40px
        position absolute
        bottom 30px
        font-size 30px
        padding 30px
        text-align center
        .wechat
          border-right 1px solid
          padding-right 60px
          .icon-weixin
            display inline-block
            font-size 48px
        .qq
          border-right 1px solid
          padding-right 60px
          margin-left 60px
          .icon-QQ-copy
            display inline-block
            font-size 48px
        .weibo
          font-size 30px
          margin-left 60px
          .icon-weibo
            display inline-block
            font-size 48px
</style>
