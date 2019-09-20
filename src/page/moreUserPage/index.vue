<template>
  <div class="history-contaienr">
    <div style="position: absolute; top:0; width:100%">
      <AppHeader noBackground="false" />
    </div>
    <div style="margin-top: 68px;" class="border-bottom">
      <DetailPicWindow></DetailPicWindow>
    </div>
  </div>
</template>

<script>
  import DetailPicWindow from '@/components/DetailPicWindow.vue'
  import AppHeader from '@/components/appHeader/index.vue'

  export default {
    name: 'MoreUserPage',
    mounted(){
       window.scrollTo(0,0);
    },
    components: {
      DetailPicWindow,
      AppHeader
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>

  .border-bottom {
    border-top: #D3D3D3 solid 1px;
  }

  .history-container {
    color: white;
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
</style>
