<template>
  <div v-if="identifyList.length>0">
    <div class="card-wrap" v-for="(item, index) in identifyList[1].list" :key="index">
      <div class="card" v-if="c.type===0 && c.style===1" v-for="(c, index) in item.topics" :key="index">
        <div class="user">
        <span class="chatHead">
          <img :src="c.avatar" alt="" width="54" height="54">
        </span>
          <span class="username">{{c.nickname}}</span>
        </div>
        <div class="description">{{c.title}}</div>
        <div class="pic-wrap">
          <img :src="c.picUrl" alt="" width="690" height="376">
        </div>
        <div class="seeCount">
          <i class="iconfont icon-chakan"></i>
          <span class="count">{{c.readCount}}人看过</span>
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
  .card-wrap
    padding 20px 0 0 0
    background-color #f5f5f5
    .card
      width 690px
      padding 34px 28px
      background-color white
      .user
        width 690px
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
      .seeCount
        width 690px
        height 34px
        .icon-chakan
          font-size 28px
        .count
          font-size 24px
          color #999
</style>
