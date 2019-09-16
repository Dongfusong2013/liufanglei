<template>
  <div class="pop-pic-window column-normal-center" v-if="showWindow" @click="closeDetailWindow">
    <div class="detail-pic-content column-normal-center">
      <div style="margin-top: 10px;">
        在2019年8月19日那时....
      </div>
      <div class="detail-pic-size" style="margin-top: 50px;">
        <img src="/static/location/1.png" height="100%" width="100%">
      </div>
      <div style="margin-top: 10px;">
        明国时期最厉害的武林高手齐聚一堂
      </div>
    </div>
    <div style="display: flex; flex-direction: row;  justify-content: center; align-items: center;width: 420px; overflow: auto;">
      <!-- <div v-for="(item, index) in pictures1" :key="index">
        <div style="width: 40px; height: 40px; margin-right: 8px; margin-bottom: 16px;">
          <img :src="item.url" height="100%" width="100%">
        </div>
      </div> -->
    </div>
    <div style="height: 100px; width: 100%; background-color: white;
    box-shadow:0px 8px 16px 0px rgba(48,49,51,0.1);
    border-radius:20px;"
      class="detail-row">
      <div style="width: 60px; height: 60px; margin-left: 16px;">
        <img src="/static/icon/头像.png" height="100%" width="100%">
      </div>
      <div class="detail-title-font" style="margin-left: 23px;">
        光速兔子
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailUserWindow',
    props:{
      showWindow:Boolean,
      pictures1:Array,
      closeDetailWindow:Function
    },

  }
</script>

<style lang="less" scoped>
  @windowWidth: 1440px;
  @pic_marginRight: 20px;
  @topOffset: 20px;

  .pop-pic-window {
    z-index: 100;
    position: fixed;
    top: 40px;
    left: 90px;
    background: rgba(216, 216, 216, 1);
    color: black;

    width: 1200px;
    height: 732px;
    box-shadow: 0px 8px 16px 0px rgba(48, 49, 51, 0.1);
    border-radius: 20px;
  }

  .column-normal-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pic-desc-font {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 20px;
  }

  .pic-title-font {
    // z-index: 4;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .arrow-size {
    width: 28px;
    height: 48px;
  }

  .picStyle {
    margin-right: @pic_marginRight;
    background-color: bisque;
  }

  .left-arrow {
    position: absolute;
    left: 80px;
    top: 270px + @topOffset;
  }

  .right-arrow {
    position: absolute;
    right: 80px;
    top: 270px + @topOffset;
  }

  .slider-node {
    position: absolute;
    top: -6px;
    height: 14px;
    // left:10%;
    background-color: #939598;
    border-radius: 7px;
    z-index: 2;
    transition: left .5s, width .5s;
  }

  .time-line {
    border-top: 1px solid #939598;
    display: flex;
    color: #939598;
    height: 100%;
    width: 1280px;
  }

  .label {
    /* position: absolute; */
    font-weight: 700;
    font-size: .65rem;
    letter-spacing: .025em;
    line-height: 1;
    width: 100px;
    text-align: center;
    margin: -15px 0 0 -50px;
    padding-top: 30px;
    text-transform: uppercase;
  }

  .label:hover {
    color: black;
  }

  .time-tick:before {
    content: "";
    display: block;
    height: 12px;
    border-left: 1px solid #939598;
    margin-top: -6px;
  }


  .time-tick {
    position: absolute;
    opacity: 1;
    width: 1px;
    cursor: pointer;
    // z-index: 1;
    font-weight: 300;
    /* ?? */
    vertical-align: baseline;
  }

  .scroll-view {
    display: flex;
    justify-content: center;
    position: absolute;
    cursor: ew-resize;

    width: 87.5vw;
    height: 2rem;
    /* height: 800px; */
    vertical-align: baseline;
  }

  .toTopStyle {
    position: absolute;
    right: 80px;
    top: @topOffset;
    // align-self: flex-end;
  }

  .first-row {
    top: @topOffset + 60px;
    left: 0px;
    // margin-top: 80px;
  }

  .second-row {
    top: @topOffset + 110px;
    left: 0px;
    // margin-top: 40px;
  }

  .scroll-pictures {
    position: relative;
    width: @windowWidth;
    // background-color: aliceblue;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    overflow: hidden;
  }
</style>
