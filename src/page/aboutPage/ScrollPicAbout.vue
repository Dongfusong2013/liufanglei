<template>
  <div>
    <el-carousel :interval="5000" arrow="never" height="650px" ref="carousel">
      <el-carousel-item>
        <MainItem :nextPic="nextPic" />
      </el-carousel-item>
      <el-carousel-item v-for="(item,index) in leftContentData" :key="index">
        <LeftContentItem :isFirst="isFirst" :isLast="isLast" :nextPic="nextPic" :prePic="prePic" :title='item.title'
          :subTitle="item.subTitle" :rewards="item.rewards" :pics="item.pics" />
      </el-carousel-item>
      <el-carousel-item>
        <FourItems :isFirst="isFirst" :isLast="isLast" :nextPic="nextPic" :prePic="prePic" />
      </el-carousel-item>
     <el-carousel-item v-for="(item,index) in rightContentData" :key="index">
        <RightContentItem :isFirst="isFirst" :isLast="isLast" :nextPic="nextPic" :prePic="prePic" :title='item.title'
          :subTitle="item.subTitle" :rewards="item.rewards" :pics="item.pics" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import MainItem from "./MainItem";
  import LeftContentItem from "./LeftContentItem";
  import FourItems from './FourItems';
  import RightContentItem from './RightContentItem'

  export default {
    name: "ScrollPicAbout",

    data() {
      return {
        index: 0,
        leftContentData: [{
            title: "雁栖湖国际会议中心",
            subTitle: "第22届APEC(北京APEC)峰会主会场" +
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
            subTitle: "北京国际电影节主会场（永久） G20能源部长峰会会场",
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
        ],
        rightContentData: [{
          title: "雁栖湖国际会议中心",
          subTitle: "北京国际电影节主会场（永久） G20能源部长峰会会场",
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
        }]
      };
    },
    components: {
      MainItem,
      LeftContentItem,
      RightContentItem,
      FourItems,
    },

    computed: {
      totalCount() {
        return this.leftContentData.length + this.rightContentData.length + 1+1;
      }
    },
    methods: {
      prePic() {
        console.log("pre...");
        this.index = (this.index - 1) % this.totalCount;
        this.$refs.carousel.setActiveItem(this.index);
      },
      nextPic() {
        console.log("next...");
        this.index = (this.index + 1) % this.totalCount;
        this.$refs.carousel.setActiveItem(this.index);
      },
      isLast() {
        return this.index === this.totalCount - 1;
      },
      isFirst() {
        return this.index === 0;
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
