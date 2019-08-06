
<template>
  <div class="dynamicContainer">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor="#fff"></HeadTop>
    <div class="scrollContainer cover"></div>

    <el-carousel :interval="5000" arrow="always" height="580px" ref="carousel">
      <el-carousel-item v-for="(item, index) in srcollPis" :key="index">
        <div class="picContainer">
          <div class="picScroll">
            <img :src="item" alt height="100%" width="100%" />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="contentView cover">
      <div class="leftView">
        <div class="title titleSpace">美学理念</div>
        <div class="line"></div>
        <div class="mainPic">
          <img src="/static/main/美学理念.png" alt height="100%" width="100%" />
        </div>
        <div class="article">
          <div class="title titleSpace">汉唐飞扬，以道营器</div>
          <div class="subtitle">汉唐飞扬，以道营器汉唐飞扬，以道营器</div>
          <div class="contentFont contentTop">
            汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞
            唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬
            汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞
            唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬
          </div>
        </div>
      </div>

      <div class="rightView">
        <div class="title">新闻</div>
        <div class="line"></div>
        <div v-for="(item, index) in arctiles" :key="index">
          <ShowArticleItem
            :timeTitle="item.timeTitle"
            :picSrc="item.picSrc"
            :articleTitle="item.articleTitle"
            :articleSumary="item.articleSumary"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    dongfusong
  </div>-->
</template>

<script>
import HeadTop from "@/components/HeadTop.vue";
import ShowArticleItem from "./ShowArticleItem";
// import MainContentView from '../components/MainContentView'

export default {
  name: "MainPage",
  components: {
    HeadTop,
    ShowArticleItem
  },
  data() {
    return {
      srcollPis: [
        "/static/main/scroll1.png",
        "/static/workdetail/项目详情_03.jpg"
      ],
      arctiles: [
        {
          timeTitle: "五月 2019 人民网",
          articleTitle: "汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事",
          picSrc: "/static/main/1.png",
          articleSumary:
            "二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……"
        },
        {
          timeTitle: "五月 2019 人民网",
          articleTitle: "汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事",
          picSrc: "/static/main/2.png",
          articleSumary:
            "二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……"
        },
        {
          timeTitle: "五月 2019 人民网",
          articleTitle: "汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事",
          picSrc: "/static/main/3.png",
          articleSumary:
            "二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……" +
            "北京雁栖湖成功举办，在此让世界见识了…北京雁栖湖成功举办，在此让世界见识了…北京雁栖湖成功举办，在此让世界见识了…北京雁栖湖成功举办，在此让世界见识了…"
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
@import "../appStyle";

.scrollContainer {
  position: absolute;
  width: 1440px;
  height: 580px;
  top: 102px;
}

.picContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.picScroll {
  width: 1440px;
  height: 800px;
  padding: 0px 100px;
}

.headContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contentView {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 70px 120px;
  width: 1440px;
  box-sizing: border-box;
  // background-color: antiquewhite;

  .leftView {
    // background-color: aliceblue;
    // margin-right: 80px;
    .title {
      font-size: 30px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(69, 69, 69, 1);
      line-height: 42px;
    }
    .line {
      margin-top: 12px;
      width: 49px;
      height: 4px;
      background-color: black;
    }
    .mainPic {
      margin-top: 36px;
      background-color: beige;
      width: 728px;
      height: 310px;
    }
    .article {
      margin-top: 36px;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 20px;
        font-family: Helvetica-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 24px;
      }
      .titleSpace {
        margin-bottom: 4px;
      }

      .subtitle {
        font-size: 16px;
        font-family: Helvetica;
        color: rgba(102, 102, 102, 1);
        line-height: 19px;
      }
      .contentTop {
        margin-top: 17px;
      }

      .contentFont {
        max-width: 729px;
        font-size: 16px;
        font-family: Helvetica;
        color: rgba(153, 153, 153, 1);
        line-height: 30px;
      }
    }
  }

  .rightView {
    // background-color: antiquewhite;
    .title {
      font-size: 30px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(69, 69, 69, 1);
      line-height: 42px;
    }
    .line {
      margin-top: 12px;
      width: 49px;
      height: 4px;
      background-color: black;
    }
  }
  .dynamicContainer {
    width: 100%;
    height: 100%;
  }
}
</style>
