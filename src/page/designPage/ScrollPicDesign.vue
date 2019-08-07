<template>
  <div class="scroll_container">
    <div class="picContainer">
      <el-carousel :interval="5000" arrow="never" height="650px" ref="carousel">
        <el-carousel-item>
          <MainView :nextPic="nextPic"></MainView>
        </el-carousel-item>
        <el-carousel-item>
          <PicView/>
        </el-carousel-item>
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <div class="wholeContainer">
            <img src="/static/works/left_arrow.jpg" class="leftArrow" v-if="!isFirst()" @click="prePic()" />
            <img src="/static/works/right_arrow.jpg" class="rightArrow" v-if="!isLast()" @click="nextPic()" />
            <div class="scrollContainer">
              <div class="picContainer">
                <img :src="item.picSrc" alt="" height="100%" width="100%">
                <div class="fix-pic">
                  <div style="margin-top: 10px;">
                    {{item.title}}
                  </div>
                  <div class="spe-line">
                  </div>
                  <div style="margin-bottom: 10px;">
                    {{item.added}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  import MainView from './MainView';
  import PicView from './PicView';
  export default {
    components: {
      MainView,
      PicView,
    },
    data() {
      return {
        index: 0,
        // heigth:'680px'
        items: [{
          picSrc: '/static/design/设计灵感_03.jpg',
          title: '北京怀柔雁西湖国际会议中心',
          added: '汉唐飞扬 鸿雁展翼'
        }]
      }
    },
    computed:{
      totalCount(){
          return this.items.length + 1;
      }
    },
    methods: {
      prePic() {
        console.log('pre...');
        this.index = (this.index - 1) % this.totalCount;
        this.$refs.carousel.setActiveItem(this.index);

      },
      nextPic() {
        console.log('next...');
        this.index = (this.index + 1) % this.totalCount;
        this.$refs.carousel.setActiveItem(this.index);
      },
      isLast() {
        return this.index == this.totalCount - 1;
      },
      isFirst() {
        return this.index == 0;
      }
    }
  }
</script>

<style lang="less" scoped>
  .wholeContainer {
    width: 100%;
    height: 100%;
    padding: 0px 120px;
    box-sizing: border-box;
    position: relative;
  }

  .scroll_container {
    width: 100%;
    height: 100%;
  }
  .scrollContainer{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .picContainer {
    width: 100%;
    height: 100%;
  }

  .leftArrow {
    position: absolute;
    left: 50px;
    top: 270px;
    width: 40px;
    z-index: 101;
  }

  .rightArrow {
    position: absolute;
    right: 50px;
    top: 270px;
    width: 40px;
    z-index: 101;
  }

  .spe-line {
    background-color: white;
    height: 4px;
    width: 80px;
  }

  .fix-pic {
    width: 30%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 40px;
    left: 40px;
    background-color: black;
    z-index: 100;
    color: white;
  }

  .item-style {
    width: 264px;
    height: 264px;
    padding: 20px 30px;
    // margin-bottom: 40px;
  }

  #item-font {
    font-size: 13px;
    text-align: center;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
