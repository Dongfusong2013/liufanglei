<template>
   <div class="page-view">
     <div class="backgroundImg">
       <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
     </div>
     <HeadTop textColor="#fff"></HeadTop>
     <div class="scrollContainer cover"></div>
   </div>
</template>

<script>
    import HeadTop from '@/components/HeadTop'

    export default{
      name:'NewsDetail',
      components:{
        HeadTop,
      },
      beforeMount() {
        window.scrollTo(0, 0);
      }
    }
</script>

<style lang="less" scoped>
  @import "../appStyle";
    .page-view{
      width: 100%;
      height: 100%;
    }

    .scrollContainer {
      position: absolute;
      width: 1440px;
      height: 840px;
      top: 102px;
    }

</style>
