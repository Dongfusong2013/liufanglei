<template>
  <div class="page-view">
    <HeadTop textColor="#ffff"></HeadTop>
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <div class="whole-box cover">
      <div class="tab-container tab-box-padding-top">
        <div class="tab-box tab-margin-right" :class="{'tab-active':isActive(0)}" @click="tabTo(0)">理念</div>
        <div class="tab-box tab-margin-right" :class="{'tab-active':isActive(1)}" @click="tabTo(1)">新闻</div>
        <div class="tab-box" :class="{'tab-active':isActive(2)}" @click="tabTo(2)">专题</div>
      </div>
      <div class="main-content-box main-content-margin-top" v-if="isActive(1)">
        <div class="title-box title title-margin-left">
          新闻
          <div class="title-line"></div>
        </div>
        <div class="news-list">
          <div class="news-item-box" v-for="(item, index) in newsItems" :key="index">
            <div class="row-box-space-between">
              <div class="time-font time-margin-bottom">{{format(item.displayTime)}} | {{item.author}}</div>
              <div class="time-font">
                <span style="margin-left: 8px;">
                  <img src="/static/news/眼睛.png" alt />
                </span>
                <span>{{item.viewCount}}</span>
              </div>
            </div>
            <div class="new-item" @click="gotoPage('/articleDetail', 'newsArticle', item.id)">
              <div class="pic-box">
                <img :src="item.picSrc" alt height="100%" width="100%" />
              </div>
              <div class="newInfo-box pic-conent-left-margin">
                <div class="article-title">{{item.articleTitle}}</div>
                <div class="content-title content-maring-top">{{item.articleSubTitle}}</div>
              </div>
            </div>
            <div class="line line-margin-top line-margint-bottom"></div>
          </div>
        </div>
        <div class="top-box top-box-size"></div>
      </div>

      <div class="main-content-box main-content-margin-top" v-else-if="isActive(0)">
        <div class="title-box title title-margin-left">
          理念
          <div class="title-line"></div>
        </div>

        <div class="news-list">
          <div class="news-item-box" v-for="(item, index) in articles" :key="index">
            <div class="row-box-space-between">
              <div class="time-font time-margin-bottom">{{format(item.displayTime)}} | {{item.author}}</div>
              <div class="time-font">
                <span style="margin-left: 8px;">
                  <img src="/static/news/眼睛.png" alt />
                </span>
                <span>{{item.viewCount}}</span>
              </div>
            </div>
            <div class="article-item" @click="gotoPage('/articleDetail', 'ideaArticle', item.id)">
              <div class="big-pic-margin-bottom bg-pic">
                <img :src="item.picSrc" height="100%" width="100%" />
              </div>
              <div class="newInfo-box">
                <div class="article-title">{{item.articleTitle}}</div>
                <div class="content-title content-maring-top">{{item.articleSubTitle}}</div>
                <div class="sm-font content-maring-top">{{item.articleSummary}}</div>
              </div>
            </div>
            <div class="line line-margin-top line-margint-bottom"></div>
          </div>
        </div>
        <div class="top-box top-box-size"></div>
      </div>

      <div class="main-content-box1 main-content-margin-top" v-else-if="isActive(2)">
        <div class="title-box title title-margin-left">
          专题报道
          <div class="title-line"></div>
        </div>

        <div class="news-list">
          <div class="news-item-box content_margin_left" v-for="(item, index) in vidieoItems" :key="index">
            <div class="row-box-space-between">
              <div class="time-font time-margin-bottom">{{format(item.displayTime)}} | {{item.author}} </div>
              <div class="time-font">
                <span style="margin-left: 8px;">
                  <img src="/static/news/眼睛.png" alt />
                </span>
                <span>{{item.viewCount}}</span>
              </div>
            </div>
            <div class="article-item " @click="gotoPage('/articleDetail', 'focusArticle', item.id)">
              <div class="big-pic-margin-bottom bg-vi-pic ">
                <!-- <img :src="item.picSrc" alt height="100%" width="100%" /> -->
                <VideoPlayerComponent width="594" height="354" :picSrc="item.picSrc" :videoSrc="item.videoSrc" />
              </div>
              <div class="newInfo-box">
                <div class="article-title">{{item.articleTitle}}</div>
                <div class="content-title content-maring-top">{{item.articleSubTitle}}</div>
                <div class="sm-font content-maring-top">{{item.articleSummary}}</div>
              </div>
            </div>
            <div class="line line-margin-top line-margint-bottom"></div>
          </div>
        </div>
        <div class="top-box top-box-size"></div>
      </div>

      <div class="row-box-center pag-bottom">
        <Pagination v-show="total>0" :total="total" :page.sync="pageNo" :limit.sync="pageCount" @pagination="fetchData" />
      </div>

    </div>
    <div>
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
  </div>
</template>



