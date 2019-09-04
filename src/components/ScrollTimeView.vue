<template>
  <div>
    <div class="scroll-view">
      <div class="time-line">
        <div class="slider-node" :style="{left: slider.left + '%', width:  slider.width + '%'}"></div>

        <div v-for="(item, index) in time_tike_list" :key="index">
          <div class="time-tick" :style="{left: item.left + '%'}" @click="gotoTick(item)">
            <div class="label">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div style="position: absolute; top:300px; left:0px; width: 100%;">
      <div class="left-arrow arrow-size">
        <img src="/static/works/left_arrow.jpg" height="100%" width="100%">
      </div>
      <div class="right-arrow arrow-size">
        <img src="/static/works/right_arrow.jpg" height="100%" width="100%">
      </div>
      <div class="scroll-pictures" v-for="(item, index) in ">
        <div style="height: 100%; width: 500px; background-color: #2483D5;">
          <img src="" height="100%" width="100%">
         </div>
      </div>
    </div>
    </div>


</template>
,
<script>
  export default {
    name: 'ScrollTimeView',
    methods: {
      gotoTick(item) {
        this.slider.left = item.left;
        this.slider.width = item.period / this.total_period * 100;
      }
    },

    data() {
      return {
        current_period: 3,
        total_period: 100,

        slider: {
          left: 40,
          width: 4.48,
        },

        time_tike_list: [{
            content: '目前',
            left: 0,
            period: 1.4,
            startPos: 1,
            pictures: []
          },
          {
            content: '2010',
            left: 10,
            period: 1,
            startPos: 5,
            pictures: []
          },
          {
            content: '2000',
            left: 20,
            period: 4,
            startPos: 10,
            pictures: []
          },
          {
            content: '1990',
            left: 30,
            period: 3,
            startPos: 50,
            pictures: []
          },
          {
            content: '1980',
            left: 40,
            period: 5,
            startPos: 60,
            pictures: []
          },
        ],
      }
    }
  }
</script>

<style lang="less">
  .arrow-size {
    width: 40px;
    height: 58px;
  }

  .left-arrow {
    position: fixed;
    left: 40px;
    top: 450px;
  }

  .right-arrow {
    position: fixed;
    right: 40px;
    top: 450px;
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
    width: 1000px;
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
    z-index: 1;
    font-weight: 300;
    /* ?? */
    vertical-align: baseline;
  }

  .scroll-view {
    position: fixed;
    cursor: ew-resize;
    left: 6.25vw;
    top: 10.1rem;
    width: 87.5vw;
    height: 2rem;
    /* height: 800px; */
    vertical-align: baseline;
  }


  .scroll-pictures {
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    width: 100%;
    height: 400px;
    overflow-x: scroll;
    /* 定义超出此盒子滚动 */
    overflow-y: none;
  }
</style>
