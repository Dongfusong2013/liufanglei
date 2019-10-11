<template>
  <div style="position: relative; height: 100%; width: 100%;">
    <div class="scroll-view-1" style="margin-top: 10px; margin-left: 80px;">
      <div class="time-line-1">
        <div class="slider-node-1" :style="{left: slider.left + '%', width:  slider.width + '%'}"></div>
        <div v-for="(item, index) in time_tick_list" :key="index">
          <div class="time-tick-1" :style="{left: timeToLeft(item) + '%'}" @click="gotoTickTime(item)">
            <div class="label">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-pictures-1 first-row-1" ref="divScroll_row1">
      <div v-for="(item, index) in pictures1" :key="index">
        <div :style="{position:'relative', width: item.width +'px', height:item.height+'px'}" class="picStyle-1 border-box1"
          @mouseover="showOver(1, index)" @click="showDetail(index, item.datePicId)" @mouseleave="showOver(1, -1)" >
          <img :src="item.url" height="100%" width="100%" />
          <div :style="{width: item.width +'px', height:item.height+'px'}" class="border-box-before1">
          </div>
          <div :style="{width: item.width +'px', height:item.height+'px'}" class="border-box-after1">
          </div>
          <div v-if="isActivePicture(1, index)" style="position: absolute; left:0px; top:8px; color:white; font-weight: bold;">{{ item.time + " "+ item.description}}</div>
        </div>

        <div style="margin-top: 12px;">
          <div class="pic-title-font-1" :style="{width: item.width+'px'}">{{item.description}}</div>
          <div style="color: darkred;" class="pic-desc-font-1">{{item.time}}</div>
        </div>
      </div>
    </div>

    <div class="scroll-pictures-1 second-row-1" ref="divScroll_row2">
      <div v-for="(item, index) in pictures2" :key="index">
        <div :style="{position:'relative', width: item.width +'px', height:item.height +'px'}" class="picStyle-1 border-box1"
          @mouseover="showOver(2,index)" @click="showDetail(index, item.datePicId)" @mouseleave="showOver(2, -1)">
          <img :src="item.url" height="100%" width="100%" />
          <div :style="{width: item.width +'px', height:item.height+'px'}" class="border-box-before1">
          </div>
          <div :style="{width: item.width +'px', height:item.height+'px'}" class="border-box-after1">
          </div>
          <div v-if="isActivePicture(2, index)" style="position: absolute; left:0px; top:8px; color:white; font-weight: bold;">{{ item.time + " "+ item.description}}</div>
        </div>
        <div style="margin-top: 12px;">
          <div class="pic-title-font-1" :style="{width: item.width+'px'}">{{item.description}}</div>
          <div style="color: darkred;" class="pic-desc-font-1">{{item.time}}</div>
        </div>
      </div>
    </div>

    <div class="left-arrow-1 arrow-size-1" @click="scrollTo('left')">
      <img src="/static/works/left_arrow.jpg" height="100%" width="100%">
    </div>
    <div class="right-arrow-1 arrow-size-1" @click="scrollTo('right')">
      <img src="/static/works/right_arrow.jpg" height="100%" width="100%">
    </div>

    <DetailUserWindow :activeDayPic="activeDayPic"  :showWindow="showWindow" :closeDetailWindow="closeDetailWindow"></DetailUserWindow>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import DetailUserWindow from '@/components/DetailUserWindow'
  import {fetchDatePicsInfo} from '@/api/album.js'

  const windowWidth = 1360;
  const pic_marginRight = 20;
  export default {
    name: 'ScrollTimeView',
    components: {
      DetailUserWindow,
    },
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
      activeDayPic(){
        console.log("activeDayPic=======",this.datePic);
        return this.datePic;
      },
      showDetail(index, datePicId) {
        fetchDatePicsInfo(datePicId).then((data)=>{
           this.datePic = data.data;
           this.showWindow = true;
           this.activeIndex = index;
           console.log("datePic ---- show", this.datePic);
        })

        document.body.style['overflow-y'] = 'hidden';
      },
      closeDetailWindow() {
        this.showWindow = false;
        console.log("close detail window", this.showWindow);
        document.body.style['overflow-y'] = 'auto';
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
    props: {
      pictures1: Array,
      pictures2: Array,
    },

    //多个照片行取并操作
    data() {
      return {
        datePic:{},
        activeIndex: 0,
        detailPictures:[],
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
        time_tick_list: [
          // {time:'', content:''}
        ],
      }
    }
  }
</script>

<style lang="less">
  // @windowWidth: 1360px;
  // @pic_marginRight: 20px;
  // @topOffset: 10px;
  // @maxPicHeight: 270px;

  .border-box1 {
    position: relative;
    border: 6px solid #fff;
    border: white solid 2px;
    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .border-box-before1 {
    content: "";
    background: yellowgreen;
    border: 3px solid #fff;
    position: absolute;
    z-index: -1;
    top: 2px;
    left: 1px;
    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    // -webkit-transform: rotate(-1deg);
    // -moz-transform: rotate(-1deg);
    // -o-transform: rotate(-1deg);
    // -ms-transform: rotate(-1deg);
    // transform: rotate(-1deg);
  }

  .border-box-after1 {
    content: "";
    background: lightblue;
    border: 3px solid #fff;
    position: absolute;
    z-index: -1;
    top: -2px;
    left: 1px;
    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    // -webkit-transform: rotate(1deg);
    // -moz-transform: rotate(1deg);
    // -o-transform: rotate(1deg);
    // -ms-transform: rotate(1deg);
    // transform: rotate(1deg);
  }

  .pic-desc-font-1 {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 20px;
  }

  .pic-title-font-1 {
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

  .arrow-size-1 {
    width: 28px;
    height: 48px;
  }

  .picStyle-1 {
    // margin-right: @pic_marginRight;
    margin-right: 20px;
  }

  .left-arrow-1 {
    position: absolute;
    left: 80px;
    // top: 290px + @topOffset;
    top: 300px;
  }

  .right-arrow-1 {
    position: absolute;
    right: 80px;
    top: 300px;
    // top: 290px + @topOffset;
  }

  .slider-node-1 {
    position: absolute;
    top: -6px;
    height: 14px;
    // left:10%;
    background-color: #939598;
    border-radius: 7px;
    z-index: 2;
    transition: left .5s, width .5s;
  }

  .time-line-1 {
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

  .time-tick-1:before {
    content: "";
    display: block;
    height: 12px;
    border-left: 1px solid #939598;
    margin-top: -6px;
  }


  .time-tick-1 {
    position: absolute;
    opacity: 1;
    width: 1px;
    cursor: pointer;
    // z-index: 1;
    font-weight: 300;
    /* ?? */
    vertical-align: baseline;
  }

  .scroll-view-1 {
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
    // top: @topOffset;
    top: 10px;
    // align-self: flex-end;
  }

  .first-row-1 {
    // top: @topOffset + 60px;
    top: 70px;
    left: 0px;
  }

  .second-row-1 {
    // top: @topOffset + 100px;
    top: 90px;
    left: 0px;
  }

  .scroll-pictures-1 {
    position: relative;
    // width: @windowWidth;
    // height: @maxPicHeight;
    width: 1350px;
    height: 270px;
    // background-color: aliceblue;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    overflow: hidden;
  }
</style>
