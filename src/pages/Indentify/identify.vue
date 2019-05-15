<template>
  <div class="wrap">
    <header>
      <Head>
        <div class="find" slot="mid">
          <span class="discovery">发现</span>
          <span class="select-home">甄选家</span>
        </div>
      </Head>
      <div class="tabList">
        <ul class="list" v-if="identifyList.length>0">
          <li class="tab" v-for="(item, index) in identifyList[0].navList" :key="index">{{item.tabName}}</li>
        </ul>
      </div>
      <div class="bar"></div>
    </header>
    <div class="cardList">
      <CardOne/>
      <CardTwo/>
      <CardThree/>
    </div>
  </div>
</template>

<script>
import CardOne from '../../components/Card-one/Card-one.vue'
import CardTwo from '../../components/CardTwo/CardTwo.vue'
import CardThree from '../../components/CardThree/CradThree.vue'
import Head from '../../components/Head/Head.vue'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  components: {
    CardOne,
    CardTwo,
    CardThree,
    Head
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  mounted () {
    this.$store.dispatch('getIndentify')
  },
  computed: {
    ...mapState(['identifyList'])
  },
  watch: {
    identifyList () {
      this.$nextTick(() => {
        /*  eslint-disable */
        new BScroll('.tabList',{
          scrollX: true,
          click: true
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.wrap
  width 750px
  height 100px
  position relative
  >header
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
        height 100px
        .icon-shouye
          font-size 46px
          height 100px
          line-height 100px
      .find
        width 320px
        height 100px
        text-align center
        .discovery
          color #b4282d
          font-weight: bold
          font-size 40px
          text-align center
          height 100px
          line-height 100px
          margin-right 20px
        .select-home
          color #7F7F7F
          font-size 30px
          text-align center
          height 100px
          line-height 100px
      .search
        width 142px
        height 100px
        .icon-sousuo
          font-size 44px
          line-height 100px
          display inline-block
          padding 0 10px 0 10px
        .icon-gouwuche
          font-size 44px
          display inline-block
          padding 0 10px 0 10px
          line-height 100px

    .tabList
      width 750px
      overflow: hidden
      white-space: nowrap
      position relative
      &::after
        content ''
        position absolute
        left 0
        bottom 0
        width 100%
        height 4px
        background-color #e9e9e9
      .list
        display flex
        justify-content space-between
        align-items center
        line-height 60px
        width 1200px
        .tab
          display inline-block
          line-height 72px
          height 72px
          margin 0 25px
          font-size 28px
          color #7F7F7F
          &.active
            color #b4282d
    .bar
      width 60px
      height 4px
      background-color #B4282D
      margin-left 20px
  .cardList
    padding-top 177px
</style>
