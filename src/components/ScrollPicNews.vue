<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="scroll_container">
     <el-carousel :interval="5000" arrow="never" height="650px" ref="carousel">
        <el-carousel-item >
        <img src="/static/works/left_arrow.jpg" class="leftArrow"  v-if="!isFirst()" @click="prePic()"/>
        <img src="/static/works/right_arrow.jpg" class="rightArrow" v-if="!isLast()" @click="nextPic()"/>
          <div class="picContainer">
            <div  v-for="(item, index) in items" :key="index">
              <div class="item-style">
                <img height="100%" width="100%" v-bind:src="item.src"/>
                <div>
                  {{item.time}}
                </div>
                <div class="item-font">
                  {{item.name}}
                </div>
            </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
        <img src="/static/works/left_arrow.jpg" class="leftArrow"  v-if="!isFirst()" @click="prePic()"/>
        <img src="/static/works/right_arrow.jpg" class="rightArrow" v-if="!isLast()" @click="nextPic()"/>
          <div class="picContainer">
            <div  v-for="(item, index) in items" :key="index">
              <div class="item-style">
                <img height="100%" width="100%" v-bind:src="item.src"/>
                <div>
                  {{item.time}}
                </div>
                <div class="item-font">
                  {{item.name}}
                </div>
            </div>
            </div>
          </div>
        </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>

export default {
  name:'ScrollPicNews',
  components:{
  },
  data(){
      return {
        items:[
            {
          src:'/static/works/新闻_03.jpg',
          time:'2019 06/02',
          name:'中央一套（CCTV综合频道）《开讲啦》',
        },
        {
          src:'/static/works/新闻_03.jpg',
          time:'2019 06/02',
          name:'中央一套（CCTV综合频道）《开讲啦》',
        },
         {
          src:'/static/works/新闻_03.jpg',
          time:'2019 06/02',
          name:'中央一套（CCTV综合频道）《开讲啦》',
        },
        {
          src:'/static/works/新闻_03.jpg',
          time:'2019 06/02',
          name:'中央一套（CCTV综合频道）《开讲啦》',
        },
         {
          src:'/static/works/新闻_03.jpg',
          time:'2019 06/02',
          name:'中央一套（CCTV综合频道）《开讲啦》',
        },
        {
          src:'/static/works/新闻_03.jpg',
          time:'2019 06/02',
          name:'中央一套（CCTV综合频道）《开讲啦》',
        },

      ],
        index:0,
        maxCount:2
      }
  },
  methods:{
     prePic(){
       console.log('pre...');
        this.index  =  (this.index - 1) % this.maxCount;
        this.$refs.carousel.setActiveItem(this.index);

     },
     nextPic(){
       console.log('next...');
       this.index  =  (this.index + 1) % this.maxCount;
       this.$refs.carousel.setActiveItem(this.index);
     },
     isLast(){
        return this.index == this.maxCount - 1;
     },
     isFirst(){
       return this.index == 0;
     }
  }
}

</script>

<style lang="less" scoped>
 .scroll_container{
    width: 90%;
    height: 100%;
    // z-index: 100;
    position: relative;
 }

  .picContainer{
    padding: 40px 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .leftArrow{
      position: absolute;
      left: 30px;
      top: 270px;
      width: 40px;
      // height: 50px;
  }

  .rightArrow{
    position: absolute;
    right: 30px;
    top: 270px;
    width: 40px;
    // height: 50px;
  }

  .item-style{
     width: 264px;
     // height: 264px;
     padding: 20px 20px;
  }

  .item-font{
    font-size: 10px;
    text-align: start;
  }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }


</style>
