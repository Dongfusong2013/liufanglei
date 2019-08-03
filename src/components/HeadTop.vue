<template>
  <div class="head-container">
    <div id="leftTitle" v-bind:style="{color:textColor}">
      刘方磊工作室
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
</template>

<script>
  import {mapState, mapMutations} from "vuex";

  export default {
    name: 'HeadTop',
    props: ['textColor'],
    data() {
      return {
        items: [
          {content: '首页', path: '/'},          
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

      isActive(index) {
        return index == this.activeIndex;
      }
    }
  }
</script>

<style lang="less" scoped>

  @padding-edge: 120px;
  @head-height:94px;

  .head-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    align-items: center;
    width: 100%;
    height: @head-height;
    box-sizing: border-box;//非常重要由默认的content改为border,padding之后不影响整个宽度
    padding-left:  @padding-edge;
    padding-right:  120px;
  }

  #leftTitle {    
    font-size: 30px;
    font-weight: bold;
    color: white;
  }

  #menueItems {
    display: flex;
    align-items: center;
    flex-direction: row;
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
