<template>
  <div>
    <AppHeader noBackground="false" />
    <div class="content-view">
      <div class="upload-box">
        <div class="left-control">
          <div style="padding: 16px;">
            <div class="location-title">北京明清故宫</div>
            <div>
              北京市东城区景山前街4号
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
    name: 'AddPicture',
    components: {
      AppHeader
    }
  }
</script>

<style scoped>
  .location-title {
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(221, 45, 74, 1);
    line-height: 32px;
  }

  .normal-title {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 28px;
  }

  .upload-box {
    width: 1200px;
    height: 703px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
  }

  .content-view {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(246, 245, 243, 1);
    width: 100%;
    height: 800px;
  }

  .page-view {
    width: 100%;
    height: 100%;
  }

  .left-control {
    padding: 16px;
    width: 312px;
    height: 672px;
  }
</style>
