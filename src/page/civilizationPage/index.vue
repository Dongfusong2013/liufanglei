<template>
  <div class="history-contaienr">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor='#ffff' />
    <baidu-map class="map" center="北京">
      <!-- <button v-on:click="show"></button> -->
      <div class="tabContainer">
        <div class="tabItem">
          历史遗迹
        </div>
        <div class="tabItem itemActive">
          现代建筑
        </div>
        <div class="tabItem">
          流行景点
        </div>
        <div class="tabItem">
          神秘探索
        </div>
      </div>
      <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" @click="openWindow" animation="BMAP_ANIMATION_BOUNCE">
        <!-- <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
        <bm-info-window class="window-style" :position="{lng: 116.404, lat: 39.915}" :show="show" @close="infoWindowClose"
          @open="infoWindowOpen">
          <div class="window-style">
            我爱北京天安门
          </div>
        </bm-info-window>
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
  import HeadTop from '@/components/HeadTop.vue'
  // import BaiduMap from 'vue-baidu-map'

  export default {
    name: 'civilizationPage',
    data() {
      return {
        show: false,
        locationList: [{
          poistion: {
            lng: 116.404,
            lat: 39.915
          },
          label: '天安门'
        }, ]
      }
    },

    components: {
      HeadTop,
      // BaiduMap,
    },

    methods: {
      openWindow() {
        console.log("open window...");
        this.show = true;
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
<style lang="less" scoped>
  @import '../appStyle';

  .history-contaienr {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .map {
    width: 100%;
    height: 700px;

    .window-style {
      width: 100px;
      height: 200px;
      background-color: aliceblue;
    }
  }

  .tabContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 10px;
    position: absolute;
    top: 120px;
    left: 580px;

    .tabItem {
      padding: 4px 3px;
      // line-height: 15px;
      text-align: center;
      border: 1px solid #000;
      margin-right: 10px;
      font-size: 12px;
      background-color: white;
      color: black;
      font-weight: bold;
    }

    .itemActive {
      color: white;
      background-color: black;
    }
  }
</style>
