
<template>
  <div class="page-view">
    <div class="backgroundImg">
      <img src="/static/index/首页_02.png" alt height="100%" width="100%" />
    </div>
    <HeadTop textColor="#fff" />
    <div class="content-view cover">
      <div class="column-space-between">
        <div class="content-wrapper">
          <div class="title-font">北京雁栖湖会议中心</div>
          <div class="content-font content-margin-top">
            <div>第22届APEC(北京APEC)峰会主会场</div>
            <div>第一届“一带一路”国际合作高峰论坛主会场</div>
            <div>第二届“一带一路”国际合作高峰论坛主会场</div>
          </div>
          <div class="line sm-line-top"></div>
        </div>
        <div class="column-space-between">
          <div class="item-space-bottom">
            <div class="sm-title-font title-content-bottom">设计者</div>
            <div class="content-font">刘方磊，2015年6月5日交付</div>
          </div>
          <div class="item-space-bottom">
            <div class="sm-title-font title-content-bottom">设计理念</div>
            <div class="content-font">汉唐飞扬，鸿雁展翅</div>
          </div>
          <div class="item-space-bottom">
            <div class="sm-title-font title-content-bottom">建设规模</div>
            <div class="content-font">4.2万平方米</div>
          </div>
          <div class="item-space-bottom">
            <div class="sm-title-font title-content-bottom">项目类型</div>
            <div class="content-font">总体规划，公共空间，会议中心，地标</div>
          </div>
          <div class="line sm-line-top"></div>
        </div>

        <div>
          <div class="sm-title-font">所在地</div>
          <div style="marginTop:10px" class="content-font">
            <span>
              <img src="/static/project/位置.png" alt />
            </span>
            <span>北京市怀柔区国际会都1号</span>
          </div>
        </div>
      </div>
      <div class="pic-left-margin">
        <div class="pic-size ">
          <img src="/static/about/大图@2x.png" height="100%" width="100%" />
        </div>
        <div class="hori-box box-top text-center">
           详情介绍  >>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/HeadTop";

export default {
  name: "ProjectInfo",
  components: {
    HeadTop
  },
  mounted(){
      console.log("=======");
      console.log(this.$route.query.projectId);
  }
};
</script>

<style lang="less" scoped>
@import "../appStyle";

.content-margin-top {
  margin-top: 9px;
}
.content-wrapper {
  padding: 40;
}
.content-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 40px 100px;
  box-sizing: border-box;
}
.pic-left-margin {
  margin-left: 64px;
}

.sm-title-font {
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}

.sm-line-top {
  margin-top: 26px;
}
.line {
  width: 340px;
  height: 1px;
  background-color: #979797;
}
.title-font {
  font-size: 30px;
  font-family: Helvetica-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
}
.content-font {
  font-size: 16px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 22px;
}
.pic-size {
  width: 796px;
  height: 560px;
  background-color: beige;
}

.item-space-bottom {
  margin-bottom: 20px;
}

.title-content-bottom {
  margin-bottom: 10px;
}

.column-space-between {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hori-box {
  width: 796px;
  height: 50px;
  border: 1px solid rgba(51, 51, 51, 1);
}
.box-top{
 margin-top: 10px;
}
.text-center{
    text-align: center;
    line-height: 50px;
}
</style>
