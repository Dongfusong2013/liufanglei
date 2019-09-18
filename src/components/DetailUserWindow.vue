<template>
  <div class="pop-pic-view" v-if="showWindow">
    <div class="pop-pic-window row-normal-start">
      <div style="position: absolute; top:10px; right: 10px; color: gray;" @click="closeDetailWindow">
        关闭
      </div>
      <div style="width: 90%; height: 100%; position: relative;" class="column-normal-center ">
        <div class="column-normal-space">
          <div style="width: 830px; height: 600px;">
            <img :src="activePicUrl" width="100%" height="100%">
          </div>
          <div style="display: flex; flex-direction: row;  justify-content: start; align-items: flex-end; width: 420px; overflow: auto; margin-top: 10px;">
            <div v-for="(item, index) in pictures1" :key="index" @click="showDetailPic(index)">
              <div style="width: 30px; height: 30px; margin-right: 8px;" :class="{'border-style':isSelect(index)}">
                <img :src="item.url" height="100%" width="100%">
              </div>
            </div>
          </div>
          <div class="left-arrow arrow-size" @click="scrollTo('left')">
            <img src="/static/works/left_arrow.jpg" height="100%" width="100%">
          </div>
          <div class="right-arrow arrow-size" @click="scrollTo('right')">
            <img src="/static/works/right_arrow.jpg" height="100%" width="100%">
          </div>
        </div>

      </div>
      <div style="width: 30%; height: 100%;" class="border-left">
        <div style="height: 15%; padding-left: 10px;" class="row-normal-start border-bottom">
          <div style="width: 70px; height: 70px;">
            <img src="/static/icon/头像1.png" height="100%" width="100%">
          </div>
          <div style="margin-left: 10px;">
            <div style="margin-bottom: 14px;">光速兔子</div>
            <div>关注</div>
          </div>
        </div>

        <div style="height: 15%; padding-left: 10px;" class="row-normal-start border-bottom">
          <div>北京故宫</div>
        </div>

        <div style="height: 15%; padding-left: 10px;" class="row-normal-start border-bottom">
          <div>一家三口游故宫</div>
        </div>
        <div style="height: 15%; padding-left: 10px;" class="border-bottom">
          <div>小牛在故宫</div>
          <div>小牛在大雄宝殿，跟皇帝龙椅来了一张合影</div>
        </div>
        <div style="height: 15%; padding-left: 10px;" class="row-normal-start border-bottom">
          详情
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'DetailUserWindow',
    props: {
      showWindow: Boolean,
      pictures1: Array,
      closeDetailWindow: Function
    },
    computed: {
      activePicUrl() {
        return this.pictures1[this.activePicIndex].url;
      }
    },
    data() {
      return {
        activePicIndex: 1,
      }
    },
    methods: {
      scrollTo(type) {
        if (type === "left") {
          if (this.activePicIndex > 0) {
            this.activePicIndex -= 1;
          }
        } else {
          if (this.activePicIndex < this.pictures1.length - 1) {
            this.activePicIndex += 1;
          }
        }
      },
      showDetailPic(index) {
        this.activePicIndex = index;
        console.log('index', index);
      },
      isSelect(index) {
        return index === this.activePicIndex;
      }
    }


  }
</script>

<style lang="less" scoped>
  @windowWidth: 1440px;
  @pic_marginRight: 20px;
  @topOffset: 20px;

  .border-style {
    border: solid red 2px
  }

  .border-bottom {
    border-bottom: darkgray solid 1px;
  }

  .border-left {
    border-left: darkgray solid 1px;
  }

  .pop-pic-view {
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 0px;
    color: black;
    width: 1450px;
    height: 800px;
    background-color: rgba(	220,220,220,0.7);
  }


  .pop-pic-window {
    z-index: 100;
    position: fixed;
    top: 20px;
    left: 30px;
    background: white;
    color: black;

    width: 1350px;
    height: 682px;
    box-shadow: 0px 8px 16px 0px rgba(48, 49, 51, 0.1);
    border-radius: 20px;
  }

  .row-normal-start {
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
  }

  .row-normal-center {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .column-normal-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .column-normal-space {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    left: 40px;
    top: 44%;
  }

  .right-arrow {
    position: absolute;
    right: 40px;
    top: 44%;
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
