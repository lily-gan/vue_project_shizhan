<template>
  <div class="card-wrap">
    <div class="card">
      <div class="description">趁好看要多照镜子....为了帮你省钱，选妹拼了！</div>
      <div class="pic-wrap">
        <ul class="list">
          <li class="item"><img src="./images/f1.jpg" alt=""></li>
          <li class="item"><img src="./images/f2.jpg" alt=""></li>
          <li class="item"><img src="./images/f3.jpg" alt=""></li>
          <li class="item"><img src="./images/f5.jpg" alt=""></li>
          <li class="item"><img src="./images/f6.jpg" alt=""></li>
          <li class="item"><img src="./images/f7.jpg" alt=""></li>
          <li class="item"><img src="./images/f8.jpg" alt=""></li>
        </ul>
      </div>
      <div class="seeCount">
        <i class="iconfont icon-chakan"></i>
        <span class="count">1222人看过</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .card-wrap
    padding 20px 0 0 0
    background-color #f5f5f5
    .card
      width 690px
      padding 34px 28px
      background-color white
      .description
        width 690px
        height 104px
        line-height 52px
        font-size 36px
        margin-bottom 24px
      .pic-wrap
        width 690px
        height 376px
        padding-bottom 30px
        overflow hidden
        .list
          display flex
          justify-content center
          align-items center
          flex-wrap nowrap
          .item
            width 260px
            height 260px

      .seeCount
        width 690px
        height 34px
        .icon-chakan
          font-size 28px
        .count
          font-size 24px
          color #999
</style>
