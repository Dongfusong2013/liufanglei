<template>
  <div class="history-container">

    <AppHeader noBackground="false" />

    <div style="box-sizing: border-box; width: 100%; height: 100%">
      <baidu-map class="map" :center="centerPosition" :mapStyle="mapStyle" :zoom="zoom">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_LEFT" :isOpen="true"></bm-overview-map> -->

        <div v-for="(item, index) in locationListByType" :key="index">
          <bm-marker :position="item.position" @mouseover="openLocationWindow(item)" :icon="{url: getIconUlr(item.position, item.type), size: {width: 20, height: 20}}">
            <!-- <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
          </bm-marker>
        </div>

        <bm-info-window :position="selectedLocation.position" :width="windowWidth" :height="windowHeight" :show="show"
          @close="infoWindowClose" @open="infoWindowOpen">
          <div style="width: 100%; height: 159px; margin-top: 10px;" @click="gotoPage('/civilInfo')">
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
        <div class="left-search-control">
          <div class="line-row">
            <div style="position: relative;">
              <el-input placeholder="搜索城市 输入关键字" style="width: 310px;" v-model="location" class="input-with-select">
                <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
              </el-input>
              <div class="search-icon" style="position:absolute; left: 280px; top:10px; width: 20px; height: 20px;">
                <img src="/static/icon/搜索.png" height="100%" width="100%">
              </div>
              <bm-local-search :auto-viewport="true" :keyword="location" :location="location"></bm-local-search>
            </div>
          </div>
        </div>
      </baidu-map>
    </div>
    <!-- <div class="zoom-control-pos">
      <div class="zoom-constrol-bigger box-center" style="font-size: 26px; color: white;">
        +
      </div>
      <div class="zoom-control-smaller box-center" style="font-size: 26px; color:#D3D3D3">
        -
      </div>
    </div> -->
    <div class="right-list-control row-space-box">
      <div class="row-space-box" style="align-self: flex-start; margin-top: 30px;">
        <div style="margin-right: 10px;">
          <el-select v-model="selectType" style="width: 110px;" slot="prepend" placeholder="请选择">
            <el-option label="全部" value="全部"></el-option>
            <el-option label="历史遗迹" value="历史遗迹"></el-option>
            <el-option label="现代建筑" value="现代建筑"></el-option>
            <el-option label="流行热门" value="流行热门"></el-option>
          </el-select>
        </div>
        <div class="control-label box-center" @click="controlListTable">
          <div v-if="!listShow" style="width: 24px; height: 24px;">
            <img src="/static/icon/排行关闭.png" height="100%" width="100%">
          </div>
          <div v-if="listShow" style="width: 24px; height: 24px;">
            <img src="/static/icon/排行打开.png" height="100%" width="100%">
          </div>
        </div>
      </div>
      <div class="pop_window" v-if="!listShow">
        <div>
          <div style="padding-left: 20px; padding-top: 10px; padding-bottom: 10px;">
            <div style="display: flex; flex-direction: row;  align-items: center ;">
              <div style="margin-left: 10px;">
                排行榜
              </div>
            </div>
          </div>
          <div style="margin-left: 20px; background-color: darkred; width: 80px; height: 2px;">
          </div>
        </div>
        <div style="padding-top: 20px;">
          <div v-for="(item, index) in locationListByType" :key="index">
            <div class="row-space-box list-padding item-margin-bottom" @click="gotoLocation(item)">
              <div class="list-number">
                {{formatNumber(index+1)}}
              </div>
              <div class="list-pic">
                <img :src="item.picSrc" height="100%" width="100%">
              </div>
              <div class="list-content-font">
                <div class="fix-width-text">
                  {{item.name}}
                </div>
                <div style="margin-top: 5px;">
                  <el-rate v-model="item.score" text-color="#1F2D3D" disabled show-score>
                  </el-rate>
                </div>
              </div>
              <div class="list-sm-content-font" style="align-self: flex-end;">
                {{item.footCount}}人打卡
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import AppHeader from '@/components/appHeader/index.vue'

  export default {
    name: 'civilizationPage',
    components: {
      AppHeader
    },
    computed: {
      locationListByType() {
        if (this.selectType === "全部") {
          return this.locationList;
        }

        let locationListResult = [];
        for (let i = 0; i < this.locationList.length; i++) {
          if (this.locationList[i].type === this.selectType) {
            locationListResult.push(this.locationList[i]);
          }

        }
        return locationListResult;
      }
    },
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
        selectType: "全部",
        centerPosition: {
          lng: 126.404,
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
              lng: 136.404,
              lat: 39.915
            },
            score: 4.9,
            footCount: 1500,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
          {
            type: "历史遗迹",
            position: {
              lng: 106.404,
              lat: 35.915
            },
            score: 4.9,
            footCount: 1500,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
          {
            type: "历史遗迹",
            position: {
              lng: 116.404,
              lat: 32.915
            },
            score: 4.9,
            footCount: 1500,
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
            score: 4.8,
            footCount: 1314,
            name: '罗马角斗场，意大利',
            descript: '世界上最大的角斗场',
            picSrc: '/static/civil/罗马角斗场.jpeg',
          },
          {
            type: "流行热门",
            position: {
              lng: 106.404,
              lat: 59.915
            },
            score: 4.4,
            footCount: 914,
            name: '德国大教堂，德国',
            descript: '网络观看最多的欧洲教堂',
            picSrc: '/static/civil/德国大教堂.jpeg',
          },
          {
            type: "流行热门",
            position: {
              lng: 96.404,
              lat: 59.915
            },
            score: 4.4,
            footCount: 914,
            name: '德国大教堂，德国',
            descript: '网络观看最多的欧洲教堂',
            picSrc: '/static/civil/德国大教堂.jpeg',
          },
          {
            type: "现代建筑",
            position: {
              lng: 108.404,
              lat: 69.915
            },
            score: 4.4,
            footCount: 904,
            name: '香港交易所，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/civil/现代建筑2.jpeg',
          },
          {
            type: "现代建筑",
            position: {
              lng: 116.404,
              lat: 49.915
            },
            score: 4.4,
            footCount: 659,
            name: '中国银行，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/civil/现代建筑1.jpeg',
          },
        ]
      }
    },
    methods: {
      getIconUlr(position, type) {
        if (position != undefined && this.selectedLocation != {} &&
          position === this.selectedLocation.position) {
          return "/static/civil/选中建筑.png";
        }
        if (type === "历史遗迹") {
          return "/static/civil/历史遗迹.png";
        } else if (type === "现代建筑") {
          return "/static/civil/现代建筑.png";
        } else {
          return "/static/civil/热门流行.png";
        }
      },
      gotoPage(path) {
        this.$router.push(path);
      },
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
        // this.centerPosition = location.position;
        this.openLocationWindow(location);
      },
      openLocationWindow(location) {
        this.centerPosition = location.position;
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
  // @import '../appStyle';

  @headTopHeight: 68px;
  @left-top: @headTopHeight + 8px;
  @right-top: @left-top + 30px;



  .el-input__inner {
    // width: 220px;
    // border-top-width: 0px;
    // border-left-width: 0px;
    // border-right-width: 0px;
    // border-bottom-width: 1px;

    // border-bottom: 1px solid;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    /*outline: medium;*/
  }

  .el-rate__text {
    font-size: 12px;
    vertical-align: middle;
    margin-left: 10px;
  }

  .el-rate__icon {
    font-size: 13px;
    margin-right: 1px;
  }

  //   .top-header{
  //     width: 100%;
  //     background: rgba(243, 245, 246, 1);
  //     height: @headTopHeight;
  //   }
  //
  // .control-list-title {
  //   position: absolute;
  //   top: 10px;
  //   left: 80px;
  //   margin-left: 10px;
  //   margin-bottom: 30px;
  //   font-family: PingFangSC;
  //   font-weight: 400;
  //   color: rgba(23, 0, 0, 1);
  //   line-height: 24px;
  //   font-size: 18px;
  // }
  .fix-width-text {
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .line-row {
    display: flex;
    flex-direction: row;
  }

  .list-padding {
    padding-left: 10px;
    padding-right: 10px;
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

  .left-search-control {
    position: fixed;
    top: @right-top;
    left: 80px;
    width: 354px;
  }

  .right-list-control {
    position: fixed;
    top: @left-top;
    right: 0px;
    padding-right: 5px;
  }

  .pop_window {
    width: 296px;
    height: 598px;
    background: rgba(255, 255, 255, 1);
    overflow: auto;
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


  .history-container {
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
    left: 40px;
    bottom: 100px;
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
