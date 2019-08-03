<template>
  <div class="projectItemContainer">
    <img
      src="/static/works/left_arrow.jpg"
      class="leftArrow"
      v-if="!isFirst()"
      @click="prePic()"
    />
    <img
      src="/static/works/right_arrow.jpg"
      class="rightArrow"
      v-if="!isLast()"
      @click="nextPic()"
    />
    <div class="picContainer">
      <div v-for="(item, index) in projects" :key="index">
        <div class="picItem">
          <div class="pic">
              <img height="90%" width="90%" v-bind:src="item.src" />
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
    isLast: { type: Function },
    isFirst: { type: Function },
    prePic: { type: Function },
    nextPic: { type: Function },
    projects: {type:Array}
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>

.projectItemContainer {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}

.picContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .picItem {
    .pic {
      width: 264px;
      height: 264px;
    }
    .descrip {
      font-size: 13;
    }
  }
}

.leftArrow {
  position: absolute;
  left: 0px;
  top: 285px;
  width: 40px;
}

.rightArrow {
  position: absolute;
  right: 0px;
  top: 285px;
  width: 40px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>


