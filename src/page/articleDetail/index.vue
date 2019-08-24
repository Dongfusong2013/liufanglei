<template>
  <div class="page-view">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor="#fff"></HeadTop>
    <!-- <div class="scrollContainer cover">
    </div> -->
    <div class="row-view padding-border cover">
      <div class="left-view">
        <div id='time-view'>
          <div class="big-font">
            {{format(article.displayTime)}}
          </div>
        </div>
        <div id='lable-view' class="big-top-margin">
          <div class="sm-font">
            来源：{{article.author}}
            <div class="sep-line sm-top-margin">
            </div>
          </div>
          <div class="sm-font sm-top-margin">
            标签：理念 | 文章
            <div class="sep-line sm-top-margin">
            </div>
          </div>
          <div class="sm-top-margin">
            A B
          </div>
        </div>
        <div id='related-view' class="big-top-margin">
          <div class="sm-font-black">
            相关链接
          </div>
          <div class="ssm-font-blue ssm-top-margin">
            为了梦圆安居，创造幸福生活——习近平总书记牵挂的民生事
          </div>
          <div class="ssm-font-blue ssm-top-margin">
            为了梦圆安居，创造幸福生活——习近平总书记牵挂的民生事
          </div>
        </div>
      </div>
      <div class="main-view big-left-margin">
        <div class="title-font">
          {{article.articleTitle}}
        </div>
        <div class="sm-title-font sm-top-margin">
          {{article.articleSubTitle}}
        </div>
        <!-- <div style="width:594px;height:305px; background-color: #42B983;" class="big-top-margin">
          <img :src="article.picSrc" alt="" width="100%" height="100%">
        </div> -->
        <div v-if="isVideo" class="sm-top-margin">
          <VideoPlayerComponent :picSrc="picSrc"
          :videoSrc="videoSrc" width="594" height="305" />
        </div>
        <div class="sm-font-black sm-top-margin content-font">
          <div v-html="article.htmlContent"></div>
        </div>
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
      }">UP</div>
      </el-backtop>
    </div>
  </div>
</template>

<script>
  import HeadTop from '@/components/HeadTop';
  import VideoPlayerComponent from '@/components/VideoPlayerComponent.vue'
  import {
    fetchArticleDetail
  } from "@/api/article";

  export default {
    name: 'ArticleDetail',
    components: {
      HeadTop,
      VideoPlayerComponent,
    },
    created() {
      window.scrollTo(0, 0);
      this.getArticle();
    },
    computed: {
      isVideo() {
        return this.articleType === 'focusArticle';
      },
      picSrc(){
        return this.article.picSrc;
      },
      videoSrc(){
        return this.article.videoSrc;
      }

    },
    methods: {
      format(displayStr) {
        var date = new Date(displayStr);
        return date.toDateString();
      },
      getArticle() {
        console.log("====", this.$route);
        const query = this.$route.query;
        const articleType = query.articleType;
        this.articleType = articleType;
        const id = query.id;
        console.log(articleType + '-' + id);

        fetchArticleDetail("api/article/get", articleType, id).then((response) => {
          console.log("resonse", response.data.data);
          this.article = response.data.data;
        });
      }
    },
    data() {
      return {
        articleType: '',
        article: {
          displayTime: '',
          picSrc: "",
          author: '',
          articleTitle: '',
          articleSubTitle: '',
          videoSrc:'',
          htmlContent: '',
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "../appStyle";

  .row-view {
    z-index: 300;
    display: flex;
    flex-direction: row;
  }

  .padding-border {
    box-sizing: border-box;
    padding: 80px 120px;
  }

  .page-view {
    width: 100%;
    height: 100%;
  }

  .left-view {
    width: 150px;
  }


  .big-top-margin {
    margin-top: 40px;
  }

  .sm-top-margin {
    margin-top: 20px;
  }

  .sep-line {
    width: 150px;
    height: 1px;
    background-color: #979797;
  }

  .scrollContainer {
    position: absolute;
    width: 1440px;
    height: 840px;
    top: 102px;
    box-sizing: border-box;
    padding: 80px 120px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .big-left-margin {
    margin-left: 150px;
  }

  .big-font {
    font-size: 20px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(102, 102, 102, 1);
    line-height: 28px;
  }

  .content-font {
    font-size: 16px;
    font-family: STSongti-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
    letter-spacing: 1px;
  }

  .sm-font {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
  }

  .main-view {
    width: 594px;
  }

  .sm-font-black {
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
  }

  .ssm-top-margin {
    margin-top: 7px;
  }

  .ssm-font-blue {
    font-size: 12px;
    font-family: STSongti-SC-Regular;
    font-weight: 400;
    color: rgba(0, 46, 205, 1);
    line-height: 16px;
  }

  .title-font {
    font-size: 30px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 42px;
  }
</style>
