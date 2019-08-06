<template>
  <div class="aboutItem">
    <div class="leftArrow">
      <img
        src="/static/works/left_arrow.jpg"
        width="28px"
        height="56px"
        v-if="!isFirst()"
        @click="prePic()"
      />
    </div>

    <div class="rightArrow">
      <img
        src="/static/works/right_arrow.jpg"
        width="28px"
        height="56px"
        v-if="!isLast()"
        @click="nextPic()"
      />
    </div>

    <div class="item">
      <div class="picView">
        <PicItem picItem="/static/about/11.png" />
      </div>
      <div class="picView">
        <PicItem picItem="/static/about/11.png" />
        <div class="picView">
          <PicItem picItem="/static/about/11.png" />
        </div>
        <div class="picView">
          <PicItem picItem="/static/about/11.png" />
        </div>
      </div>

      <div class="contentView">
        <div class="titleFont">杭州国际博览中心（改造项目）</div>
        <div class="subTitleFont" style="margin-top: 10px;">第11届G20(杭州G20)峰会主会场</div>
        <div>
          <div class="contentFont" style="margin-top: 34px;">获奖项目</div>
          <div class="subContentFont" style="margin-top: 15px;">
            2017-2018建筑设计奖(室内一等奖)
            2018第十六届中国土木工程詹天佑奖
            2016中国设计红星奖 特别奖
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PicItem from "./PicItem";
export default {
  name: "RightContentItem",
  components: {
    PicItem
  },
  props: {
    title: { type: String },
    subTitle: { type: String },
    rewards: { type: Array },
    pics: { type: Array },
    isFirst: { type: Function },
    isLast: { type: Function },
    nextPic: { type: Function },
    prePic: { type: Function }
  }
};
</script>


<style lang="less" scoped>
@import "./scrollItem.less";
</style>
