
<template>
  <div class="scroll_container">
    <el-carousel :interval="5000" arrow="never" height="650px" ref="carousel">
      <el-carousel-item>
        <MainItem :nextPic="nextPic" />
      </el-carousel-item>
      <el-carousel-item v-for="(item, index) in items" :key="index">
          <ProjectItem
            :projects="item.data"
            :prePic="prePic"
            :nextPic="nextPic"
            :isFirst="isFirst"
            :isLast="isLast"
          />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import ProjectItem from "./ProjectItem";
import MainItem from "./MainItem";
import {fetchProjectList} from '@/api/project.js'

export default {
  name: "ScrollPicProject",
  components: {
    ProjectItem,
    MainItem
  },
  beforeMount(){
    fetchProjectList().then((response)=>{
          console.log("fetch project list",response.data.data);
          var list = response.data.data;
          var items = [];
           var index = 0;
           while(index < list.length){
             var data = [];
             for (let i = 0; i < 6 && index < list.length; i++){
                data.push(list[index++])
             }
             items.push({data});
           }
           this.items = items;
    });
  },

  data() {
    return {
      items: [
        {
          data: [
            {
              id:1,
              picSrc: "",
              projectName: ""
            },
            {
              id:2,
              picSrc: "",
              projectName: ""
            },
          ]
        },
      ],
      index: 0,
    };
  },
  computed:{
     maxCount(){
        return this.items.length + 1;
    },
  },
  methods: {
    isTrue() {
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
}
</style>
