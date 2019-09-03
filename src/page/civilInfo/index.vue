<template>
  <div class="history-contaienr">
    <div class="backgroundImg">
      <img src="/static/civil/故宫-午门.png" alt height="100%" width="100%" />
    </div>
    <AppHeader noBackground="true"/>
    <div>
        北京、沈阳明清皇宫 中国
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/appHeader'
  export default {
    name: 'Civilnfo',
    components:{
      AppHeader,
    },
    mounted() {
      console.log("mounted....");
    }
  }
</script>

<style lang="less" scoped >
   @import '../appStyle.less';
  .history-contaienr {
    // background: rgba(243, 245, 246, 1);
    color:white;
    width: 1550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
</style>
