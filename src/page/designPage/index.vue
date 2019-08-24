<template>
    <div class="design-container">
      <HeadTop textColor="#ffff"></HeadTop>
      <div class="backgroundImg">
          <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
      </div>
        <div class="designContent">
            <ScrollPic />
        </div>
      </div>
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import ScrollPic from "./ScrollPicDesign.vue";
import {mapMutations} from 'vuex';

export default {
  name: "DesignPage",
  components: {
    HeadTop,
    ScrollPic
  },
  methods:{
    ...mapMutations('menueActive', ['setActiveIndex']),
  },
  beforeMount() {
      this.setActiveIndex(2);
  }
};

</script>

<style lang="less">
@import "../appStyle";

.design-container {
  height: 100%;
  width: 100%;
}

.designContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