<style lang="less" scoped>
  @import "../appStyle";


  .title-line {
    margin-top: 10px;
    background-color: #000000;
    width: 49px;
    height: 7px;
  }

  .sm-font {
    font-size: 14px;
    font-family: Helvetica;
    color: rgba(153, 153, 153, 1);
    line-height: 22px;
  }

  .article-item {
    max-width: 600px;
  }

  .bg-pic {
    width: 594px;
    height: 252px;
  }

  .bg-vi-pic {
    width: 594px;
    height: 354px;
  }

  .big-pic-margin-bottom {
    // margin-top: 21px;
    margin-bottom: 15px;
  }

  .top-box-size {
    width: 150px;
  }

  .tab-active {
    background-color: black;
    color: white;
  }

  .pic-conent-left-margin {
    margin-left: 17px;
  }

  .line-margin-top {
    margin-top: 30px;
  }

  .line-margint-bottom {
    margin-bottom: 40px;
  }

  .line {
    width: 594px;
    height: 1px;
    background-color: whitesmoke;
  }

  .row-box-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .content-maring-top {
    margin-top: 12px;
  }

  .title-margin-left {
    margin-left: 159px;
  }

  .row-box-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;

  }

  .time-margin-bottom {
    margin-bottom: 20px;
  }

  .pag-bottom {
    margin-bottom: 100px;
  }

  .content-title {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 18px;
  }

  .article-title {
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(69, 69, 69, 1);
    line-height: 22px;
  }

  .time-font {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 22px;
  }

  .page-component__scroll {}

  .el-scrollbar__wrap {}

  .pic-box {
    width: 72px;
    height: 72px;
  }

  .new-item {
    display: flex;
    flex-direction: row;
    // width: 94px;
  }

  .page-view {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .tab-margin-right {
    margin-right: 27px;
  }

  .content_margin_left{
    margin-left: 178px;
  }


  .main-content-box1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: stretch;
  }

  .main-content-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }

  .title {
    font-size: 30px;
    font-family: Helvetica;
    color: rgba(51, 51, 51, 1);
    line-height: 36px;
  }

  .main-content-margin-top {
    margin-top: 49px;
  }

  .tab-box {
    border: 1px solid black;
    padding: 2px 10px;
  }

  .whole-box {
    width: 100%;
    height: 100%;
    // box-sizing: border-box;
  }

  .tab-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .tab-box-padding-top {
    padding-top: 10px;
  }
</style>

<script>
  import HeadTop from "@/components/HeadTop.vue";
  import Pagination from '@/components/Pagination/index.vue'
  import VideoPlayerComponent from '@/components/VideoPlayerComponent.vue'
  import {
    fetchArticleList
  } from '@/api/article.js'
  import {dateFormat} from '@/utils/dateFormat.js'

  export default {
    name: "ArticleList",
    components: {
      HeadTop,
      Pagination,
      VideoPlayerComponent
    },
    methods: {
      format(displayStr) {
         return dateFormat(displayStr);
      },
      tabTo(value) {
        console.log("pass parram", this.$route.query);
        this.activeIndex = value;
        console.log("active index to", value);
      },
      isActive(value) {
        return this.activeIndex === value;
      },
      gotoPage(path, articleType, id) {
        console.log("============");
        var info = {
          path: path,
          query: {
            articleType: articleType,
            id: id
          }
        }
        this.$router.push(info);
      },

      fetchData(activeIndex) {
        var articleType = "";
        if (activeIndex == 0) {
          articleType = 'ideaArticle'
        } else if (activeIndex == 1) {
          articleType = 'newsArticle'
        } else {
          articleType = 'focusArticle'
        }

        fetchArticleList({
          pageNo: this.pageNo - 1,
          pageSize: this.pageSize,
          articleType: articleType
        }).then((response) => {
          var msg = response.data;
          this.total = msg.data.totalElements;
          this.pageSize = msg.data.totalPages;
          if (articleType === 'ideaArticle') {
            this.articles = msg.data.content;
          } else if (articleType === 'newsArticle') {
            this.newsItems = msg.data.content;
          } else {
            this.vidieoItems = msg.data.content; //暂时
          }
        })
      }
    },
    created() {
      window.scrollTo(0, 0);
      console.log("======", this.$route.query);
      this.activeIndex = parseInt(this.$route.query.index);
      for (let i = 0; i < this.indexCount; i++) {
        this.fetchData(i);
      }
    },

    data() {
      return {
        activeIndex: 0,
        indexCount: 3,
        pageNo: 1,
        pageSize: 10,
        pageCount: 0,
        total: 10,

        articles: [{
          author: "",
          picSrc: "",
          displayTime: "",
          articleTitle: "",
          articleSubTitle: "",
          articleSummary: "",
          viewCount: ""
        }],
        newsItems: [{
          author: "",
          picSrc: "",
          displayTime: "",
          articleTitle: "",
          articleSubTitle: "",
          articleSummary: "",
          viewCount: ""
        }],
        vidieoItems: [{
          author: "",
          picSrc: "",
          displayTime: "",
          articleTitle: "",
          articleSubTitle: "",
          articleSummary: "",
          viewCount: ""
        }]
      };
    }
  };
</script>
