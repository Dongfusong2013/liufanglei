<template>
  <div class="padding-left-view">
    <div class="scrollContainer cover">
      <div class="contentView conent-margin-left">
        <div class="bg-title-font title-top">
          繁简在心
        </div>
        <div>
          <div class="sm-title-font sm-title-content-space-bottom">
            至繁殖简，趣舍万殊
          </div>
          <div class="content-font">
            纷繁躁动当下，化繁为简滋养人生的一种境界
          </div>
        </div>
        <div style="align-self: flex-end; margin-bottom: 64px; display: flex; flex-direction: row;
         align-items: center; margin-right: 30px;" @click="nextPic()">
          <div class="nextFont" style="margin-right: 10px;">
            NEXT
          </div>
          <div class="next-pic-size">
            <img src="/static/index/next-btn.png" alt="" height="100%" width="100%">
          </div>
        </div>
      </div>
      <div class="pic-size">
        <img src="http://pw0ddarc5.bkt.clouddn.com/%E4%B8%AA%E4%BA%BA%E4%BD%9C%E5%93%81.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainView',
    props:{
      nextPic:{
        type:Function
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../appStyle.less';

  .padding-left-view {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 60px;
  }

  .nextFont {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(69, 69, 69, 1);
    line-height: 20px;

  }

  .scrollContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .title-top {
    margin-top: 40px;
  }

  .sm-title-content-space-bottom {
    margin-bottom: 20px;
  }

  .next-pic-size {
    width: 48px;
    height: 48px;
  }

  .contentView {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 100%;
    width: 100%;
  }

  .conent-margin-left {
    margin-left: 72px;
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
    color: rgba(69, 69, 69, 1);
    line-height: 28px;
  }

  .content-font {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(69, 69, 69, 1);
    line-height: 22px;
  }

  .pic-size {
    width: 840px;
    height: 600px;
  }
</style>
