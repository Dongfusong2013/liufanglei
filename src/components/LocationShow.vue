<template>
  <div>
    <div style="width: 1430px; height: 800px;">
      <img :src="bgUrl" height="100%" width="100%" />
    </div>
    <div class="location-view row-space">
      <div class="bigTitle">
        <div>
          {{name}}
        </div>

        <div style="margin-top: 32px; width: 655px; height: 120px;" class="sm-title">
          作为15至20世纪明清皇帝的皇室住所，北京和沉阳的明清皇宫是晚期封建中国的国家权力中心。明朝皇帝朱棣在1406年至1420年间建造了明清故宫，
          由明朝皇帝朱棣于1406年至1420年建造，见证了明朝和明朝十五位皇帝在接下来的505年中的登基。沉阳故宫建于1625年至1637年间由Nurgaci为
          清代女真/满族祖先建造，于1644年在北京建立。也被称为后津宫或盛林宫，后来被用作王室的二级资本和临时住所，直到1911年。
        </div>
      </div>
      <div style="width: 218px; height: 218px; margin-left: 203px;">
        <RaddarChart></RaddarChart>
      </div>
    </div>
  </div>

</template>

<script>
  import RaddarChart from '@/components/RaddarChart.vue';
  export default {
    name: 'LocationShow',
    components: {
      RaddarChart,
    },
    props:{
       bgUrl:String,
       name:String,
    }
  }
</script>

<style lang="less" scoped>
  .location-view {
    position: absolute;
    left: 189px;
    top: 139px;
  }

  .view-title {
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 32px;
  }

  .row-space {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .sm-title {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
  }

  .bigTitle {
    font-size: 50px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 70px;
  }
</style>
