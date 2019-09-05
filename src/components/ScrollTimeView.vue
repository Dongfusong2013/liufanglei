<template>
  <div>
    <button @click="toStartScrollX" class="toTopStyle"> back to top</button>
    <div class="scroll-view">
      <div class="time-line">
        <div class="slider-node" :style="{left: slider.left + '%', width:  slider.width + '%'}"></div>
        <div v-for="(item, index) in time_tick_list" :key="index">
          <div class="time-tick" :style="{left: timeToLeft(item) + '%'}" @click="gotoTickTime(item)">
            <div class="label">{{item}}</div>
          </div>
        </div>
      </div>
    </div>

    <div style="position: fixed; top:300px; left:0px;" class="scroll-pictures" ref="divScroll">
      <!-- <div class="scroll-pictures"> -->
      <div v-for="(item, index) in pictures" :key="index">
        <div :style="{width: item.width +'px', height:item.height+'px'}" class="picStyle">
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

<script>
  import BScroll from 'better-scroll';
  const windowWidth = 1350;
  const pic_marginRight = 20;
  export default {
    name: 'ScrollTimeView',
    created() {
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
        this.init();
      });
    },

    methods: {

      //点击箭头，滑动scrollX
      scrollTo(type) {
        if (type == "right") {
          if (this.scrollX + 200 > this.maxScrollX - windowWidth) {
            this.scrollX = this.maxScrollX - windowWidth;
          } else {
            this.scrollX += 200;
            console.log("scrollto" + type + ":" + this.scrollX);
          }

        } else {
          if (this.scrollX - 200 < 0) {
            this.scrollX = 0;
          } else {
            console.log("scrollto" + type + ":" + this.scrollX);
            this.scrollX -= 200;
          }
        }
        this.gotoByScroll(this.scrollX);
      },

      gotoByScroll(scrollX) {
        let {
          fixWidth,
          picIndex,
          nowTime
        } = this.scrollXToPicInfo(scrollX);
        this.slider.left = this.timeToLeft(nowTime);
        this.slider.width = this.startPicToWidth(picIndex, fixWidth);
        this.$refs.divScroll.scrollTo(scrollX, 0, 10);
      },

      scrollXToPicInfo(scrollX) {
        let totalWidth = 0;
        let fixWidth = 0;
        let picIndex = 0;
        let nowTime = 0;
        for (let i = 0; i < this.pictures.length; i++) {
          let currentPic = this.pictures[i];
          totalWidth += currentPic.width + pic_marginRight;
          if (totalWidth >= scrollX) {
            fixWidth = currentPic.width + pic_marginRight - (totalWidth - scrollX);
            picIndex = i;
            nowTime = currentPic.time;
            break;
          }
        }
        return {
          fixWidth,
          picIndex,
          nowTime
        }
      },

      //没有误差的
      gotoTickTime(time) {
        console.log("tike", time);
        let nowTime = time;
        let pictureIndex = 0;
        let length = this.time_tick_list.length;
        if (this.time_tick_list[length - 1] === time) {
          this.scrollX = this.maxScrollX - windowWidth;
          this.gotoByScroll(this.scrollX);
          return;
        }

        for (let i = 0; i < this.pictures.length; i++) {
          if (this.pictures[i].time >= time) {
            nowTime = this.pictures[i].time;
            pictureIndex = i;
            console.log("tick", nowTime, pictureIndex);
            break;
          }
        }

        this.slider.left = this.timeToLeft(nowTime);
        this.slider.width = this.startPicToWidth(pictureIndex, 0);
        this.scrollX = this.startPicToScrollX(pictureIndex);
        this.$refs.divScroll.scrollTo(this.scrollX, 0, 10);
      },

      //通过时间计算left的比例
      timeToLeft(nowTime) {
        let left = (nowTime - this.startTime) / this.total_period * 100;
        return left;
      },

      startPicToScrollX(pictureIndex) {
        let scrollX = 0;
        for (let i = 0; i < this.pictures.length && i < pictureIndex; i++) {
          scrollX += this.pictures[i].width + pic_marginRight;
        }
        return scrollX;
      },

      startPicToWidth(pictureIndex, fixWidth) {
        let totalWidth = 0;
        totalWidth -= fixWidth;
        console.log("totalWidth", totalWidth);
        let startTime = this.pictures[pictureIndex].time;
        let endTime = startTime;
        for (let i = pictureIndex; i < this.pictures.length; i++) {
          totalWidth += this.pictures[i].width + pic_marginRight;
          endTime = this.pictures[i].time;
          console.log("add to ", endTime+ "total",totalWidth + "width"+this.pictures[i].width);
          if (totalWidth >= windowWidth) {
            break;
          }
        }
        let width = (endTime - startTime) / this.total_period * 100;
        console.log("==startPicToWidth==", fixWidth, width);
        if (width === 0) {
          width = 1 / this.total_period * 100;
        }
        return width;
      },

      init() {
        //初始化 time_tick_list
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
        //计算最大
        let maxScrollX = 0;
        for (let i = 0; i < this.pictures.length; i++) {
          maxScrollX += this.pictures[i].width + pic_marginRight;
        }
        this.maxScrollX = maxScrollX;
        console.log("maxScrollX", this.maxScrollX);

        //初始化滑块的位置
        this.slider.left = 0;
        this.slider.width = this.startPicToWidth(0, 0);
        this.toStartScrollX();
        console.log(this.time_tick_list);
      },

      toStartScrollX() {
        this.$refs.divScroll.scrollTo(0, 0, 10);
      }

    },

    //多个照片行取并操作
    data() {
      return {
        fixSurplusWidth: 0,
        unit_period: 5,
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
            width: 100,
            height: 100,
          },
          {
            time: 1983,
            url: '',
            width: 300,
            height: 300,
          },
          {
            time: 1984,
            url: '',
            width: 400,
            height: 200,
          },
          {
            time: 1985,
            url: '',
            width: 240,
            height: 200,
          },
          {
            time: 1990,
            url: '',
            width: 300,
            height: 230,
          },
          {
            time: 1995,
            url: '',
            width: 200,
            height: 280,
          },
          {
            time: 1998,
            url: '',
            width: 340,
            height: 180,
          },
          {
            time: 1999,
            url: '',
            width: 400,
            height: 280,
          },
          {
            time: 2000,
            url: '',
            width: 200,
            height: 280,
          },
          {
            time: 2004,
            url: '',
            width: 400,
            height: 380,
          },
          {
            time: 2010,
            url: '',
            width: 100,
            height: 380,
          },
          {
            time: 2016,
            url: '',
            width: 400,
            height: 280,
          },
          {
            time: 2017,
            url: '',
            width: 400,
            height: 180,
          },
          {
            time: 2018,
            url: '',
            width: 400,
            height: 180,
          },
          {
            time: 2019,
            url: '',
            width: 330,
            height: 280,
          },
          {
            time: 2020,
            url: '',
            width: 210,
            height: 170,
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
  @windowWidth: 1350px;
  @pic_marginRight: 20px;

  .arrow-size {
    width: 40px;
    height: 58px;
  }

  .picStyle {
    margin-right: @pic_marginRight;
    background-color: bisque;
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
    width: 1203px;
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


  .toTopStyle {
    position: fixed;
    right: 90px;
    top: 100px;
  }

  .scroll-pictures {
    width: @windowWidth;
    background-color: aliceblue;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    overflow: hidden;
  }
</style>
