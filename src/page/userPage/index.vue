<template>
  <div class="history-container">

    <AppHeader noBackground="false" />

    <div style="box-sizing: border-box; width: 100%; height: 100%">
      <baidu-map class="my-map" :center="centerPosition" :mapStyle="mapStyle" :zoom="zoom">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <div v-for="(item, index) in locationList" :key="index">
          <bm-marker :position="item.position" @mouseover="openLocationWindow(item)" @click="gotoLocation(item)"
          :icon="{url: getIconUlr(item.position, item.type), size: {width: 20, height: 20}}">
          </bm-marker>
        </div>

        <bm-overlay style="position: absolute; top:220px; right:100px; width: 285px; height: 80px;">
          <div style="margin-bottom: 10px;">
            您记录的<span class="num-color"> 4 </span>个精彩岁月中，踏足了
            <span class="num-color"> 7 </span>个长江大川，游览了
            <span class="num-color"> 4 </span>个名胜古迹，在 <span class="num-color"> 3 </span> 个工作地拼洒汗水，
            拥有<span class="num-color"> 2 </span>个学习成长的图书馆......
          </div>
          <div style="margin-top: 30px">
            您共跟 <span style="color:  firebrick; font-size: 20px;"> 4 </span> 位家人，<span style="color:  firebrick; font-size: 20px;">10</span>
            个朋友，互相陪伴的 <span style="color:  firebrick; font-size: 20px;"> 21 </span> 天中记录了 <span style="color:  firebrick; font-size: 20px;">50</span>
            个时刻......
          </div>
        </bm-overlay>

        <!-- 信息窗体 -->
        <bm-overlay class="over-lay" @draw="draw" pane="labelPane" v-if="show" ref="overlayWindow">
          <div @click="handleClick()">
            <div style="width:296px; height:168px;">
              <img :src="selectedLocation.picSrc" height="100%" width="100%" style="border-radius:8px 8px 0px 0px;">
            </div>
            <div style="padding: 16px;">
              <div class="row-space-box title-font">
                <div>
                  {{selectedLocation.name}}
                </div>
                <div class="">
                  4.0
                </div>
              </div>
              <div class="content_font content-top">
                {{selectedLocation.descript}}
              </div>
              <div class="normal-row" style="margin-top: 10px;">
                <div>
                  <div class="el-icon-location"></div>
                </div>
                <div style="font-size:14px;font-family:PingFangSC;font-weight:600;color:rgba(23,0,0,1);line-height:22px; margin-left: 5px;">
                  地址
                </div>
                <div style="font-size:12px;font-family:PingFangSC;font-weight:400;color:rgba(23,0,0,1);line-height:24px; margin-left: 10px;">
                  北京市东城区景山前街4号
                </div>
              </div>

              <div v-if="!selectedLocation.hasPic" class="normal-row" style="margin-top: 4px;">
                <div>
                  <div class="el-icon-location"></div>
                </div>
                <div style="font-size:14px;font-family:PingFangSC;font-weight:600;color:rgba(23,0,0,1);line-height:22px; margin-left: 5px;">
                  未打卡
                </div>
                <div style="font-size:12px;font-family:PingFangSC;font-weight:400;color:rgba(23,0,0,1);line-height:24px; margin-left: 10px;">
                  已有<span style="color: rgba(221, 45, 74, 1);font-weight:bold;">379</span>人，打卡<span style="color: rgba(221, 45, 74, 1);font-weight:bold;">6237</span>次
                </div>
              </div>
              <div v-if="selectedLocation.hasPic" class="normal-row" style="margin-top: 4px;">
                <div style="width: 11px; height: 11px;">
                  <img src="/static/icon/alumn.png.png" width="100%" height="100%">
                </div>
                <div style="font-size:14px;font-family:PingFangSC;font-weight:600;color:rgba(23,0,0,1);line-height:22px; margin-left: 10px;">
                  精彩影集
                </div>
                <div style="font-size:12px;font-family:PingFangSC;font-weight:400;color:rgba(23,0,0,1);line-height:24px; margin-left: 10px;">
                  共有<span style="color: rgba(221, 45, 74, 1);font-weight:bold;">800</span>张照片<span style="color: rgba(221, 45, 74, 1);font-weight:bold;">
                    45个故事</span>
                </div>
              </div>
              <div v-if="!selectedLocation.hasPic" style="margin-top: 8px; width: 100%; height: 100%; display: flex; flex-direction: row; justify-content: center;">
                <div class="upload-box">
                  <div class="column-center" style="height: 100px; padding-top: 30px;">
                    <div class="control-font">您还没有上传过打卡照片</div>
                    <div style="width: 40px; height: 40px;">
                      <img src="/static/icon/上传足迹.png" height="100%" width="100%">
                    </div>
                    <div class="control-font" style="color: rgba(221, 45, 74, 1);">立即打卡</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </bm-overlay>
      </baidu-map>
    </div>

    <div style="width: 100%; position: absolute; top:670px">
      <div class="normal-row" style="margin-left: 0px; width: 100%;">
        <div style="width: 96px; height: 96px;">
          <img src="/static/icon/头像1.png" height="100%" width="100%">
        </div>
        <div style="margin-left: 0px; width: 100%;">
          <div class="name-font" style="margin-left: 40px;">
            光速兔子
          </div>
          <div class="normal-space-row" style="margin-top: 10px; margin-left: 40px;">
            <div class="normal-row">
              <div class="desc-font">23429486</div>
              <div class="normal-row">
                <div class="number-font" style="margin-left: 28px; margin-right: 4px; ">18</div>
                <div class="desc-font">获赞</div>
              </div>
              <div class="normal-row " style="margin-left: 28px; ">
                <div class="number-font">119</div>
                <div class="desc-font">关注</div>
              </div>
              <div class="normal-row" style="margin-left: 28px;">
                <div class="number-font" style="">57</div>
                <div class="desc-font">粉丝</div>
              </div>
            </div>

            <div class="normal-row" style="margin-right: 100px; align-items: center;">
              <div class="number-font" style="">天气 阵雨</div>
              <div class="el-icon-light-rain"></div>
              <!-- <div class="desc-font">张照片</div> -->
              <div class="number-font" style="margin-left: 40px;">2019-9-19</div>
            </div>
          </div>
          <div style="width: 100%;">
          </div>
          <div class="user-big-title normal-row" style="margin-top: 40px; margin-left: -70px;">
            <div class="tab-block" :class="{'seleted-border':isActive('about')}" @click="setActive('about')">
              关于
            </div>
            <div class="tab-block" :class="{'seleted-border':isActive('location')}" @click="setActive('location')">
              <div style="display: flex; flex-direction: row;">
                <div>
                  摄影集
                </div>
              </div>
            </div>
            <div class="tab-block" :class="{'seleted-border':isActive('story')}" @click="setActive('story')">
              故事集
            </div>
          </div>
          <div v-if="isActive('location')" class="location-pic-window" style="margin-top: 10px;">
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; width: 92%;">
              <div v-if="isFolder" style="margin-left: 10px;">
                <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" style="margin-right: 10px;">
                  {{tag.name}}
                </el-tag>
              </div>
              <div class="user-sm-title" style="opacity: 0.6; margin-left: 10px;" v-if="!isFolder">
                当前影集:{{selectedLocation.name}}
              </div>
              <div @click="changeModel" style="margin-left: 10px;">
                <div v-if="isFolder" style="font-size: 20px; display: flex; flex-direction: row; align-items: center;">
                  <div class="user-sm-title" style="margin-right: 15px; opacity: 0.6;">切换</div>
                  <div class="el-icon-folder-opened"></div>
                </div>
                <div v-if="!isFolder" style="font-size: 20px; display: flex; flex-direction: row; align-items: center;">
                  <div class="user-sm-title" style="margin-right: 15px; opacity: 0.6;">切换</div>
                  <div class="el-icon-picture-outline"></div>
                </div>
              </div>
            </div>
            <div v-if="!isFolder">
              <div style="margin-top:30px;">
                <ScrollTimeView></ScrollTimeView>
              </div>
            </div>
            <div v-if="isFolder" style="width: 100%;">
              <div style="margin-top: 20px; margin-bottom: 40px;">
                <div style="margin-bottom: 10px;" class="user-big-title">
                  当前影集
                </div>
                <div style="width: 230px; height: 200px; margin-right: 20px; position: relative;">
                  <div style="position: absolute; top:40%; left:25px; color: white;">
                    {{selectedLocation.name}}
                  </div>
                  <img :src="selectedLocation.picSrc" width="100%" height="100%">
                </div>
              </div>

              <div style="margin-top: 20px;">
                <div style="margin-bottom: 10px;" class="user-big-title">
                  历史遗迹
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                  <div v-for="(item, index) in locationListByType('历史遗迹')" :key='index'>
                    <div style="width: 230px; height: 200px; margin-right: 20px; position: relative;" class="dimback">
                      <div style="position: absolute; top:40%; left:25px; color: white;">
                        {{item.name}}
                      </div>
                      <img :src="item.picSrc" width="100%" height="100%" class="dim">
                    </div>
                  </div>
                  <div v-for="(item, index) in locationListByType('历史遗迹')" :key='index'>
                    <div style="width: 230px; position: relative; height: 200px; margin-right: 20px;" class="dimback">
                      <div style="position: absolute; top:40%; left:25px; color: white;">
                        {{item.name}}
                      </div>
                      <img :src="item.picSrc" width="100%" height="100%" class="dim">
                    </div>
                  </div>
                </div>
              </div>

              <div style="margin-top: 20px;">
                <div style="margin-bottom: 10px;" class="user-big-title">
                  流行热门
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                  <div v-for="(item, index) in locationListByType('流行热门')" :key='index'>
                    <div style="width: 230px; height: 200px; margin-right: 20px; position: relative;" class="dimback">
                      <div style="position: absolute; top:40%; left:25px; color: white;">
                        {{item.name}}
                      </div>
                      <img :src="item.picSrc" width="100%" height="100%" class="dim">
                    </div>
                  </div>
                </div>
              </div>

              <div style="margin-top: 20px;">
                <div style="margin-bottom: 10px;" class="user-big-title">
                  现代建筑
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                  <div v-for="(item, index) in locationListByType('现代建筑')" :key='index'>
                    <div style="width: 230px; height: 200px; margin-right: 20px; position: relative;" class="dimback">
                      <div style="position: absolute; top:40%; left:25px; color: white;">
                        {{item.name}}
                      </div>
                      <img :src="item.picSrc" width="100%" height="100%" class="dim">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div v-if="isActive('totalPic')" style="margin-top: 50px; width: 400px; height: 1500px; background-color: #2483D5;">

          </div>
        </div>
      </div>
    </div>

    <!-- <div class="zoom-control-pos">
      <div class="zoom-constrol-bigger box-center" style="font-size: 26px; color: white;">
        +
      </div>
      <div class="zoom-control-smaller box-center" style="font-size: 26px; color:#D3D3D3">
        -
      </div>
    </div> -->

  </div>
