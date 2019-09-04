<template>
  <div>
    <div class="scroll-view">
      <div class="time-line">
        <div class="slider-node" :style="{left: slider.left + '%', width:  slider.width + '%'}"></div>

        <div v-for="(item, index) in time_tick_list" :key="index">
          <div class="time-tick" :style="{left: timeToLeft(item) + '%'}" @click="goto(item)">
            <div class="label">{{item}}</div>
          </div>
        </div>
      </div>
      <button @click="toFirst"> to first</button>
    </div>


    <div style="position: fixed; top:300px; left:0px; width: 100%;" class="scroll-pictures" ref="divScroll">
      <!-- <div class="scroll-pictures"> -->
      <div v-for="(item, index) in pictures" :key="index">
        <div style="margin-left: 0px; height: 300px; width: 400px; background-color: #2483D5;">
          <!-- <img src="" height="100%" width="100%"> -->
          {{item.time}}
        </div>
      </div>
      <!-- </div> -->
      <div class="left-arrow arrow-size" @click="scrollTo('left')">
        <img src="/static/works/left_arrow.jpg" height="100%" width="100%">
      </div>
      <div class="right-arrow arrow-size" @click="scrollTo('right')">
        <img src="/static/works/right_arrow.jpg" height="100%" width="100%">
      </div>
    </div>
  </div>


</template>
,
<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'ScrollTimeView',
    created() {
      this.initTimeTickList();
      this.$nextTick(() => {
        let scroll = new BScroll(this.$refs.divScroll, {
          click: true,
          startX: 0,
          startY: 0,
          scrollX: true,
          scrollY: false,
          probeType: 2,
          momentum: true,
        });
        scroll.on('scroll', (pos) => {
          console.log("scroll position...", pos);
          this.scrollX = pos.x;
        });
      });
    },
    watch: {
      scrollX(newVal) {
        this.gotoTick(this.posToTime(newVal));
      }
    },
    methods: {
      goto(time) {
        let length  = this.time_tick_list.length;
        if (time == this.time_tick_list[length - 1]){
            return;
        }
        this.scrollX = this.timeToPos(time);
      },
      initTimeTickList() {
        let period = 0;
        let currentTime = this.startTime;
        this.time_tick_list.push(this.startTime);
        while (currentTime < this.endTime) {
          currentTime += this.unit_period;
          this.time_tick_list.push(currentTime);
          if (currentTime >= this.endTime) {
            this.total_period = currentTime - this.startTime;
            console.log("total period", this.total_period);
            break;
          }
        }
        this.slider.left = 0;
        this.slider.width = this.timeToWidth(this.startTime);
        console.log(this.time_tick_list);
      },
      posToTime(scrollX) {
        let pic = this.posToPic(scrollX);
        return pic.time;
      },
      posToPic(scrollX) {
        let x = 0;
        for (let i = 0; i < this.pictures.length; i++) {
          x += this.pictures[i].width;
          if (x > scrollX) {
            return this.pictures[i];
          }
        }
      },
      timeToPos(time) {
        let t = 0;
        let scrollX = 0;
        for (let i = 0; i < this.pictures.length; i++) {
          t += this.pictures[i].time;
          scrollX += this.pictures[i].width;
          if (t >= time) {
            return scrollX;
          }
        }
        return 0;
      },
      toFirst() {
        console.log("to first");
        this.scrollX = 0;
      },

      timeToLeft(nowTime) {
        let left = (nowTime - this.startTime) / this.total_period * 100;
        return left;
      },
      timeToWidth(nowTime) {
        let width = this.calcShowPeriod(nowTime) / this.total_period * 100;
        console.log("---width---", width);
        return width;
      },
      gotoTick(nowTime) {
        this.slider.left = this.timeToLeft(nowTime);
        this.slider.width = this.timeToWidth(nowTime);
        this.$refs.divScroll.scrollTo(this.scrollX, 0, 10);
      },
      calcShowPeriod(beginTime) {
        const windowWidth = 1400;
        let width = 0;
        let endTime = beginTime;
        for (let i = 0; i < this.pictures.length; i++) {
          let currentPicture = this.pictures[i];
          if (currentPicture.time > beginTime) {
              width += currentPicture.width;
          }
          if (width > windowWidth) {
            endTime = currentPicture.time;
            break;
          }
        }
        console.log("-page period--", endTime - beginTime);
        return endTime - beginTime;
      },
      scrollTo(type) {
        console.log("scrollto" + type);
        if (type == "right") {
          this.scrollX += 400;
        } else {
          this.scrollX -= 400;
        }
      }
    },

    data() {
      return {
        unit_period: 10,
        total_period: 0,
        endTime: 2019,
        startTime: 1980,
        startX: 0,
        scrollX: 0,
        scroll: null,
        slider: {
          left: 0,
          width: 0,
        },
        pictures: [{
            time: 1980,
            url: '',
            width: 400,
          },
          {
            time: 1990,
            url: '',
            width: 400,
          },
          {
            time: 1995,
            url: '',
            width: 400,
          },
          {
            time: 2000,
            url: '',
            width: 400,
          },
          {
            time: 2004,
            url: '',
            width: 400,
          },
          {
            time: 2010,
            url: '',
            width: 400,
          },

          {
            time: 2016,
            url: '',
            width: 400,
          },
          {
            time: 2017,
            url: '',
            width: 400,
          },

          {
            time: 2018,
            url: '',
            width: 400,
          },
          {
            time: 2020,
            url: '',
            width: 400,
          },

        ],

        time_tick_list: [
          // {time:'', content:''}
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
    top: 420px;
  }

  .right-arrow {
    position: fixed;
    right: 40px;
    top: 420px;
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
    width: 1300px;
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
    width: 100%;
    overflow: hidden;
  }
</style>
