<template>
  <div class="history-container">
    <div style="position: absolute; top:0; width:100%">
      <AppHeader noBackground="true" />
    </div>
    <LocationShow></LocationShow>
    <div style="width: 100%; height: 100%;">
      <div class="view-title view-pos">
        历史文明
      </div>
      <ScrollTimeView></ScrollTimeView>
    </div>
    <div class="view-title share-pos">
      <div style="margin-left: 86px; margin-top: 40px; ">
        用户分享
      </div>
      <div style="margin-top: 40px; ">
        <PicShare></PicShare>
      </div>
    </div>
  </div>
</template>

<script>

  import AppHeader from '@/components/appHeader';
  import ScrollTimeView from '@/components/ScrollTimeView';
  import PicShare from '@/components/PicShare.vue'
  import LocationShow from '@/components/LocationShow.vue'

  export default {
    name: 'Civilnfo',
    components: {
      AppHeader,
      LocationShow,
      ScrollTimeView,
      PicShare,
    },
    mounted() {
      console.log("mounted....");
    },
    methods:{
        gotoPage(path){
            this.$router.push(path);
        }
    }

  }
</script>

<style lang="less" scoped>
  // @import '../appStyle.less';

  .share-pos {
    margin-top: 180px;
    width: 100%;
    height: 800px;
    box-sizing: border-box;
    // background-color: aliceblue;
  }

  .backgroundImg {
    width: 100%;
    height: 800px;
  }

  .view-pos {
    color: #000000;
    margin-left: 86px;
    margin-top: 40px;
    margin-bottom: 27px;
  }

  .view-title {
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 32px;
  }


  .sm-title {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
  }

  .history-container {
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
</style>
