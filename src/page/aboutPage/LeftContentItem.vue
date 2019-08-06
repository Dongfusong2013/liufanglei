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
      <div class="contentView">
        <div class="titleFont">{{title}}</div>
        <div class="subTitleFont" style="margin-top: 10px;">{{subTitle}}</div>
        <div>
          <div class="contentFont" style="margin-top: 34px;">获奖项目</div>
          <div class="subContentFont" style="margin-top: 15px;">
            <div v-for="item in rewards" :key="item">
              <div>{{item}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="picView">
        <div v-for="picItem in pics" :key="picItem">
          <PicItem :picItem="picItem"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PicItem from './PicItem'

export default {
  name: "LeftContentItem",
  components:{
      PicItem,
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
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>

@import './scrollItem.less';

</style>

