<template>
  <div class="container">
    <HeadTop textColor='#ffff' />
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <div class="aboutContainer">
      <ScrollPicAbout />
    </div>
  </div>
</template>

<script>
  import HeadTop from '@/components/HeadTop.vue'
  import ScrollPicAbout from './ScrollPicAbout.vue'
  import {
    mapMutations
  } from "vuex";
  export default {


    name: 'AboutPage',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      ...mapMutations('menueActive', ['setActiveIndex']),
    },

    components: {
      HeadTop,
      ScrollPicAbout,
    },
    beforeMount() {
      console.log("---before mount----");
      this.setActiveIndex(3);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../appStyle';

  .container {
    width: 100%;
    height: 100%;
  }

  .aboutContainer {
    width: 100%;
    height: 100%;
  }
</style>
