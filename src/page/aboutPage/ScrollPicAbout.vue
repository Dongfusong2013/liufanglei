<template>
  <div>
    <el-carousel :interval="5000" arrow="never" height="650px" ref="carousel">
      <el-carousel-item>
        <MainItem :nextPic="nextPic" />
      </el-carousel-item>

      <el-carousel-item v-for="item in leftContentData" :key="item">
        <LeftContentItem :isFirst="isFirst" :isLast="isLast" :nextPic="nextPic" :prePic="prePic" 
        :title='item.title' :subTitle="item.subTitle" :rewards="item.rewards" :pics="item.pics"
        />
      </el-carousel-item> 

      <el-carousel-item>
        <div class="aboutItem1">
          <div class="leftArrow">
            <img
              src="/static/works/left_arrow.jpg"
              width="28px"
              height="56px"
              v-if="!isFirst()"
              @click="prePic()"
            />
          </div>

          <div class="rightArrow">
            <img
              src="/static/works/right_arrow.jpg"
              width="28px"
              height="56px"
              v-if="!isLast()"
              @click="nextPic()"
            />
          </div>

          <div class="item">
            <div class="picView">
              <div class="pic">
                <div class="innerPic">
                  <img src="/static/about/11.png" height="100%" width="100%" alt />
                </div>
              </div>

              <div class="pic">
                <div class="innerPic">
                  <img src="/static/about/12.png" height="100%" width="100%" alt />
                </div>
              </div>

              <div class="pic">
                <div class="innerPic">
                  <img src="/static/about/13.png" height="100%" width="100%" alt />
                </div>
              </div>
              <div class="pic">
                <div class="innerPic">
                  <img src="/static/about/14.png" height="100%" width="100%" alt />
                </div>
              </div>
            </div>

            <div class="disContent">
              <div class="titleFont">杭州国际博览中心（改造项目）</div>
              <div class="subTitleFont" style="margin-top: 10px;">第11届G20(杭州G20)峰会主会场</div>
              <div>
                <div class="contentFont" style="margin-top: 34px;">获奖项目</div>
                <div class="subContentFont" style="margin-top: 15px;">
                  2017-2018建筑设计奖(室内一等奖)
                  2018第十六届中国土木工程詹天佑奖
                  2016中国设计红星奖 特别奖
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import MainItem from "./MainItem";
import LeftContentItem from "./LeftContentItem";
export default {
  name: "ScrollPicAbout",

  data() {
    return {
      index: 0,
      maxCount: 5,
      leftContentData: [
        {                    
            title: "雁栖湖国际会议中心",
            subTitle:
              "第22届APEC(北京APEC)峰会主会场" +
              "第一、二届“一带一路”国际合作高峰论坛主会场",
            rewards: [
              "2015年全国优秀工程勘察设计行业 一等奖",
              "2015年北京市第十八届优秀工程 一等奖",
              "第十三届中国土木工程 詹天佑奖",
              "2015年中国建设工程 鲁班奖",
              "2015年全国质量奖 卓越项目奖",
              "2015年中国设计 红星奖特别奖"
            ],
            pics: [
              "/static/about/1.png",
              "/static/about/2.png",
              "/static/about/3.png",
              "/static/about/4.png"
            ]        
        },
        {
          title: "雁栖湖国际会议中心",
            subTitle:
              "北京国际电影节主会场（永久） G20能源部长峰会会场",
            rewards: [
              "2015年全国优秀工程勘察设计行业 一等奖",
              "2015年北京市第十八届优秀工程 一等奖",
              "第十三届中国土木工程 詹天佑奖",              
            ],
            pics: [
              "/static/about/5.png",
              "/static/about/6.png",
              "/static/about/7.png",              
            ]   
        },

      ]
    };
  },
  components: {
    MainItem,
    LeftContentItem
  },

  methods: {
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
      // return false;
      return this.index === this.maxCount - 1;
    },
    isFirst() {
      // return false;
      return this.index === 0;
    }
  }
};
</script>

<style lang="less" scoped>
.innerItem {
  width: 1160px;
  height: 440px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.topDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.lr_item {
  width: 570px;
  height: 180px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.pic {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 254px;
  height: 180px;
  background: linear-gradient(
    90deg,
    rgba(196, 232, 250, 1) 0%,
    rgba(250, 233, 207, 1) 100%
  );
}
.innerPic {
  width: 243px;
  height: 169px;
}

.contentView {
  height: 100%;
  padding: 6px 13px 36px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title {
  font-size: 20px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
  margin-bottom: 24px;
}

.subTitle {
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}

.descContent {
  margin-top: 13px;
  font-size: 16px;
  font-family: Helvetica, serif;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}

.leftArrow {
  position: absolute;
  left: 80px;
  top: 300px;
}

.rightArrow {
  position: absolute;
  right: 80px;
  top: 300px;
  z-index: 120;
}

.aboutContent {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 1.3125rem;
  position: relative;
}

.contentView {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 4.875rem;
  padding-right: 120px;
}
.line-style {
  margin-top: 0.75rem;
  background-color: black;
  width: 50px;
  height: 4px;
}

.disContent {
  width: 384px;
  .titleFont {
    font-size: 20px;
    font-family: Helvetica-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
  }

  .subTitleFont {
    font-size: 18px;
    font-family: Helvetica;
    color: rgba(102, 102, 102, 1);
    line-height: 22px;
  }

  .contentFont {
    font-size: 18px;
    font-family: Helvetica-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }

  .subContentFont {
    font-size: 16px;
    font-family: Helvetica;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
  }
}

.aboutItem1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}
.item {
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: antiquewhite;
}

//css pic部分
.picView {
  width: 650px;
  height: 440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .pic {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 210px;
    margin: 10px;
    background: linear-gradient(
      90deg,
      rgba(196, 232, 250, 1) 0%,
      rgba(250, 233, 207, 1) 100%
    );
  }

  .innerPic {
    width: 288px;
    height: 198px;
  }
}
</style>
