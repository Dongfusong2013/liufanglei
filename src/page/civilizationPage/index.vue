<template>
  <div class="history-contaienr">
    <!-- <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div> -->
    <div class="top-header row-space-box">
      <div class="web-title" style="margin-left: 40px;">
        文明印记
      </div>
      <div class="row-space-box" style="margin-right: 150px;">
        <div style="margin-right: 40px; width: 64px; height: 56px; background-color: #475669;">
          <!-- <svg-icon icon-class="guide" /> -->
          <img src="" alt="" height="100%" width="100%">
        </div>
        <div style="margin-right: 40px; width: 64px; height: 56px; background-color: #475669;">
          <img src="" alt="" height="100%" width="100%">
        </div>
        <div style="margin-right: 40px; width: 64px; height: 56px; background-color: #475669;">
          <img src="" alt="" height="100%" width="100%">
        </div>
        <div style="margin-right: 40px; width: 64px; height: 56px; background-color: #475669;">
          <img src="" alt="" height="100%" width="100%">
        </div>
      </div>
    </div>
    <!-- <HeadTop textColor='#ffff' /> -->
    <div style="box-sizing: border-box; width: 100%; height: 100%; ">
      <baidu-map class="map" :center="centerPosition" :mapStyle="mapStyle" :zoom="zoom">
        <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->

        <div v-for="(item, index) in locationList" :key="index">
          <bm-marker :position="item.position" @mouseover="openLocationWindow(item)" @click="gotoLocation(item)">
            <!-- <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
          </bm-marker>
        </div>

        <bm-info-window :position="selectedLocation.position" :width="windowWidth" :height="windowHeight" :show="show"
          @close="infoWindowClose" @open="infoWindowOpen">
          <div style="width: 100%; height: 157px;">
            <img :src="selectedLocation.picSrc" height="100%" width="100%">
            <div class="row-space-box title-font title-top">
              <div>
                {{selectedLocation.name}}
              </div>
              <div class="">
                5.0
              </div>
            </div>
            <div class="content_font content-top">
              {{selectedLocation.descript}}
            </div>
          </div>
        </bm-info-window>
        <div class="right-search-control">
          <div class="row">
            <div>
              <el-input placeholder="搜索城市 输入关键字" style="width: 330px;" v-model="location" class="input-with-select">
                <el-select v-model="selectType" style="width: 110px;" slot="prepend" placeholder="请选择">
                  <el-option label="历史遗迹" value="历史遗迹"></el-option>
                  <el-option label="现代建筑" value="现代建筑"></el-option>
                  <el-option label="神秘探索" value="神秘探索"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <bm-local-search :auto-viewport="true" :keyword="location" :location="location"></bm-local-search>
            </div>
          </div>
          <div class="zoom-control-pos">
            <div class="zoom-constrol-bigger box-center" style="font-size: 26px; color: white;">
              +
            </div>
            <div class="zoom-control-smaller box-center" style="font-size: 26px; color:#D3D3D3">
              -
            </div>
          </div>
        </div>
      </baidu-map>
    </div>

    <div class="left-list-control" :class="{'open_background':listShow}">

      <div class="control-label box-center" @click="controlListTable">
        <div v-if="listShow" style="color:white">
          X
        </div>
        <div v-if="!listShow" style="color:white">
          OK
        </div>
      </div>
      <div v-if="listShow" class="control-list-title">
        {{selectType}}排行榜单
      </div>

      <div class="pop_window" v-if="listShow">
        <div style="padding-top: 20px;">
          <div v-for="(item, index) in locationList" :key="index">
            <div class="row-space-box list-padding item-margin-bottom" @click="gotoLocation(item)">
              <div class="list-number">
                {{formatNumber(index+1)}}
              </div>
              <div class="list-pic">
                <img :src="item.picSrc" height="100%" width="100%">
              </div>
              <div class="list-content-font">
                <div>
                  {{item.name}}
                </div>
                <div class="score-font">
                  x x x x x {{item.score}}
                </div>
              </div>
              <div class="list-sm-content-font" style="align-self: flex-end;">
                321人打卡
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeadTop from '@/components/HeadTop.vue'
  // import SvgIcon from '@/components/SvgIcon'

  export default {
    name: 'civilizationPage',
    // components:{
    //   SvgIcon
    // },
    data() {
      return {
        mapStyle: {
          styleJson: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": {
              "lightness": 34,
              "saturation": -74
            }
          }],
        },
        selectType: "历史遗迹",
        centerPosition: {
          lng: 116.404,
          lat: 39.915
        },
        windowWidth: 296,
        windowHeight: 232,
        zoom: 3,
        show: false,
        selectedLocation: {},
        listShow: false,
        location: '',
        locationList: [{
            type: "历史遗迹",
            position: {
              lng: 116.404,
              lat: 39.915
            },
            score: '5.0',
            footCount: 314,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
          {
            type: "历史遗迹",
            position: {
              lng: 116.404,
              lat: 49.915
            },
            score: '4.8',
            footCount: 314,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
          {
            type: "历史遗迹",
            position: {
              lng: 400.404,
              lat: 69.915
            },
            score: '4.4',
            footCount: 314,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
          {
            type: "历史遗迹",
            position: {
              lng: 400.404,
              lat: 69.915
            },
            score: '4.4',
            footCount: 314,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
          {
            type: "历史遗迹",
            position: {
              lng: 400.404,
              lat: 69.915
            },
            score: '4.4',
            footCount: 314,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
        ]
      }
    },

    components: {
      HeadTop,
      // BaiduMap,
    },

    methods: {
      controlListTable() {
        this.listShow = !this.listShow;
      },
      formatNumber(number) {
        if (number < 10) {
          return "0" + number;
        } else {
          return number;
        }
      },
      gotoLocation(location) {
        this.centerPosition = location.position;
        this.openLocationWindow(location);
      },
      openLocationWindow(location) {
        this.show = false;
        this.selectedLocation = location;
        console.log(this.centerPosition);
        this.infoWindowOpen();
      },

      infoWindowClose() {
        this.show = false
        console.log("----------close-------");
      },
      infoWindowOpen() {
        this.show = true
        console.log("----------open-------");
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../appStyle';

  .menue-style {
    float: left;
    margin-right: 40px;
  }

  .web-title {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 28px;
  }

  .top-header {
    width: 100%;
    background: rgba(243, 245, 246, 1);
    height: 88px;
  }

  .control-list-title {
    position: absolute;
    top: 10px;
    left: 80px;
    margin-left: 10px;
    margin-bottom: 30px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 24px;
    font-size: 18px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .list-padding {
    padding-left: 10px;
    padding-right: 10px;
  }

  .score-font {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 20px;
  }

  .list-number {
    background: rgba(255, 255, 255, 1);
    border-radius: 0px 0px 5px 0px;
  }

  .list-pic {
    width: 48px;
    height: 48px;
    border-radius: 5px;
  }

  .list-content-font {
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 22px;
  }

  .list-sm-content-font {
    font-size: 12px;
    font-family: HelveticaNeue;
    font-weight: bold;
    color: rgba(221, 45, 74, 1);
    line-height: 20px;
  }

  .right-search-control {
    position: fixed;
    top: 105px;
    right: 10px;
    width: 354px;
  }

  .left-list-control {
    position: fixed;
    top: 95px;
    left: 8px;
    width: 314px;
    height: 656px;
  }

  .open_background {
    background: rgba(255, 255, 255, 1);
  }

  .pop_window {
    background: rgba(255, 255, 255, 1);
  }

  .box-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .control-label {
    width: 40px;
    height: 40px;
    background: rgba(160, 0, 0, 1);
  }

  .row-space-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .anchorBL {
    display: none;
  }

  .BMap_cpyCtrl {
    display: none;
  }

  .title-top {
    margin-top: 10px;
  }

  .content-top {
    margin-top: 4px
  }

  .item-margin-bottom {
    margin-bottom: 32px;
  }

  .title-font {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 24px;
  }

  .content_font {
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 22px;
  }


  .history-contaienr {
    background: rgba(243, 245, 246, 1);
    width: 1550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .zoom-control-pos {
    position: fixed;
    right: 40px;
    top: 300px;
  }

  .zoom-constrol-bigger {
    width: 40px;
    height: 40px;
    background: rgba(160, 0, 0, 1);
    border-radius: 4px 4px 0px 0px;
    color: white;
    border: 1px solid rgba(226, 226, 226, 1);
  }

  .zoom-control-smaller {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0px 0px 4px 4px;
    border: 1px solid rgba(226, 226, 226, 1);
  }

  .map {
    width: 1500px;
    height: 900px;

    // .window-style {
    //   width: 100px;
    //   height: 200px;
    //   background-color: aliceblue;
    // }
  }
</style>
