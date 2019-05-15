<template>
  <header>
    <div class="head">
      <div class="home" @click="$router.push('/msite')">
        <i class="iconfont icon-shouye"></i>
      </div>
      <slot name="mid"></slot>
      <div class="search">
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.push('/shopCart')"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  header
    position fixed
    z-index 99
    background-color white
    .head
      width 700px
      display flex
      padding 0 24px 0 26px
      justify-content space-between
      align-items center
      position relative
      &::after
        content ''
        position absolute
        left 0
        bottom 0
        width 100%
        height 4px
        background-color #e9e9e9
      .home
        width 46px
        height 88px
        .icon-shouye
          font-size 46px
          height 88px
          line-height 88px
      .find
        width 320px
        height 88px
        text-align center
        >img
          height 50px
          padding-top 20px
      .search
        width 142px
        height 88px
        .icon-sousuo
          font-size 44px
          line-height 88px
          display inline-block
          padding 0 10px 0 10px
        .icon-gouwuche
          font-size 44px
          display inline-block
          padding 0 10px 0 10px
          line-height 88px
</style>
