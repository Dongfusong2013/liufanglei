<template>
  <div style="position: relative; height: 100%; width: 100%;">
    <div class="scroll-view" style="margin-top: 10px; margin-left: 80px;">
      <div class="time-line">
        <div class="slider-node" :style="{left: slider.left + '%', width:  slider.width + '%'}"></div>
        <div v-for="(item, index) in time_tick_list" :key="index">
          <div class="time-tick" :style="{left: timeToLeft(item) + '%'}" @click="gotoTickTime(item)">
            <div class="label">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-pictures first-row" ref="divScroll_row1">
      <div v-for="(item, index) in pictures1" :key="index">
        <div :style="{position:'relative', width: item.width +'px', height:item.height+'px'}" class="picStyle"
          @mouseover="showOver(1, index)" @click="showDetail" @mouseleave="showOver(1, -1)">
          <img :src="item.url" height="100%" width="100%" />
          <div v-if="isActivePicture(1, index)" style="position: absolute; left:0px; top:8px; color:white; font-weight: bold;">{{ item.time + " "+ item.description}}</div>
        </div>
        <div class="pic-title-font" :style="{width: item.width+'px'}">{{item.description}}</div>
        <div class="pic-desc-font">2011.11.12</div>
      </div>
    </div>

    <div style="color: ;" class="scroll-pictures second-row" ref="divScroll_row2">
      <div v-for="(item, index) in pictures2" :key="index">
        <div :style="{position:'relative', width: item.width +'px', height:item.height+'px'}" class="picStyle"
          @mouseover="showOver(2,index)" @mouseleave="showOver(2, -1)" @click="showDetail">
          <img :src="item.url" height="100%" width="100%" />
          <div v-if="isActivePicture(2, index)" style="position: absolute; left:0px; top:8px; color:white; font-weight: bold;">{{ item.time + " "+ item.description}}</div>
        </div>
        <div class="pic-title-font" :style="{width: item.width+'px'}">{{item.description}}</div>
        <div class="pic-desc-font">2011.11.12</div>
      </div>
    </div>

    <div class="left-arrow arrow-size" @click="scrollTo('left')">
      <img src="/static/works/left_arrow.jpg" height="100%" width="100%">
    </div>
    <div class="right-arrow arrow-size" @click="scrollTo('right')">
      <img src="/static/works/right_arrow.jpg" height="100%" width="100%">
    </div>
    <div class="pop-pic-window column-normal-center" v-if="showWindow" @click="closeDetailWindow">
      <div class="detail-pic-content column-normal-center">
        <div style="margin-top: 10px;">
          在2019年8月19日那时....
        </div>
        <div class="detail-pic-size" style="margin-top: 50px;">
          <img src="/static/picShare/1.png" height="100%" width="100%">
        </div>
        <div style="margin-top: 10px;">
          明国时期最厉害的武林高手齐聚一堂
        </div>
      </div>
      <div style="display: flex; flex-direction: row;  justify-content: center; align-items: center;width: 420px; overflow: auto;">
        <div v-for="(item, index) in pictures1" :key="index">
          <div style="width: 40px; height: 40px; margin-right: 8px; margin-bottom: 16px;">
            <img :src="item.url" height="100%" width="100%">
          </div>
        </div>
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
        let scroll1 = new BScroll(this.$refs.divScroll_row1, {
          click: true,
          startX: 0,
          startY: 0,
          scrollX: true,
          scrollY: false,
          probeType: 2,
          momentum: true,
        });
        scroll1.on('scroll', (pos) => {
          console.log("scroll position...", pos);
          this.scrollX = pos.x;
        });

        let scroll2 = new BScroll(this.$refs.divScroll_row2, {
          click: true,
          startX: 0,
          startY: 0,
          scrollX: true,
          scrollY: false,
          probeType: 2,
          momentum: true,
        });
        scroll2.on('scroll', (pos) => {
          console.log("scroll position...", pos);
          this.scrollX = pos.x;
        });
        this.init();
      });
    },

    methods: {
      showDetail() {
        this.showWindow = true;
      },
      closeDetailWindow() {
        this.showWindow = false;
      },

      isActivePicture(type, index) {
        if (type === 1) {
          return index === this.activeIndex1;
        } else {
          return index === this.activeIndex2;
        }
      },
      showOver(type, index) {
        console.log("====show over=====", index);
        if (type === 1) {
          this.activeIndex1 = index;
        } else {
          this.activeIndex2 = index;
        }
      },
      //点击箭头，滑动scrollX
      scrollTo(type) {
        let step = 200;
        if (type == "right") {
          if (this.scrollX + step > this.maxScrollX - windowWidth) {
            this.scrollX = this.maxScrollX - windowWidth;
          } else {
            this.scrollX += step;
          }
        } else {
          if (this.scrollX - step < 0) {
            this.scrollX = 0;
          } else {
            this.scrollX -= step;
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
        this.$refs.divScroll_row1.scrollTo(scrollX, 0, 10);
        this.$refs.divScroll_row2.scrollTo(scrollX, 0, 10);
      },

      scrollXToPicInfo(scrollX) {
        let totalWidth = 0;
        let fixWidth = 0;
        let picIndex = 0;
        let nowTime = 0;
        // console.log("scrollX", scrollX);
        for (let i = 0; i < this.pictures1.length; i++) {
          let currentPic = this.pictures1[i];
          totalWidth += currentPic.width + pic_marginRight;
          if (totalWidth >= scrollX) {
            if (totalWidth == scrollX) {
              picIndex = i + 1;
              nowTime = this.pictures1[picIndex].time;
              fixWidth = 0;
            } else {
              picIndex = i;
              nowTime = this.pictures1[i].time;
              fixWidth = currentPic.width + pic_marginRight - (totalWidth - scrollX);
            }
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
        let nowTime = time;
        let pictureIndex = 0;
        let length = this.time_tick_list.length;
        if (this.time_tick_list[length - 1] === time) {
          this.scrollX = this.maxScrollX - windowWidth;
          this.gotoByScroll(this.scrollX);
          return;
        }

        for (let i = 0; i < this.pictures1.length; i++) {
          if (this.pictures1[i].time >= time) {
            nowTime = this.pictures1[i].time;
            pictureIndex = i;
            break;
          }
        }

        this.slider.left = this.timeToLeft(nowTime);
        this.slider.width = this.startPicToWidth(pictureIndex, 0);
        this.scrollX = this.startPicToScrollX(pictureIndex);
        this.$refs.divScroll_row1.scrollTo(this.scrollX, 0, 10);
        this.$refs.divScroll_row2.scrollTo(this.scrollX, 0, 10);
      },

      //通过时间计算left的比例
      timeToLeft(nowTime) {
        let left = (nowTime - this.startTime) / this.total_period * 100;
        return left;
      },

      startPicToScrollX(pictureIndex) {
        let scrollX = 0;
        for (let i = 0; i < this.pictures1.length && i < pictureIndex; i++) {
          scrollX += this.pictures1[i].width + pic_marginRight;
        }
        return scrollX;
      },

      startPicToWidth(pictureIndex, fixWidth) {
        let totalWidth = 0;
        totalWidth -= fixWidth;

        let startTime = this.pictures1[pictureIndex].time;
        let endTime = startTime;
        for (let i = pictureIndex; i < this.pictures1.length; i++) {
          totalWidth += this.pictures1[i].width + pic_marginRight;
          endTime = this.pictures1[i].time;
          console.log("add to ", endTime + "total", totalWidth + "width" + this.pictures1[i].width);
          if (totalWidth >= windowWidth) {
            break;
          }
        }
        let width = (endTime - startTime) / this.total_period * 100;
        if (width === 0) {
          width = 1 / this.total_period * 100;
        }
        return width;
      },

      init() {
        //初始化 time_tick_list
        this.startTime = this.pictures1[0].time;
        this.endTime = this.pictures1[this.pictures1.length - 1].time;
        this.unit_period = 5;
        console.log("===init===", this.startTime, this.endTime, this.unit_period);

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
        for (let i = 0; i < this.pictures1.length; i++) {
          maxScrollX += this.pictures1[i].width + pic_marginRight;
        }
        this.maxScrollX = maxScrollX;
        console.log("maxScrollX", this.maxScrollX);

        //初始化滑块的位置
        this.toStartScrollX();
        console.log(this.time_tick_list);
      },

      toStartScrollX() {
        this.slider.left = 0;
        this.slider.width = this.startPicToWidth(0, 0);
        this.scrollX = 0;
        this.$refs.divScroll_row1.scrollTo(0, 0, 10);
        this.$refs.divScroll_row2.scrollTo(0, 0, 10);
      },

    },

    //多个照片行取并操作
    data() {
      return {
        showWindow: false,
        activeIndex1: -1,
        activeIndex2: -1,
        fixSurplusWidth: 0,
        unit_period: 5,
        total_period: 0,
        endTime: 0,
        startTime: 0,
        startX: 0,
        scrollX: 0,
        scroll: null,
        slider: {
          left: 0,
          width: 0,
        },
        pictures1: [{
            time: 1990,
            url: '/static/location/1.png',
            width: 316,
            height: 208,
            description: '故宫第12次修缮',
            // timeStr:''
          },
          {
            time: 1992,
            url: '/static/location/2.png',
            width: 280,
            height: 194,
            description: '故宫掠影：记录的美丽',
          },
          {
            time: 1993,
            url: '/static/location/3.png',
            width: 338,
            height: 191,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 1994,
            url: '/static/location/4.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录美丽',
          },
          {
            time: 1995,
            url: '/static/location/5.png',
            width: 204,
            height: 187,
            description: '故宫掠影：记录的美丽',
          },
          {
            time: 2000,
            url: '/static/location/5.png',
            width: 204,
            height: 187,
            description: '故宫掠影：记录故宫',
          },
          {
            time: 2003,
            url: '/static/location/4.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2005,
            url: '/static/location/4.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2005,
            url: '/static/location/1.png',
            width: 316,
            height: 208,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2008,
            url: '/static/location/2.png',
            width: 280,
            height: 194,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2009,
            url: '/static/location/4.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2010,
            url: '/static/location/1.png',
            width: 316,
            height: 208,
            description: '故宫掠影：记录美丽',
          },
          {
            time: 2012,
            url: '/static/location/2.png',
            width: 280,
            height: 194,
            description: '故宫掠影：记录美丽',
          },
          {
            time: 2013,
            url: '/static/location/3.png',
            width: 338,
            height: 191,
            description: '故宫掠影：记录美丽',
          },
          {
            time: 2020,
            url: '/static/location/1.png',
            width: 316,
            height: 208,
            description: '故宫掠影：记录丽',
          },
        ],

        pictures2: [{
            time: 1990,
            url: '/static/location/6.png',
            width: 216,
            height: 158,
            description: '故宫第12修缮',
            // timeStr:''
          },
          {
            time: 1992,
            url: '/static/location/7.png',
            width: 317,
            height: 175,
            description: '故宫掠影：故宫的美丽',
          },
          {
            time: 1993,
            url: '/static/location/8.png',
            width: 300,
            height: 208,
            description: '故宫掠影：美丽',
          },
          {
            time: 1994,
            url: '/static/location/9.png',
            width: 174,
            height: 208,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 1995,
            url: '/static/location/10.png',
            width: 164,
            height: 190,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2000,
            url: '/static/location/5.png',
            width: 204,
            height: 187,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2003,
            url: '/static/location/4.png',
            width: 227,
            height: 208,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2006,
            url: '/static/location/8.png',
            width: 300,
            height: 208,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2010,
            url: '/static/location/9.png',
            width: 174,
            height: 208,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2011,
            url: '/static/location/10.png',
            width: 164,
            height: 190,
            description: '故宫掠影：记的美丽',
          },
          {
            time: 2014,
            url: '/static/location/5.png',
            width: 204,
            height: 187,
            description: '故宫掠影：记录故宫',
          },
          {
            time: 2016,
            url: '/static/location/4.png',
            width: 227,
            height: 208,
            description: '故宫掠影：记录故宫',
          },
          {
            time: 2019,
            url: '/static/location/3.png',
            width: 338,
            height: 191,
            description: '故宫掠影：记录故宫',
          },
          {
            time: 2020,
            url: '/static/location/1.png',
            width: 316,
            height: 208,
            description: '故宫掠影：记录故宫',
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
  @windowWidth: 1440px;
  @pic_marginRight: 20px;
  @topOffset: 20px;

  .detail-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .detail-row-space {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .detail-pic-size {
    width: 600px;
    height: 300px;
  }

  .detail-pic-content {
    width: 1088px;
    height: 552px;
    background: rgba(246, 245, 243, 1);
  }

  .detail-title-font {
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 32px;
    color: black;
  }

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
