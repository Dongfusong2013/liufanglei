<template>
  <div>
    <div class="design-container">
      <HeadTop textColor="#ffff"></HeadTop>
      <div class="designContent">
        <ScrollPic />
      </div>
    </div>

  </div>
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import ScrollPic from "./ScrollPicDesign.vue";

export default {
  name: "DesignPage",
  components: {
    HeadTop,
    ScrollPic
  }
};
</script>

<style lang="less">
.design-container {
  background-size: 100%, 100%;
  background: aliceblue url("/static/home/首页_02.png") no-repeat fixed top;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.designContent {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
