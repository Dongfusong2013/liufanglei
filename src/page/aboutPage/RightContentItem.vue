<template>
  <div class="aboutItem">
    <div class="leftArrow">
      <img src="/static/works/left_arrow.jpg" width="28px" height="56px" v-if="!isFirst()" @click="prePic()" />
    </div>
    <div class="rightArrow">
      <img src="/static/works/right_arrow.jpg" width="28px" height="56px" v-if="!isLast()" @click="nextPic()" />
    </div>
    <div class="item cover">
      <div class="picView">
        <div v-for="picItem in pics" :key="picItem">
          <div class="pic pic-maring-right">
            <img :src="picItem" alt="" height="100%" width="100%">
          </div>
        </div>
      </div>
      <div class="contentView content-left-margin">
        <div class="b-titleFont">{{title}}</div>
        <div class="b-contentFont title-content-space">{{subTitle}}</div>
        <div>
          <div class="s-titleFont two-part-space-top">获奖项目</div>
          <div class="s-contentFont title-content-space">
            <div v-for="item in rewards" :key="item">
              <div>{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "RightContentItem",

    components: {
    },
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
    },
    data() {
      return {};
    }
  };
</script>

<style lang="less" scoped>
  @import "../appStyle";

  .leftArrow {
    position: absolute;
    left: 80px;
    top: 300px;
  }

  .content-left-margin{
    margin-left: 40px;
  }

  .rightArrow {
    position: absolute;
    right: 80px;
    top: 300px;
    z-index: 120;
  }

  .pic-maring-right{
      margin-right:20px;
  }

  .aboutItem {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0px 120px;
  }

  .item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .picView {
    width: 620px;
    height: 440px;
  }

  .contentView {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }

  .picView {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }

  .pic {
    width: 287px;
    height: 197px;
    box-shadow: 2px 2px 5px #333333;
  }

  .two-part-space-top {
    margin-top: 40px;
  }

  .title-content-space {
    margin-top: 10px;
  }

  .b-titleFont {
    font-size: 20px;
    font-family: Helvetica-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
  }


  .b-contentFont {
    font-size: 18px;
    font-family: Helvetica;
    color: rgba(102, 102, 102, 1);
    line-height: 22px;

  }

  .s-titleFont {
    font-size: 18px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
  }

  .s-contentFont {
    font-size: 16px;
    font-family: Helvetica;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
  }
</style>
