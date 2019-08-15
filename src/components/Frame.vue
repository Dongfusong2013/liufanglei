<template>
  <div class="page-view">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor="#fff"></HeadTop>
    <div v-bind:class="{paddingView:isPaddingView}">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  import HeadTop from './HeadTop'
  export default {
    name: 'Frame',
    props: {
      'isPaddingView': false,
    },

    components: {
      HeadTop
    },
  }
</script>

<style lang="less" scoped>
  @import "../Page/appStyle";

  .page-view {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .paddingView{
    padding: 0px 120px;
  }

</style>