</template>

<script>
  import AppHeader from '@/components/appHeader/index.vue';
  import ScrollTimeView from '@/components/ScrollTimeView';
  import LocationShow from '@/components/LocationShow.vue'

  export default {
    name: 'UserPage',
    components: {
      AppHeader,
      ScrollTimeView,
      LocationShow,
    },
    mounted() {
      this.selectedLocation = this.locationList[0];
      this.show = true;
    },
    computed: {},
    data() {
      return {
        isFolder: false,
        activeType: 'location',
        window_offset: {
          width: 100,
          height: 400
        },
        tags: [{
            name: '爸爸',
            type: ''
          },
          {
            name: '妈妈',
            type: 'success'
          },
          {
            name: '生活娱乐',
            type: 'info'
          },
          {
            name: '小牛',
            type: 'warning'
          },
          {
            name: '美丽时光',
            type: 'danger'
          }
        ],
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
        windowHeight: 478,
        zoom: 3,
        show: false,
        selectedLocation: {},
        listShow: false,
        location: '',
        locationList: [{
            type: "历史遗迹",
            hasPic: true,
            position: {
              lng: 136.404,
              lat: 39.915
            },
            url: "/static/civil/历史遗迹.png",
            score: 4.9,
            footCount: 1500,
            name: '故宫博物院，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/design/door.jpeg',
          },
          {
            type: "历史遗迹",
            hasPic: false,
            position: {
              lng: 400.404,
              lat: 69.915
            },
            url: "/static/civil/历史遗迹.png",
            score: 4.8,
            footCount: 1314,
            name: '罗马角斗场，意大利',
            descript: '世界上最大的角斗场',
            picSrc: '/static/civil/罗马角斗场.jpeg',
          },
          {
            type: "流行热门",
            hasPic: true,
            position: {
              lng: 106.404,
              lat: 59.915
            },
            url: "/static/civil/历史遗迹.png",
            score: 4.4,
            footCount: 914,
            name: '德国大教堂，德国',
            descript: '网络观看最多的欧洲教堂',
            picSrc: '/static/civil/德国大教堂.jpeg',
          },
          {
            type: "现代建筑",
            hasPic: false,
            position: {
              lng: 108.404,
              lat: 69.915
            },
            url: "/static/civil/历史遗迹.png",
            score: 4.4,
            footCount: 904,
            name: '香港交易所，中国',
            descript: '世界上最宏大的宫廷建筑群',
            picSrc: '/static/civil/现代建筑2.jpeg',
          },
          {
            type: "流行热门",
            hasPic: false,
            position: {
              lng: 116.404,
              lat: 49.915
            },

            url: "/static/civil/历史遗迹.png",
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
      locationListByType(type) {
        console.log("location by type")
        var list = [];
        for (let i = 0; i < this.locationList.length; i++) {
          if (type === this.locationList[i].type) {
            console.log("this.location", this.locationList[i]);
            list.push(this.locationList[i])
          }
        }
        return list;
      },
      changeModel() {
        this.isFolder = !this.isFolder;
      },
      handleClick() {
        if (!this.selectedLocation.hasPic) {
          this.gotoPage('/addPicture');
        } else {
          if (this.isFolder) {
            window.scrollTo(0, 420);
          } else {
            window.scrollTo(0, 900);
          }
        }
      },
      setActive(type) {
        return this.activeType = type;
      },
      isActive(activeType) {
        return this.activeType === activeType;
      },

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
      draw({
        el,
        BMap,
        map
      }) {
        console.log("draw", el.style);
        var lng = this.centerPosition.lng;
        var lat = this.centerPosition.lat;
        const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
        el.style.left = pixel.x - 320 + 'px'
        el.style.top = pixel.y - 300 + 'px'
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
        console.log("gotoLocation", location);
        this.centerPosition = {
          lng: location.position.lng,
          lat: location.position.lat
        };
        this.openLocationWindow(location);
      },
      openLocationWindow(location) {
        this.show = false;
        this.centerPosition = {
          lng: location.position.lng,
          lat: location.position.lat
        };
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
        console.log("----------open111-------1", this.selectedLocation);
        document.addEventListener('click', this.hidePanel, false);
      },
      hide() {
        this.show = false
        document.removeEventListener('click', this.hidePanel, false)
      },
      hidePanel(e) {
        //点击除弹出层外的空白区域 && !this.$refs.overlayWindow.contains(e.target), 此处没有判断是否空白处
        if (this.$refs.overlayWindow) {
          this.hide()
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  // @import '../appStyle';

  @headTopHeight: 68px;
  @left-top: @headTopHeight + 8px;
  @right-top: @left-top + 30px;

  .location-pic-window {
    margin-left: -80px;
    // margin-top: 30px;
    width: 105%;
    position: relative;
    padding-top: 10px;
    background: rgba(243, 245, 246, 1);
  }

  .dim {
    opacity: 0.6;
    filter: alpha(opacity=60);
  }

  .dimback {
    background: #000;
  }

  .tab-block {
    margin-right: 48px;
    line-height: 50px;
  }

  .seleted-border {
    border-bottom: black solid 3px;
  }

  .over-lay {
    background-color: white;
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    position: absolute;
    top: 10px;
    left: 10px
  }

  .num-color {
    color: #2196F3;
    font-size: 20px;
  }

  .column-center {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .control-font {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 600;
    line-height: 20px;
  }

  .upload-box {
    width: 264px;
    height: 160px;
    background: rgba(243, 245, 246, 1);
    border-radius: 8px;
  }

  .user-sm-title{
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 600;
    // color: rgba(23, 0, 0, 1);
    color: darkred;
    line-height: 28px;
  }

  .user-big-title {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 28px;
  }

  .name-font {
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 32px;
  }

  .number-font {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 23px;
    margin-right: 4px;
  }

  .desc-font {
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 600;
    color: grey;
    line-height: 22px;
  }

  .normal-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .normal-space-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    width: 316px;
    height: 598px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px 0px 0px 20px;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .zoom-control-pos {
    position: absolute;
    left: 40px;
    bottom: 350px;
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

  .my-map {
    width: 100%;
    height: 680px;

    // .window-style {
    //   width: 100px;
    //   height: 200px;
    //   background-color: aliceblue;
    // }
  }
</style>
