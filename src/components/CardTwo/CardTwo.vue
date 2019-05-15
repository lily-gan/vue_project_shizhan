<template>
  <div v-if="identifyList.length>0">
    <div class="cardWrap" v-for="(item, index) in identifyList[1].list" :key="index">
      <div class="card" v-if="c.type===0" v-for="(c, index) in item.topics" :key="index">
        <div class="info">
          <div class="user">
        <span class="chatHead">
          <img :src="c.avatar" alt="" width="54" height="54">
        </span>
            <span class="username">{{c.nickname}}</span>
          </div>
          <div class="title">{{c.title}}</div>
          <div class="desc">{{c.subTitle}}</div>
          <div class="seeCount">
            <span class="see iconfont icon-chakan"></span>
            <span class="count">{{c.readCount}}人看过</span>
          </div>
        </div>
        <div class="pic">
          <img :src="c.picUrl" alt="" width="272" height="272">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['identifyList'])
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cardWrap
    overflow hidden
    background-color #f5f5f5
    .card
      padding 30px 28px
      margin 20px 0
      background-color white
      display flex
      justify-content space-between
      align-items center
      .info
        width 394px
        .user
          width 100%
          height 50px
          margin-bottom 24px
          .chatHead
            display inline-block
            width 54px
            height 54px
            margin-right 10px
            >img
              border-radius 50%
          .username
            display inline-block
            font-size 28px
            height 50px
            line-height 50px
        .title
          width 100%
          font-size 36px
          margin-bottom 10px
          line-height 45px
        .desc
          font-size 28px
          color #7e8c8d
          line-height 30px
          margin-bottom 20px
        .seeCount
          .see
            font-size 30px
            margin-right 10px
          .count
            font-size 24px
            color #7e8c8d
      .pic
        width 260px
        height 260px

</style>
