<template>
  <div class="pageView">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <div class="content-view">
      <div class="title-font">LFL 刘方磊工作室</div>
      <div id="content-box" class="space-box item-box-size content-box-margin-top">
        <div @click="goTo('/main',0)">
          <span style="margin-right: 8px;">交流</span>
          <span>NFOMATION</span>
        </div>
        <div @click="goTo('/project',1)">
          <span style="margin-right: 8px;">项目</span>
          <span>PRJECTS</span>
        </div>
        <div @click="goTo('/design',2)">
          <span style="margin-right: 8px;">作品</span>
          <span>ARTIST</span>
        </div>
        <div @click="goTo('/about',3)">
          <span style="margin-right: 8px;">关于</span>
          <span>ABOUT</span>
        </div>
        <div @click="goTo('/civilization',4)">
          <span style="margin-right: 8px;">文明印迹</span>
          <span>MARK OF CIVILIZATION</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Cover",

  methods: {
    ...mapMutations("menueActive", ["setActiveIndex"]),

    goTo(path, index) {
      this.$router.push(path);
      this.setActiveIndex(index);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../appStyle";

.next-pic-size {
  height: 48px;
  width: 96px;
}

#content-box > div {
  color: white;
}

.title-font {
  font-size: 36px;
  font-family: SFProDisplay-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 43px;
}

.item-box-size {
  // width: 350px;
  height: 350px;
}

.content-box-margin-top {
  margin-top: 123px;
}

.space-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.self-item {
  align-self: flex-end;
}

.content-font {
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}

.pageView {
  width: 100%;
  height: 100%;
  // background-color: aliceblue;
  box-sizing: border-box;
  padding: 64px 120px;
  position: relative;
}

.content-view {
  width: 100%;
  height: 100%;
}
</style>
