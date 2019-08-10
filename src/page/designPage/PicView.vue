<template>
  <div class="page-view">
    <div class="leftArrow">
      <img src="/static/index/left-white.png" height="100%" width="100%" v-if="!isFirst()" @click="prePic()" />
    </div>
    <div class="rightArrow">
    <img src="/static/index/right-white.png" height="100%" width="100%" v-if="!isLast()" @click="nextPic()" />
    </div>   
    <div class="content-view row-wraper wrapp-right-offset cover">
      <div class="pic-size pic-margin-right" v-for="(item, index) in pics" :key="index">
        <img :src="item" alt="" height="100%" width="100%">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PicView',
    props:{

    },
    data() {
      return {
        pics: [
          '/static/design/龙图.jpg',
          '/static/design/龙图.jpg',
          '/static/design/龙图.jpg',
          '/static/design/龙图.jpg',
          '/static/design/龙图.jpg',
          '/static/design/龙图.jpg',
        ]
      }
    },
    props: {
      isLast: {
        type: Function
      },
      isFirst: {
        type: Function
      },
      prePic: {
        type: Function
      },
      nextPic: {
        type: Function
      },
      projects: {
        type: Array
      }
    },
  }
</script>

<style lang="less" scoped>
  @import '../appStyle';
 .leftArrow {
    position: absolute;
    left: 70px;
    top: 300px;
    width: 30px;
    height: 50px;
  }

  .rightArrow {
    position: absolute;
    right: 70px;
    top: 300px;
    width: 30px;
    height: 50px;
  }
  .wrapp-right-offset {
    padding-left: 40px;
  }

  .page-view {
    width: 100%;
    height: 100%;
    padding: 0px 120px;
    box-sizing: border-box;
  }

  .row-wraper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }

  .content-view {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .pic-margin-right {
    margin-right: 50px;
  }

  .pic-size {
    width: 300px;
    height: 240px;
    background-color: aliceblue;
  }

  .pic-size:hover {
    box-shadow: 2px 2px 5px #333333;
  }
</style>
