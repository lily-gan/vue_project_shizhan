<template>
  <div id="wrap">
    <span class="sm-wrap">
      <span class="search" @keyUp.enter="search">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" placeholder="法式亚麻T恤 限时99.9">
      </span>
      <span class="cancle" @click="cancelSearch">取消</span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    search () {

    },
    cancelSearch () {

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#wrap
  background-color white
  text-align center
  width 750px
  height 90px
  .sm-wrap
    display flex
    justify-content space-between
    align-items center
    width 690px
    height 80px
    margin 10px 30px
    .search
      display flex
      justify-content center
      align-items center
      margin 10px 20px
      height 60px
      background-color #f5f5f5
      >.icon-sousuo
        display inline-block
        color rgba(0,0,0,.8)
        font-size 28px
        margin 0 20px
        line-height 40px
        padding 20px 0
      >input
        color rgba(0,0,0,1)
        font-size 26px
        border-radius 10px
        width 520px
        height 60px
        line-height 60px
        text-decoration none
        background-color #f5f5f5
        outline none
        letter-spacing 2px
        &:-webkit-input-placeholder
          color rgba(0,0,0,.6)
    .cancle
      height 60px
      line-height 60px
      font-size 28px
      text-align center
</style>
