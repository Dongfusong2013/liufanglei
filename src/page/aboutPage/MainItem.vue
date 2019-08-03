<template>
  <div class="aboutContent">
    <div class="imageView">
      <img src="/static/about/大图@2x.png" height="100%" />
    </div>
    <div class="contentView">
      <div class="title">
        实践与荣誉
        <div class="line-style"></div>
      </div>
      <div>
        <div class="content">工作室始终坚持进行顶级建筑实践，为中国 乃至世界，贡献美与智慧。</div>
        <div class="detail">
          工作室始终坚持进行顶级建筑实践，为中国和世界，贡献值美学智慧。工作室始终坚持进行顶级建筑实践，
          为中国和世界，贡献值美学智慧。工作室始终坚持进行顶级建筑实践，为中国和世界，贡献值美学智慧。
        </div>
      </div>
      <div class="nextArrow">
        <img src="/static/about/下一页@2x.png" alt @click="nextPic()" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FrontItem",
  props: {
    nextPic: {
      type: Function
    }
  }
};
</script>

<style lang="less" scoped>
.imageView {
  width: 850px;
  height: 620px;
}

.contentView {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 4.875rem;
  padding-right: 120px;
}

.content {
  margin-top: 174px;
  font-size: 20px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(69, 69, 69, 1);
  line-height: 28px;
}

.detail {
  margin-top: 18px;
  width: 392 px;
  font-size: 16px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(69, 69, 69, 1);
  line-height: 22px;
}

.nextArrow {
  position: absolute;
  width: 28px;
  height: 28px;
  bottom: 72px;
  right: 120px;
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
.line-style {
  margin-top: 0.75rem;
  background-color: black;
  width: 50px;
  height: 4px;
}
</style>
