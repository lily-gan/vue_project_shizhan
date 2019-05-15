<template>
  <div class="wrap">
    <div class="picture" v-if="categoryList[0]">
      <img :src="categoryList[currentIndex].wapBannerUrl" alt="" width="525" height="196">
    </div>
    <div class="typeList-wrap">
      <ul class="typeList" v-if="categoryList[currentIndex]">
        <li class="single-wrap" v-for="(item, index) in categoryList[currentIndex].subCateList" :key="index">
          <div class="single">
            <div class="pic">
              <img :src="item.bannerUrl" alt="" width="144" height="144">
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </li>
      </ul>
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

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap
    .picture
      width 528px
      height 192px
      margin-bottom 32px
    .typeList-wrap
      width 528px
      margin-bottom 12px
      .typeList
        width 528px
        .single-wrap
          width 144px
          margin-right 34px
          float left
          &:nth-child(3n)
            margin-right 0
          .single
            width 144px
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
