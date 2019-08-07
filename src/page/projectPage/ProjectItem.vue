<template>
  <div class="projectItemContainer">
    <img src="/static/works/left_arrow.jpg" class="leftArrow" v-if="!isFirst()" @click="prePic()" />
    <img src="/static/works/right_arrow.jpg" class="rightArrow" v-if="!isLast()" @click="nextPic()" />
    <div class="picContainer cover" @click="goTo('/projectInfo')">
      <div v-for="(item, index) in projects" :key="index">
        <div class="picItem">
          <div class="pic">
            <img height="100%" width="100%" v-bind:src="item.src" />
          </div>
          <div id="descrip">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ProjectItem",
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
    data() {
      return {};
    },
    methods:{
      goTo(path){
          this.$router.push(path);
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../appStyle";

  .leftArrow {
    position: absolute;
    left: 40px;
    top: 300px;
    width: 49px;
    height: 49px;
  }

  .rightArrow {
    position: absolute;
    right: 40px;
    top: 300px;
    width: 49px;
    height: 49px;
  }

  .projectItemContainer {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px 110px;
    position: relative;
    // background-color:antiquewhite;
  }

  .picContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .picItem:hover {
      box-shadow: 2px 2px 5px #333333;
    }

    .picItem {
      width: 340px;
      height: 300px;
      background-color: aliceblue;
      box-sizing: border-box;
      margin-top: 15px;
      margin-left: 40px;      
      border:1px solid gainsboro;
      .pic {
        width: 340px;
        height: 256px;
      }

      #descrip {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 40px;
        text-align: center;
      }
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
