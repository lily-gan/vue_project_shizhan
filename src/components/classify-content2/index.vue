<template>
  <div class="wrap">
    <div class="sm-wrap">
      <div class="picture" v-if="categoryList[0]">
        <img :src="categoryList[currentIndex].wapBannerUrl" alt="" width="525" height="196">
      </div>
      <div class="m-wrap" v-if="categoryList[currentIndex]">
        <div class="cateList" v-for="(item, index) in categoryList[currentIndex].subCateList" :key="index">
          <div class="cateName">{{item.name}}</div>
          <ul class="list">
            <li class="cate" v-for="(c , index) in item.categoryList" :key="index">
              <div class="pic">
                <img :src="c.wapBannerUrl" alt="" width="144" height="144">
              </div>
              <div class="name">{{c.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    currentIndex: Number
  },
  computed: {
    ...mapState(['categoryList'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap
    .sm-wrap
      .picture
        width 528px
        height 192px
        margin-bottom 32px
      .m-wrap
        .cateList
          width 528px
          margin-bottom 12px
          overflow hidden
          .cateName
            width 528px
            height 41px
            margin-bottom 24px
            font-size 24px
            bottom-border-1px(lightgray)
          .list
            width 528px
            .cate
              width 144px
              margin-right 34px
              float left
              &:nth-child(3n)
                margin-right 0
              .pic
                width 144px
                height 144px
              .name
                width 144px
                height 72px
                font-size 24px
                vertical-align center
                text-align center
</style>
