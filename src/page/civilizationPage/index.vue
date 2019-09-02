<template>
  <div class="history-contaienr">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor='#ffff' />
    <div style="width: 100%; height: 100%;">
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
      </baidu-map>
    </div>

    <div class="right-search-control">
      <div class="row">
        <div>
          <el-input placeholder="搜索城市 输入关键字" style="width: 330px;" v-model="location" class="input-with-select">
            <el-select v-model="selectType" style="width: 110px;" slot="prepend" placeholder="请选择">
              <el-option label="历史遗迹" value="1"></el-option>
              <el-option label="现代建筑" value="2"></el-option>
              <el-option label="神秘探索" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <bm-local-search :auto-viewport="true" :location="location"></bm-local-search>
        </div>
      </div>
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
      <div class="pop_window" v-if="listShow">
        <div style="padding-top: 30px;">
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
  // import BaiduMap from 'vue-baidu-map'

  export default {
    name: 'civilizationPage',
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
        selectType: {},
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

  .right-search-control{
    position: fixed;
    top: 105px;
    right: 10px;
    width: 354px;
  }

  .left-list-control {
    position: fixed;
    top: 105px;
    left: 10px;
    width: 330px;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
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
