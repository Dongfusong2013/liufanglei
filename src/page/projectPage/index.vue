<template>
  <div class="project-container">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor="#fff"></HeadTop>
    <div class="scrollContainer cover"></div>
    <ScrollPicProject />
  </div>
</template>

<script>
import HeadTop from "@/components/HeadTop.vue";
import ScrollPicProject from "./ScrollPicProject";
import {mapMutations} from 'Vuex';
export default {
  name: "ProjectPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  methods:{
    ...mapMutations('menueActive',['setActiveIndex']),
  },

  beforeMount() {
    console.log("----before mount projectPage-----");
    this.setActiveIndex(1);
  },

  components: {
    HeadTop,
    ScrollPicProject
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../appStyle";

.scrollContainer{
  // padding: 0px 120px;
  width: 1200;
  height: 640px;
  top: 94px;
  position: absolute;
}

.project-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
