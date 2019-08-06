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

    <div class="aboutItem">
      <div class="item">
        <div class="topDown">
          <div class="lr_item">
            <div class="sm-picView">
              <div class="sm-pic">
                <img src="/static/about/21.png" alt width="100%" height="100%" />
              </div>
            </div>
            <div class="contentView">
              <div class="titleFont">北京香港马会会所</div>
              <div>
                <div class="subTitleFont innerMargin">项目获奖</div>
                <div class="subContentFont">
                  ◆ 2018年 北京市第十五届优秀工程设计
                  三等奖
                </div>
              </div>
            </div>
          </div>
          <div class="lr_item">
            <div class="sm-picView">
              <div class="sm-pic">
                <img src="/static/about/21.png" alt width="100%" height="100%" />
              </div>
            </div>
            <div class="contentView">
              <div class="titleFont">淄博市齐盛国际大酒店 (淄博国宾馆)</div>
              <div>
                <div class="subTitleFont innerMargin">项目获奖</div>
                <div class="subContentFont">
                  ◆ 2013年 北京市第十七届优秀工程设计
                  三等奖
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="topDown">
          <div class="lr_item">
            <div class="sm-picView">
              <div class="sm-pic">
                <img src="/static/about/21.png" alt width="100%" height="100%" />
              </div>
            </div>
            <div class="contentView">
              <div class="titleFont">首都师范大学国际文化学院大厦</div>
              <div>
                <div class="subTitleFont innerMargin">项目获奖</div>
                <div class="subContentFont">
                  ◆ 2013年 北京市第十三届优秀工程设计
                  三等奖
                </div>
              </div>
            </div>
          </div>
          <div class="lr_item">
            <div class="sm-picView">
              <div class="sm-pic">
                <img src="/static/about/21.png" alt width="100%" height="100%" />
              </div>
            </div>
            <div class="contentView">
              <div class="titleFont">北航科技大厦</div>
              <div>
                <div class="subTitleFont innerMargin">项目获奖</div>
                <div class="subContentFont">
                  ◆ 2013年 北京市第十二届优秀工程设计
                  三等奖
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PicItem from "./PicItem";
export default {
  name: "FourItems",
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

.titleFont {
  font-size: 20px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}

.subTitleFont {
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}

.subContentFont {
  font-size: 16px;
  font-family: Helvetica;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}

.item {
  margin-top: 80px;
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
}

.innerMargin {
  margin-bottom: 13px;
}

.topDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.sm-picView {
  width: 254px;
  height: 180px;
  background: linear-gradient(
    90deg,
    rgba(196, 232, 250, 1) 0%,
    rgba(250, 233, 207, 1) 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .sm-pic {
    width: 245px;
    height: 171px;
  }
}
.lr_item {
  box-sizing: border-box;
  width: 570px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 89px;
  .contentView {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 303px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>

