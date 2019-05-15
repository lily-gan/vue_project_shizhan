<template>
  <div class="wrap">
    <div class="input-wrap">
      <span class="input">
      <i class="iconfont icon-sousuo"></i>
      <span class="placeholder">搜索商品,共22135款好物</span>
    </span>
    </div>
    <div class="content">
      <div class="leftNav-wrap">
        <div class="navList">
          <ul class="list">
            <li class="item" :class="{active: currentIndex === index}" v-for="(item , index) in categoryList" :key="index" @click="getIndex(index)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="rightContent" v-if="categoryList[currentIndex]">
        <div class="r-wrap">
          <ContentOne :currentIndex="currentIndex" v-if="categoryList[currentIndex].type===1"/>
          <ContentTwo :currentIndex="currentIndex" v-if="categoryList[currentIndex].type===0"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import ContentOne from '../../components/classify-content1/index.vue'
import ContentTwo from '../../components/classify-content2/index.vue'
import {mapState} from 'vuex'
export default {
  components: {
    ContentOne,
    ContentTwo
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  mounted () {
    this.$store.dispatch('getCategoryList')
  },
  computed: {
    ...mapState(['categoryList'])
  },
  methods: {
    getIndex (index) {
      this.currentIndex = index
    }
  },
  watch: {
    categoryList () {
      this.$nextTick(() => {
        /*  eslint-disable  */
        new BScroll('.navList', {
          scrollY: true,
          click: true
        }),
          new BScroll('.rightContent', {
            scrollY: true,
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
  .input-wrap
    bottom-border-1px(lightgray)
    position fixed
    z-index 1000
    width 100%
    height 88px
    margin-bottom 5px
    background-color white
    .input
      width 690px
      height 56px
      line-height 56px
      display inline-block
      font-size 28px
      background-color #ededed
      margin 16px 30px
      text-align center
      border-radius 10px
      vertical-align center
      .placeholder
        color: #666
      .icon-sousuo
        font-size 30px
  .content
    width 100%
    clearFix(all)
    .leftNav-wrap
      width 100px
      padding-bottom 50px
      float left
      .navList
        width 162px
        margin-top 100px
        padding-bottom 100px
        height 1000px
        .list
          width 162px
          margin-top 120px
          .item
            width 162px
            height 50px
            line-height 50px
            margin-top 40px
            font-size 28px
            text-align center
            &.active
              color #ab2b2b
    .rightContent
      width 528px
      height 1200px
      margin-top 120px
      padding 30px 30px 26px 30px
      float right
      .r-wrap
        width 528px
</style>
