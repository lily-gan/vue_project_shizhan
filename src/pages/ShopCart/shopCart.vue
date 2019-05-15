<template>
  <div class="wrap">
    <header>
      <span class="shopcart">购物车</span>
      <span class="ticket">领券</span>
    </header>
    <div class="content">
      <div class="navList">
        <div class="list">
          <span class="left">30天无忧退货</span>
          <span class="mid">48小时快速退款</span>
          <span class="right">满88元免邮费</span>
        </div>
    </div>
      <div class="container">
        <div class="pic">
          <img src="../images/shopcart/shopcart.png" alt="">
        </div>
        <div class="desc">去添加点什么吧</div>
        <div class="btn" @click="$router.push('/login')">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    overflow hidden
    position relative
    width 100%
    height 1150px
    background-color #f4f4f4
    >header
      background-color white
      padding 0 28px
      height 85px
      font-size 30px
      line-height 85px
      display flex
      justify-content space-between
      flex-wrap nowrap
      align-items center
      .shopcart
        color #000
        font-size 36px
      .ticket
        color #b4282d
        font-size 30px
    .content
      width 100%
      .navList
        width 100%
        height 68px
        .list
          height 68px
          padding 0 15px
          display flex
          justify-content space-around
          align-items center
          flex-wrap nowrap
          font-size 24px
          .left
            height 68px
            line-height 68px
          .mid
            height 68px
            line-height 68px
          .right
            height 68px
            line-height 68px
      .container
        width 750px
        height 469px
        text-align center
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        margin auto
        .pic
          width 238px
          height 238px
          position absolute
          left 0
          top 0
          right 0
          bottom 0
          margin auto
          >img
            width: 238px
            height: 238px
        .desc
          position absolute
          left: 280px
          top 360px
          color #999
          font-size 28px
          margin-bottom 30px
        .btn
          width 480px
          height 92px
          background-color #b4282d
          color white
          font-size 36px
          line-height 92px
          margin 0 135px
          position absolute
          top 430px

</style>
