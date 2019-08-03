<template>
  <div class="aboutItem1">
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
      <div class="content">
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
          <div class="pic">
            <div class="innerPic">
              <img :src="picItem" height="100%" width="100%" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftContentItem",
  props: {
    title:{type:String},
    subTitle:{type:String},
    rewards: {type:Array},
    pics:{type:Array},    
    isFirst: { type: Function },
    isLast: { type: Function },
    nextPic: { type: Function },
    prePic: { type: Function }
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.aboutItem1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}
.item {
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: antiquewhite;
}
.content {
  width: 384px;
}

.title {
  font-size: 20px;
  font-family: PingFangSC-Semibold, serif;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
  margin-bottom: 24px;
}
.titleFont {
  font-size: 20px;
  font-family: Helvetica-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
}

.subTitleFont {
  font-size: 18px;
  font-family: Helvetica;
  color: rgba(102, 102, 102, 1);
  line-height: 22px;
}

.contentFont {
  font-size: 18px;
  font-family: Helvetica-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}

.subContentFont {
  font-size: 16px;
  font-family: Helvetica;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}

.title {
  font-size: 30px;
}
.picView {
  width: 650px;
  height: 440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.pic {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 210px;
  margin: 10px;
  background: linear-gradient(
    90deg,
    rgba(196, 232, 250, 1) 0%,
    rgba(250, 233, 207, 1) 100%
  );
}

.innerPic {
  width: 288px;
  height: 198px;
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
  z-index: 120;
}
</style>

