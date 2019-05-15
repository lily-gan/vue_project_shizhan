<template>
  <div class="wrap">
    <div class="head">
      <div class="head-top">
        <a href="/" class="logo">
          <img src="../images/logo.png" alt>
        </a>
        <span type="text" class="input">
          <i class="iconfont icon-sousuo"></i>
          <span class="placeholder">搜索商品,共22135款好物</span>
        </span>
        <span class="loginBtn">登录</span>
      </div>
      <div class="head-bottom">
        <div class="wrapList">
          <ul class="list" ref="wrap">
            <li class="active">推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个户清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
          </ul>
          <span class="redLine"></span>
        </div>
        <i class="iconfont icon-arrow_right"></i>
      </div>
    </div>
    <div class="container-wrap">
      <div class="swiper-container" id="swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focus, index) in focusList" :key="index">
            <img :src="focus.picUrl" alt>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <ul class="grow-list">
      <li class="item" v-for="(rule, index) in ruleList" :key="index">
        <a href="javascript:;">
          <i>
            <img src="../images/growlist/g1.png" alt>
          </i>
          <span>{{rule.desc}}</span>
        </a>
      </li>
    </ul>
    <div class="picWrap">
      <div class="picList">
        <a
          href="javascript:;"
          class="single"
          v-for="(pic ,index) in picList.kingKongList"
          :key="index"
        >
          <span class="icon">
            <img :src="pic.picUrl" alt>
          </span>
          <span class="text">{{pic.text}}</span>
        </a>
      </div>
    </div>
    <div class="limitTime">
      <a href="javascript:;">
        <img src="../images/limitTime.png" alt width="100%" height="160">
      </a>
    </div>
    <div class="cardWrap">
      <div class="card-one">
        <div class="left-top">
          <div class="name">性价比之王</div>
          <div class="description">品质惊人的良心替代</div>
          <span>
            <img src="../images/card/c1.png" alt>
          </span>
          <span>
            <img src="../images/card/c2.png" alt>
          </span>
        </div>
        <div class="left-bottom">
          <div class="name">性价比之王</div>
          <div class="description">品质惊人的良心替代</div>
          <span>
            <img src="../images/card/c1.png" alt>
          </span>
          <span>
            <img src="../images/card/c2.png" alt>
          </span>
        </div>
        <div class="right-top">
          <div class="name">性价比之王</div>
          <div class="description">品质惊人的良心替代</div>
          <span>
            <img src="../images/card/c1.png" alt>
          </span>
          <span>
            <img src="../images/card/c2.png" alt>
          </span>
        </div>
        <div class="right-bottom">
          <div class="name">性价比之王</div>
          <div class="description">品质惊人的良心替代</div>
          <span>
            <img src="../images/card/c1.png" alt>
          </span>
          <span>
            <img src="../images/card/c2.png" alt>
          </span>
        </div>
      </div>
    </div>
    <div class="privateWrap">
      <div class="private">
        <div class="title">私人订制</div>
        <div class="pr-swiper-wrap">
          <div class="swiper-container" id="swiper2">
            <ul class="swiper-wrapper">
              <li class="item swiper-slide" v-for="(item, index) in privateList" :key="index">
                <div class="pic">
                  <img :src="item.primaryPicUrl" alt>
                </div>
                <div class="pic-title">
                  {{item.name}}
                  <span class="price">{{item.retailPrice}}元</span>
                </div>
              </li>
            </ul>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="limitShop-wrap">
      <div class="limitShop-title">
        <span class="left">
          <span class="title">限时购</span>
          <span class="clock">
            <span class="hour">{{hourString}}</span>
            <span>:</span>
            <span class="minute">{{minuteString}}</span>
            <span>:</span>
            <span class="seconds">{{secondString}}</span>
          </span>
        </span>
        <a href="#" class="right">
          <span>更多</span>
          <span class="iconfont icon-iconfontjiantou2"></span>
        </a>
      </div>
      <div class="limitShop">
        <div class="product-wrap" v-for="(single , index) in flashSale.itemList" :key="index">
          <div class="product">
            <img :src="single.picUrl" alt width="216" height="216">
          </div>
          <div class="product-price">
            <span class="new-price">
              <span>￥</span>
              <span>{{single.activityPrice}}</span>
            </span>
            <span class="old-price">
              <span>￥</span>
              <span>{{single.originPrice}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="topic">
      <Title/>
      <div class="topic-inner">
        <ul class="list-pic" ref="topicList">
          <li class="item-pic" v-for="(item, index) in topiclist" :key="index">
            <a href="javascript:;">
              <img :src="item.itemPicUrl" alt>
            </a>
            <div class="caption">
              <div class="caption-one">{{item.title}}</div>
              <div class="caption-two">{{item.subtitle}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="crowd">
      <Title/>
      <div class="cnt">
        <div class="zhongchou-item" v-for="(item, index) in crowd" :key="index">
          <span class="left-pic">
            <img :src="item.picUrl" alt="" width="210" height="210">
          </span>
          <span class="right-des">
            <div class="description">{{item.name}}</div>
            <div class="price">{{item.showRetailPrice}}</div>
            <div class="progress">
              <Progress :value="20">
                <div slot="end">{{item.progress}}%</div>
              </Progress>
            </div>
            <div class="support">{{item.supportNum}}</div>
          </span>
        </div>
      </div>
    </div>
    <div class="fashion">
      <img src="../images/fashion.jpg" alt>
    </div>
    <div class="outWrap">
      <div class="fashion-wrap">
        <div class="inner">
          <ul class="fashion-list" ref="luggageList">
            <li class="fashion-item">
              <a href="javascript:;" class="itemWrap">
                <div class="picture">
                  <img src="../images/fashion/x.png" alt="">
                  <div class="selection">3色可选</div>
                </div>
                <div class="description">
                  <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                  <div class="price">
                    <span class="new-price">￥83.8</span>
                    <span class="old-price">￥159</span>
                  </div>
                  <div class="status">送礼特惠</div>
                </div>
              </a>
            </li>
            <li class="fashion-item">
              <a href="javascript:;" class="itemWrap">
                <div class="picture">
                  <img src="../images/fashion/x.png" alt="">
                  <div class="selection">3色可选</div>
                </div>
                <div class="description">
                  <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                  <div class="price">
                    <span class="new-price">￥83.8</span>
                    <span class="old-price">￥159</span>
                  </div>
                  <div class="status">送礼特惠</div>
                </div>
              </a>
            </li>
            <li class="fashion-item">
            <a href="javascript:;" class="itemWrap">
              <div class="picture">
                <img src="../images/fashion/x.png" alt="">
                <div class="selection">3色可选</div>
              </div>
              <div class="description">
                <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                <div class="price">
                  <span class="new-price">￥83.8</span>
                  <span class="old-price">￥159</span>
                </div>
                <div class="status">送礼特惠</div>
              </div>
            </a>
          </li>
            <li class="fashion-item">
              <a href="javascript:;" class="itemWrap">
                <div class="picture">
                  <img src="../images/fashion/x.png" alt="">
                  <div class="selection">3色可选</div>
                </div>
                <div class="description">
                  <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                  <div class="price">
                    <span class="new-price">￥83.8</span>
                    <span class="old-price">￥159</span>
                  </div>
                  <div class="status">送礼特惠</div>
                </div>
              </a>
            </li>
            <li class="fashion-item">
              <a href="javascript:;" class="itemWrap">
                <div class="picture">
                  <img src="../images/fashion/x.png" alt="">
                  <div class="selection">3色可选</div>
                </div>
                <div class="description">
                  <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                  <div class="price">
                    <span class="new-price">￥83.8</span>
                    <span class="old-price">￥159</span>
                  </div>
                  <div class="status">送礼特惠</div>
                </div>
              </a>
            </li>
            <li class="fashion-item">
              <a href="javascript:;" class="itemWrap">
                <div class="picture">
                  <img src="../images/fashion/x.png" alt="">
                  <div class="selection">3色可选</div>
                </div>
                <div class="description">
                  <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                  <div class="price">
                    <span class="new-price">￥83.8</span>
                    <span class="old-price">￥159</span>
                  </div>
                  <div class="status">送礼特惠</div>
                </div>
              </a>
            </li>
            <li class="fashion-item">
              <a href="javascript:;" class="itemWrap">
                <div class="picture">
                  <img src="../images/fashion/x.png" alt="">
                  <div class="selection">3色可选</div>
                </div>
                <div class="description">
                  <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                  <div class="price">
                    <span class="new-price">￥83.8</span>
                    <span class="old-price">￥159</span>
                  </div>
                  <div class="status">送礼特惠</div>
                </div>
              </a>
            </li>
            <li class="fashion-item">
              <a href="javascript:;" class="itemWrap">
                <div class="picture">
                  <img src="../images/fashion/x.png" alt="">
                  <div class="selection">3色可选</div>
                </div>
                <div class="description">
                  <div class="detail">28寸 纯PC“铝框”（非全铝）拉杆箱</div>
                  <div class="price">
                    <span class="new-price">￥83.8</span>
                    <span class="old-price">￥159</span>
                  </div>
                  <div class="status">送礼特惠</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
import Title from '../../components/Title/Title.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Title
  },
  data () {
    return {
      hour: '',
      minute: '',
      second: '',
      promiseTimer: ''
    }
  },
  props: {
    remainTime: {
      // 倒计时间总秒数  自动格式化成  小时  分钟  秒    上面的template把每个{{}} 用span包起来 用:连接，给class写上样式就OK
      default: '10800'
    }
  },
  mounted () {
    this.$store.dispatch('getFocusList')
    this.$store.dispatch('getRuleList')
    this.$store.dispatch('getPicList')
    this.$store.dispatch('getPrivateList')
    this.$store.dispatch('getFlashSale')
    this.$store.dispatch('getTopiclist')
    this.$store.dispatch('getCrowd')
    this.privateScroll()
    this.topicScroll()
    this.luggageList()

    if (this.remainTime > 0) {
      this.hour = Math.floor((this.remainTime / 3600) % 24)
      this.minute = Math.floor((this.remainTime / 60) % 60)
      this.second = Math.floor(this.remainTime % 60)
      this.countDowm()
    }
  },
  methods: {
    privateScroll () {
      const wrap = this.$refs.wrap
      const liWidth = 120
      const liCount = 7
      const space = 50
      const sumwidth = (liWidth + space) * liCount
      wrap.style.width = sumwidth + 'px'
      /*  eslint-disable*/
      new BScroll('.wrapList', {
        scrollX: true,
        click: true
      })
    },
    topicScroll () {
      const topicList = this.$refs.topicList
      const topicWidth = 511
      const topicCount = 3
      const sumWidth = topicWidth * topicCount
      topicList.style.width = sumWidth + 'px'
      /*  eslint-disable*/
      new BScroll('.topic-inner', {
        scrollX: true,
        scrollY: false,
        click: true
      })
    },
    luggageList(){
      /*  无相关数据 */
      const list = this.$refs.luggageList
      const liWidth = 200
      const space = 20
      const liCount = 8
      const listWidth = (liWidth + space) * liCount
      list.style.width = listWidth + 'px'
      new BScroll('.inner',{
        scrollX: true,
        scrollY: false,
        click: true
      })
    },
    /*  倒计时 */
    countDowm () {
      var self = this
      clearInterval(this.promiseTimer)
      this.promiseTimer = setInterval(function () {
        if (self.hour === 0) {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59
            self.minute -= 1
          } else if (self.minute === 0 && self.second === 0) {
            self.second = 0
            self.$emit('countDowmEnd', true)
            clearInterval(self.promiseTimer)
          } else {
            self.second -= 1
          }
        } else {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59
            self.minute -= 1
          } else if (self.minute === 0 && self.second === 0) {
            self.hour -= 1
            self.minute = 59
            self.second = 59
          } else {
            self.second -= 1
          }
        }
      }, 1000)
    },
    formatNum (num) {
      return num < 10 ? '0' + num : '' + num
    }
  },
  computed: {
    ...mapState(['ruleList', 'picList', 'focusList', 'privateList', 'flashSale', 'topiclist','crowd']),
    /*  倒计时 */
    hourString () {
      return this.formatNum(this.hour)
    },
    minuteString () {
      return this.formatNum(this.minute)
    },
    secondString () {
      return this.formatNum(this.second)
    }
  },
  watch: {
    focusList (values) {
      this.$nextTick(() => {
        /* eslint-disable */
        new Swiper('#swiper1', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    },
    privateList (values) {
      this.$nextTick(() => {
        /* eslint-disable */
        new Swiper('#swiper2', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          slidesPerView: 3,
          slidesPerGroup: 3,
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../static/reset/reset.css'
  @import '../../common/stylus/mixins.styl'
  .wrap
    width 100%
    padding-bottom 150px
    overflow hidden
    .head
      position fixed
      z-index 120
      background-color white
      overflow hidden
      .head-top
        width 750px
        height 88px
        line-height 88px
        display flex
        justify-content space-around
        align-items center
        .logo
          display inline-block
          line-height 40px
          width 138 px
          height 40px
          >img
            line-height 40px
            background-size cover
            background-position center
        .input
          width 400px
          height 56px
          display inline-block
          line-height 56px
          font-size 28px
          background-color #ededed
          text-align center
          border-radius 4px
          .placeholder
            color #666
          .icon-sousuo
            font-size 28px
        .loginBtn
          display inline-block
          width 58px
          height 40px
          line-height 40px
          font-size 24px
          border-radius 4px
          text-align center
          border 1px solid #b4282d
          color #b4282d
      .head-bottom
        height 60px
        line-height 60px
        font-size 30px
        display flex
        justify-content space-between
        overflow hidden
        .wrapList
          width 645px
          overflow hidden
          white-space nowrap
          .list
            display flex
            justify-content space-between
            align-items center
            line-height 60px
            position relative
            li
              display inline-block
              margin 0 25px
              flex-shrink 0
              &.active
                color #b4282d
          .redLine
            position absolute
            bottom 0
            left 25px
            width 60px
            height 4px
            background-color #B4282D
        >i
          width 105px
          display inline-block
          font-size 28px
          font-weight 700
          color #7e8c8d
          text-align center
    .container-wrap
      padding-top 148px
      .swiper-container
        position relative
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          white-space nowrap
          .swiper-slide
            clearFix()
            display inline-block
            >img
              display inline-block
              float left
              margin-left 2px
              clearFix()
              width 100%
              height 100%

        .swiper-pagination
          width 100%
          bottom 30px
          .swiper-pagination-bullet
            width 40px
            height 5px
            background ghostwhite
            opacity 0.5
            border-radius 0
            &.swiper-pagination-bullet-active
              background white
              opacity 1
    .grow-list
      display flex
      justify-content space-around
      align-items center
      flex-flow row nowrap
      padding 0 30px
      height 72px
      line-height 72px
      .item
        line-height 32px
        height 32px
        >a
          display inline-block
          height 32px
          line-height 32px
          vertical-align middle
          >i
            display inline-block
            height 32px
            line-height 32px
            >img
              width 32px
              height 32px
          >span
            display inline-block
            height 32px
            font-size 24px
            line-height 32px
            color #b4282d
    .picWrap
      padding-bottom 32px
      .picList
        width 100%
        height 341px
        display flex
        flex-wrap wrap
        justify-content space-around
        .single
          width 110px
          display inline-block
          margin 10px 18px
          text-align center
          .icon
            padding-bottom 10px
            >img
              display inline-block
              width 110px
              height 110px
              margin-bottom 10px
          .text
            width 110px
            height 36px
            color black
            font-size 24px
    .limitTime
      width 100%
      height 160px
      overflow hidden
    .cardWrap
      background-color #f5f5f5
      padding-bottom 20px
      .card-one
        background-color white
        display flex
        flex-wrap wrap
        padding 10px 30px 30px 26px
        .left-top
          width 342.98px
          height 264px
          margin 4px 0 0 4px
          background #F5F5F5
          .name
            color black
            font-size 32px
            padding 20px 0 0 20px
          .description
            color #7e8c8d
            font-size 24px
            padding 20px 0 0 20px
          >span
            display inline-block
            width 150px
            height 150px
            >img
              width 150px
              height 150px
        .left-bottom
          width 342.98px
          height 264px
          margin 4px 0 0 4px
          background #F5F5F5
          .name
            color black
            font-size 32px
            padding 20px 0 0 20px
          .description
            color #7e8c8d
            font-size 24px
            padding 20px 0 0 20px
          >span
            display inline-block
            width 150px
            height 150px
            >img
              width 150px
              height 150px
        .right-top
          width 342.98px
          height 264px
          margin 4px 0 0 4px
          background #F5F5F5
          .name
            color black
            font-size 32px
            padding 20px 0 0 20px
          .description
            color #7e8c8d
            font-size 24px
            padding 20px 0 0 20px
          >span
            display inline-block
            width 150px
            height 150px
            >img
              width 150px
              height 150px
        .right-bottom
          width 342.98px
          height 264px
          margin 4px 0 0 4px
          background #F5F5F5
          .name
            color black
            font-size 32px
            padding 20px 0 0 20px
          .description
            color #7e8c8d
            font-size 24px
            padding 20px 0 0 20px
          >span
            display inline-block
            width 150px
            height 150px
            >img
              width 150px
              height 150px
    .privateWrap
      background-color #f5f5f5
      padding-bottom 50px
      height 440px
      overflow hidden
      .private
        width 100%
        .title
          height 100px
          padding 0 30px 0 30px
          font-size 30px
          line-height 100px
          background-color white
        .pr-swiper-wrap
          width 100%
          height 100%
          .swiper-container
            padding-bottom 60px
            background-color white
            height 350px
            width 100%
            .swiper-wrapper
              height 310px
              width 100%
              list-style none
              padding 0
              margin 0
              .item
                width 216px
                height 310px
                padding 0
                margin 0
                display flex
                flex-direction column
                align-items center
                .pic
                  width 216px
                  height 216px
                  background-color #f5f5f5
                  >img
                    width 216px
                    height 216px
                .pic-title
                  width 216px
                  height 62px
                  white-space normal
                  line-height 36px
                  font-size 24px
                  color black
                  margin-top 0
                  margin-bottom 10px
                  padding 10px
                  .price
                    color #b4282d
            .swiper-pagination
              bottom 35px
              .swiper-pagination-bullet
                margin 0 7px
                width 15px
                height 15px
                &.swiper-pagination-bullet-active
                  background red
                  opacity 1
    .limitShop-wrap
      background-color #f5f5f5
      height 678px
      padding-bottom 20px
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
      .limitShop
        background-color white
        width 100%
        height 578px
        padding 0 10px 0 30px
        .product-wrap
          width 216px
          padding-bottom 30px
          margin-right 20px
          float left
          .product
            width 216px
            height 216px
            background-color #F5F5F5
            margin-bottom 12px
            >img
              width 216px
              height 216px
          .product-price
            width 196px
            height 41px
            padding-left 20px
            .new-price
              color #b4282d
              font-size 27px
            .old-price
              font-size 24px
              color #7F7F7F
              text-decoration line-through
    .topic
      height 518px
      padding-bottom 20px
      background-color #f5f5f5
      .topic-inner
        background-color white
        height 418px
      .list-pic
        height 408px
        padding 0 30px 30px 30px
        overflow hidden
        display flex
        justify-content center
        align-items center
        .item-pic
          width 480px
          height 354px
          padding-bottom 24px
          background-color #f5f5f5
          border-radius 15px
          margin-right 31px
          >a
            display inline-block
            >img
              width 480px
              height 267px
              padding-bottom 16px
          .caption
            width 440px
            padding 0 20px
            .caption-one
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              width 440px
              font-size 28px
              color black
              margin-bottom 6px
              line-height 28px
            .caption-two
              width 440px
              height 41px
              font-size 22px
              color #7F7F7F
              margin-top 10px
    .crowd
      width 100%
      height 590px
      background-color #f5f5f5
      padding-bottom 20px
      .cnt
        width 100%
        height 491px
        background-color white
        top-border-1px(#f5f5f9)
        .zhongchou-item
          display flex
          align-items center
          padding 30px 30px 0
          color #333
          .left-pic
            display inline-block
            width 210px
            height 210px
            margin-right 30px
            background-color #f5f5f5
          .right-des
            display inline-block
            width 450px
            height 168px
            .description
              width 450px
              font-size 28px
              margin 10px
            .price
              color #b4282d
              font-size 28px
              margin-top 20px
            .progress
              width 450px
              height 40px
              font-size 20px
              margin-top 10px
            .support
              width 400px
              margin 15px
              font-size 20px
    .fashion
      width 100%
      height 370px
      margin-bottom 20px
    .outWrap
      width 100%
      background-color #f5f5f5
      padding-bottom 20px
      overflow hidden
      .fashion-wrap
        background-color white
        width 100%
        height 100%
        .inner
          width 690px
          padding 0 30px 30px 30px
          .fashion-list
            clearFix()
            height 425px
            .fashion-item
              display inline-block
              width 200px
              margin-right 20px
              margin-top 45px
              float left
              .itemWrap
                .picture
                  position relative
                  width 200px
                  height 200px
                  background-color #f4f4f4
                  >img
                    width 200px
                    height 200px
                  .selection
                    width 30px
                    height 100px
                    padding 10px 0
                    font-size 20px
                    vertical-align middle
                    text-align center
                    color #b4a078
                    position absolute
                    left 10px
                    top 10px
                    border 1px solid #b4a078
                .description
                  .detail
                    font-size 24px
                    color black
                    padding 10px 0 10px 0
                  .price
                    width 200px
                    padding 10px 0 10px 0
                    .old-price
                      text-decoration line-through
                      color #999
                      padding 10px 0 10px 0
                      font-size 18px
                    .new-price
                      color #CE2424
                      font-size 24px
                      padding 10px 0 10px 0
                  .status
                    width 100px
                    margin 0 30px 0 0
                    border-radius 10px
                    color #CE2424
                    padding 5px
                    text-align center
                    border 1px solid #CE2424
                    font-size 24px
</style>
