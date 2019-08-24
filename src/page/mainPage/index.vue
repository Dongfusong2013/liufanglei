<template>
  <div class="dynamicContainer">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor="#fff"></HeadTop>
    <div class="scrollContainer cover"></div>

    <el-carousel :interval="5000" arrow="always" height="580px" ref="carousel">
      <el-carousel-item v-for="(item, index) in scrollImages" :key="index">
        <div class="picContainer">
          <img :src="item.imagePath" alt height="100%" width="100%" />
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="contentView cover">
      <div class="leftView">
        <div>
          <div class="row-box-space-between">
            <div class="title titleSpace">美学理念</div>
            <div class="more-font sm-margint-top" @click="goto('/articleListPage',0)">
              MORE >>
            </div>
          </div>
          <div class="line"></div>
          <div @click="gotoPage('/articleDetail', 'ideaArticle', ideaArticle.id)">
            <div class="mainPic">
              <img :src="ideaArticle.picSrc" alt height="100%" width="100%" />
            </div>
            <div class="article">
              <div class="title titleSpace">{{ideaArticle.articleTitle}}</div>
              <div class="subtitle sm-margint-top">{{ideaArticle.articleSubTitle}}</div>
              <div class="contentFont contentTop">
                {{ideaArticle.articleSummary}}
              </div>
            </div>
        </div>
        </div>
        <div>
          <div class="row-box-space-between big-top-margin">
            <div class="title titleSpace">专题报道</div>
            <div class="more-font sm-margint-top" @click="goto('/articleListPage',2)">
              MORE >>
            </div>
          </div>
          <div class="line"></div>
          <div @click="gotoPage('/articleDetail', 'focusArticle', focusArticle.id)">
            <div class="mainPic">
                <!-- <img :src="item.picSrc" alt height="100%" width="100%" /> -->
                <VideoPlayerComponent width="728" height="310" :picSrc="focusArticle.picSrc" videoSrc="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" />
            </div>
            <div class="article">
              <div class="title titleSpace">{{focusArticle.articleTitle}}</div>
              <div class="subtitle sm-margint-top">{{focusArticle.articleSubTitle}}</div>
              <div class="contentFont contentTop">
                {{focusArticle.articleSummary}}
              </div>
            </div>
        </div>
        </div>
      </div>
      <div class="rightView">
        <div class="row-box-space-between">
          <div class="title titleSpace">新闻</div>
          <div class="more-font sm-margint-top" @click="goto('/articleListPage',1)">
            MORE >>
          </div>
        </div>
        <div class="line"></div>
        <div v-for="(item, index) in newsArticles" :key="index" @click="gotoPage('/articleDetail', 'newsArticle',item.id)">
          <ShowArticleItem  :picSrc="item.picSrc" :articleTitle="item.articleTitle"
            :articleSumary="item.articleSummary" :author="item.author" :displayTime="item.displayTime"/>
        </div>
      </div>
    </div>
    <div>
      <Cooperators />
    </div>
    <el-backtop :bottom="100" :visibility-height="100">
      <div style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }">
      <div style="width: 48px; height: 48px;">
        <img src="/static/index/top.png" alt="" height="100%" width="100%">
      </div>
      </div>
    </el-backtop>
  </div>
</template>

<script>
  import HeadTop from "@/components/HeadTop.vue";
  import ShowArticleItem from "./ShowArticleItem";
  import Cooperators from './Cooperators';
  import {mapMutations} from 'vuex';
  import {fetchMainArticleList} from '@/api/article.js'
  import VideoPlayerComponent from '@/components/VideoPlayerComponent.vue'

  export default {
    name: "MainPage",
    components: {
      HeadTop,
      ShowArticleItem,
      Cooperators,
      VideoPlayerComponent,
    },
    methods: {
      ...mapMutations('menueActive', ['setActiveIndex']),
      goto(path, index) {
        var info = {
          path: path,
          query: {
            index: index,
          }
        }
        this.$router.push(info);
        console.log('-----', path);
      },
      gotoPage(path, articleType, id) {
        console.log("============");
         var info = {
          path: path,
          query: {
            articleType: articleType,
            id:id
          }
        }
        this.$router.push(info);
      }
    },
    beforeMount: function() {
      console.log("---before mount----");
      this.setActiveIndex(0);

      var baseUrl = "/api";
      var addedUrl = '/mainPage/articleList';
      var requestUrl = baseUrl + addedUrl;

      fetchMainArticleList(requestUrl).then((response)=>{
          console.log("fetchMainArticleList",response);
          this.ideaArticle = response.data.ideaArticle;
          this.focusArticle = response.data.focusArticle;
          this.newsArticles = response.data.newsArticles;
          this.scrollImages = response.data.scrollImages;
      })
    },
    data() {
      return {
        scrollImages: [
          {
              imagePath:"/static/main/scroll1.png",
              articleType:'',
              articleId:'',
              present:'',
          },
          {
              imagePath:"/static/workdetail/项目详情_03.jpg",
              articleType:'',
              articleId:'',
              present:'',
          },
        ],
        newsArticles: [
          {
            id:1,
            author: "五月 2019 | 人民网",
            articleTitle: "汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事",
            articleSubTitle: "汉唐飞扬汉唐飞扬",
            picSrc: "/static/main/1.png",
            articleSummary: "二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……"
          },
          {
            id:2,
            author: "五月 2019 | 人民网",
            articleTitle: "汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事",
            articleSubTitle: "汉唐飞扬汉唐飞扬",
            picSrc: "/static/main/1.png",
            articleSummary: "二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……"
          },
          {
            id:3,
            author: "五月 2019 | 人民网",
            articleTitle: "汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事",
            articleSubTitle: "汉唐飞扬汉唐飞扬",
            picSrc: "/static/main/1.png",
            articleSummary: "二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……"
          },
        ],
        ideaArticle: {
          id:2,
          picSrc: '/static/main/美学理念.png',
          articleTitle: '汉唐飞扬，以道营器',
          articleSubTitle: '汉唐飞扬，以道营器汉唐飞扬，以道营器',
          articleSummary: '汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞' +
            '唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬'
        },
        focusArticle:{
            id:1,
            picSrc: '/static/main/美学理念.png',
            articleTitle: '汉唐飞扬，以道营器',
            articleSubTitle: '汉唐飞扬，以道营器汉唐飞扬，以道营器',
            articleSummary: '汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞' +
              '唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬'
        }
      };
    }
  };
</script>

<style lang='less' scoped>
  @import "../appStyle";

  .big-top-margin{
      margin-top: 60px;
  }

  .row-box-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .sm-margint-top {
    margin-top: 4px;
  }

  .more-font {
    font-size: 18px;
    font-family: Helvetica;
    color: rgba(204, 204, 204, 1);
    line-height: 22px;
  }

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
    width: 100%;
    height: 100%;
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
    padding: 40px 110px;
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
