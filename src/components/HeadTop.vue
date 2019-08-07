<template>
<div class="head-container">
    <div id="leftTitle" v-bind:style="{color:textColor}" @click="gotoPage('/')">
      LFL
    </div>
    <div id="menueItems">
      <div v-for="(item, index) in items" :key="index">
        <div class="item" v-bind:class="{active:isActive(index)}"
             v-bind:style="{borderBottomColor:textColor, color:textColor}"
             v-on:click="goTo(index, item.path)"
        >{{item.content}}
        </div>
      </div>
    </div>
  </div>
<!-- </div> -->

</template>

<script>
  import {mapState, mapMutations} from "vuex";

  export default {
    name: 'HeadTop',
    props: ['textColor'],
    data() {
      return {
        items: [
          {content: '交流', path: '/main'},
          {content: '项目', path: '/project'},
          {content: '作品', path: '/design'},
          {content: '关于', path: '/about'},
          {content: '文明印记', path: '/history'},
        ],
      }
    },

    computed: {
      ...mapState('menueActive', ['activeIndex']),
    },

    methods: {
      ...mapMutations('menueActive', ['setActiveIndex']),

      goTo(index, path) {
        console.log("path:", path);
        this.$router.push(path);
        this.setActiveIndex(index);
      },

      gotoPage(path){
        this.$router.push(path);
        console.log('-----gotopage=====');
      },
      isActive(index) {
        return index == this.activeIndex;
      }
    }
  }
</script>

<style lang="less" scoped>
  .head-container {
    width: 100%;
    height: 94px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 120px;
  }

  #leftTitle {
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-align: center;
  }

  #menueItems {
    display: flex;
    align-items: center;
    flex-direction: row;
    // padding-right: 150px;
  }
  .item {
    color: white;
    font: inherit;
    margin-left: 20px;
    line-height: 60px;
    font-size: 20px;
    font-family: PingFangSC-Regular,serif;
    font-weight: bold;
    color: rgba(69, 69, 69, 1);
  }

  .active {
    border-bottom: 3px solid white;
  }

</style>
