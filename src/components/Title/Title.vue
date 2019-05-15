<template>
  <div class="limitShop-title">
        <span class="left">
          <span class="title">专题精选</span>
        </span>
    <a href="#" class="right">
      <span>更多</span><span class="iconfont icon-iconfontjiantou2"></span>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
  .limitShop-title
    background-color white
    position relative
    height 100px
    line-height 100px
    padding 0 30px 0 30px
    .left
      width 290px
      height 100px
      float left
      font-size 28px
      .title
        color black
      .clock
        .hour
          background-color black
          color white
        .minute
          background-color black
          color white
        .seconds
          background-color black
          color white
    .right
      width 77px
      height 100px
      line-height 100px
      font-size 28px
      float right
      color black
      >.icon-iconfontjiantou2
        font-size 28px
        position absolute
        right 20px
        top 3px

</style>
