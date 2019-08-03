
<template>
  <div class="scroll_container">    
    <el-carousel :interval="5000" arrow="never" height="650px" ref="carousel">
      <el-carousel-item v-for="(item, index) in items" :key="index">
            <ProjectItem :projects="item.data" :prePic="prePic" :nextPic="nextPic" :isFirst="isFirst" :isLast="isLast"/> 
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import ProjectItem from './ProjectItem'

export default {
  name: "ScrollPicProject",
  components: {
      ProjectItem,      
  },
  data() {
    return {
      items: [
        {
          page: 1,
          data: [
            {
              src: "/static/works/项目_001.jpg",
              name: "第九届厦门金砖会晤--会议中心及会展中心"
            },
            {
              src: "/static/works/项目_002.jpg",
              name: "第22届APEC（北京APEC）峰会主会场"
            },
            {
              src: "/static/works/项目_003.jpg",
              name: "雁栖湖国际会展中心"
            },
            {
              src: "/static/works/项目_004.jpg",
              name: "福州数字会展中心"
            },
            {
              src: "/static/works/项目_005.jpg",
              name: "安平丝网会展中心"
            },
            {
              src: "/static/works/项目_006.jpg",
              name: "北京香港马会会所"
            }
          ]
        },
        {
          page: 2,
          data: [
            {
              src: "/static/works/项目_001.jpg",
              name: "第九届厦门金砖会晤--会议中心及会展中心"
            },
            {
              src: "/static/works/项目_002.jpg",
              name: "第22届APEC（北京APEC）峰会主会场"
            },
            {
              src: "/static/works/项目_003.jpg",
              name: "雁栖湖国际会展中心"
            },
            {
              src: "/static/works/项目_004.jpg",
              name: "福州数字会展中心"
            },
            {
              src: "/static/works/项目_005.jpg",
              name: "安平丝网会展中心"
            },
            {
              src: "/static/works/项目_006.jpg",
              name: "北京香港马会会所"
            }
          ],
        },
      ],
      index: 0,
      maxCount: 2
    };
  },
  methods: {
    isTrue(){    
        console.log("isture....");
        return true;
    },
    prePic() {
      console.log("pre...");
      this.index = (this.index - 1) % this.maxCount;
      this.$refs.carousel.setActiveItem(this.index);
    },
    nextPic() {
      console.log("next...");
      this.index = (this.index + 1) % this.maxCount;
      this.$refs.carousel.setActiveItem(this.index);
    },
    isLast() {
      return this.index == this.maxCount - 1;
    },
    isFirst() {
      return this.index == 0;
    }
  }
};
</script>
<style lang="less" scoped>
.scroll_container {
  width: 100%;
  height: 100%;
  z-index: 100;
}

</style>
