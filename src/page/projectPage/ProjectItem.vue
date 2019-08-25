<template>
  <div class="projectItemContainer">
    <div class="leftArrow">
      <img src="/static/index/left-white.png" height="100%" width="100%" v-if="!isFirst()" @click="prePic()" />
    </div>
    <div class="rightArrow">
    <img src="/static/index/right_white.png" height="100%" width="100%" v-if="!isLast()" @click="nextPic()" />
    </div>

    <div class="picContainer cover">
      <div v-for="(item, index) in projects" :key="index">
        <div class="picItem" @click="goTo('/projectInfo', item.id)">
          <div class="pic">
            <img height="100%" width="100%" v-bind:src="item.picSrc" />
          </div>
          <div id="descrip">{{item.projectName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ProjectItem",
    beforeMount(){
      console.log("===project",this.projects);
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
    data() {
      return {};
    },
    methods: {
      goTo(path, id) {
        var info = {
          path: path,
          query: {
            id: id,
          }
        }
        this.$router.push(info);
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../appStyle";

  .leftArrow {
    position: absolute;
    left: 50px;
    top: 300px;
    width: 30px;
    height: 50px;
  }

  .rightArrow {
    position: absolute;
    right: 50px;
    top: 300px;
    width: 30px;
    height: 50px;
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
      border: 1px solid gainsboro;

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
