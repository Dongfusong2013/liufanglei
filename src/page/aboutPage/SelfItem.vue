<template>
  <div class="page-view">
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
    <div class="scroll-view cover">
      <div class="bg-title-font title-padding-top">刘方磊</div>
      <div class="line line-top"></div>
      <div class="row-box-space-between box-top">
        <div class="pic-size">
          <img src="/static/about/liufanglei.png" alt height="100%" width="100%" />
        </div>
        <div style="margin-left: 40px;">
          <div class="sm-title-font">任职</div>
          <div class="content-top">
            <div class="sm-content-font">
              <div>北京市建筑设计研究院有限公司(BIAD)</div>
              <div>副总建筑师</div>
            </div>
            <div class="sm-content-font">教授级高级建筑师</div>
            <div class="sm-content-font">国家一级注册建筑师</div>
            <div class="sm-content-font">APEC峰会主会场 总建筑师</div>
            <div class="sm-content-font">一带一路高峰论坛会场 总建筑师</div>
            <div class="sm-content-font">杭州G20峰会主会场 总建筑师</div>
            <div class="sm-content-font">杭州G20峰会室内装饰 总建筑师</div>
            <div class="sm-content-font">厦门金砖会晤主场 总建筑师</div>
            <div class="sm-content-font">福州数字中国会展中心 总建筑师</div>
            <div class="sm-content-font">2012北京国资委刘方磊-国际烽会建筑创作工作室</div>
          </div>
        </div>
        <div>
          <div class="sm-title-font">专题报道</div>
          <div class="content-top">
            <div class="sm-content-font">
              <div>CCTV‐1《开讲啦》20170603</div>
              <div>著名建筑师刘方磊开讲</div>
            </div>
            <div class="sm-content-font">
              <div>CCTV‐1《开讲啦》20170603</div>
              <div>著名建筑师刘方磊开讲</div>
            </div>
            <div class="sm-content-font">
              <div>CCTV‐1《开讲啦》20170603</div>
              <div>著名建筑师刘方磊开讲</div>
            </div>
            <div class="sm-content-font">
              <div>CCTV‐1《开讲啦》20170603</div>
              <div>著名建筑师刘方磊开讲</div>
            </div>
            <div class="blue-font top-space">下载完整简历</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfItem",
  props: {
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
@import "../appStyle";

.top-space{
  margin-top: 64px;
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

.page-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px 120px;
  position: relative;
}
.line-top {
  margin-top: 80px;
  margin-left:-40px;
}
.box-top {
  margin-top: 24px;
}

.line {
  width: 49px;
  height: 7px;
  background-color: black;
}

.scroll-view {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px 50px;
}

.padding-top{
  padding-bottom: 64px;
}

.row-box-space-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pic-size {
  width: 340px;
  height: 424px;
  background-color: aliceblue;
}
.title-padding-top {
  padding-top: 40px;
}

.bg-title-font {
  font-size: 30px;
  font-family: Helvetica;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
}
.sm-title-font {
  font-size: 20px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.content-top {
  margin-top: 15px;
}

.sm-content-font {
  font-size: 16px;
  font-family: Helvetica;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}
.blue-font {
  font-size: 16px;
  font-family: STSong;
  color: rgba(0, 18, 226, 1);
  line-height: 19px;
}
</style>
