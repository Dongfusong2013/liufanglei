<template>
  <div class="aboutItem">
    <div class="leftArrow">
      <img
        src="/static/index/left-white.png"
        width="28px"
        height="56px"
        v-if="!isFirst()"
        @click="prePic()"
      />
    </div>

    <div class="rightArrow">
      <img
        src="/static/index/right-white.png"
        width="28px"
        height="56px"
        v-if="!isLast()"
        @click="nextPic()"
      />
    </div>

    <div class="wholeContainer">
      <div class="item cover main-margin-top">
        <div class="topDown">
          <div class="lr_item part-vertical-bottom">
            <div class="sm-pic">
              <img src="/static/about/21.png" alt width="100%" height="100%" />
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
            <div class="sm-pic">
              <img src="/static/about/21.png" alt width="100%" height="100%" />
            </div>

            <div class="contentView">
              <div class="titleFont">
                <div>淄博市齐盛国际大酒店</div>
                <div>(淄博国宾馆)</div>
              </div>
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
          <div class="lr_item part-vertical-bottom">
            <div class="sm-pic">
              <img src="/static/about/21.png" alt width="100%" height="100%" />
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
            <div class="sm-pic">
              <img src="/static/about/21.png" alt width="100%" height="100%" />
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
export default {
  name: "FourItems",
  components: {},
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    rewards: {
      type: Array
    },
    pics: {
      type: Array
    },
    isFirst: {
      type: Function
    },
    isLast: {
      type: Function
    },
    nextPic: {
      type: Function
    },
    prePic: {
      type: Function
    }
  }
};
</script>


<style lang="less" scoped>
@import "../appStyle.less";

.main-margin-top {
  margin-top: 20px;
}

.aboutItem {
  width: 100%;
  height: 100%;
  position: relative;
}

.wholeContainer {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px 120px;
}

.part-vertical-bottom {
  margin-bottom: 89px;
}

.item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.leftArrow {
  position: absolute;
  left: 80px;
  top: 300px;
}

.rightArrow {
  position: absolute;
  right: 80px;
  top: 300px;
}

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

.innerMargin {
  margin-bottom: 13px;
}

.topDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // padding: 0 10px;
}

.sm-pic {
  width: 245px;
  height: 171px;
  box-shadow: 2px 2px 5px #333333;
}

.lr_item {
  box-sizing: border-box;
  width: 570px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

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
