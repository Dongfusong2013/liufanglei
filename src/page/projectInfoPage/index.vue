<template>
  <div>
    <Frame>
      <div class="content-view  cover">
        <div class="column-space-between left-view-height">
          <div class="content-wrapper">
            <div class="title-font">{{projectInfo.projectName}}</div>
            <div class="content-font content-margin-top">
              {{projectInfo.description}}
            </div>
            <div class="line sm-line-top"></div>
          </div>
          <div class="column-space-between">
            <div class="item-space-bottom">
              <div class="sm-title-font title-content-bottom">设计者</div>
              <div class="content-font">{{projectInfo.designer}}</div>
            </div>
            <div class="item-space-bottom">
              <div class="sm-title-font title-content-bottom">设计理念</div>
              <div class="content-font">{{projectInfo.area}}</div>
            </div>
            <div class="item-space-bottom">
              <div class="sm-title-font title-content-bottom">建设规模</div>
              <div class="content-font">{{projectInfo.area}}</div>
            </div>
            <div class="item-space-bottom">
              <div class="sm-title-font title-content-bottom">项目类型</div>
              <div class="content-font">{{projectInfo.projectType}}</div>
            </div>
            <div class="line sm-line-top"></div>
          </div>
          <div>
            <div class="sm-title-font">所在地</div>
            <div style="marginTop:10px" class="content-font">
              <span>
                <img src="/static/project/位置.png" alt />
              </span>
              <span>{{projectInfo.address}}</span>
            </div>
          </div>
        </div>
        <div class="pic-left-margin">
          <div class="pic-size ">
            <img :src="projectInfo.picSrc" height="100%" width="100%" />
          </div>
          <div class="hori-box box-top" @click="toggle()" v-if="isClosed">
            <div class="text-center">
              详情介绍 >>
            </div>
          </div>
          <div class="hori-box-open box-top " @click="toggle()" v-else-if="!isClosed">
            <div class="text-center">详情介绍 << </div>
           <div style="padding: 10px 10px;">
                <div v-html="projectInfo.htmlContent">
                </div>
            </div>
          </div>

        </div>
      </div>
    </Frame>
  </div>

</template>



<script>
  import Frame from '@/components/Frame'
  import {fetchProjectDetail} from '@/api/project.js'
  export default {
    name: "ProjectInfo",
    components: {
      Frame
    },
    data() {
      return {
        openStatus: false,
        projectInfo:{
            projectName:'',
            designer:'',
            description:'',
            idea:'',
            projectType:'',
            address:'',
            area:'',
            address:'',
            htmlContent:'',
        }
      }
    },
    beforeMount() {
        var projectId = 13;
        fetchProjectDetail(projectId).then((response)=>{
            console.log(response.data);
            this.projectInfo = response.data.data;
        });
    },
    computed: {
      isClosed() {
        return this.openStatus === false;
      },
      isOpened() {
        return this.openStatus === true;
      }
    },
    methods: {
      toggle() {
        this.openStatus = !this.openStatus;
        console.log("-----toggle-----", this.openStatus);
      },
    },
    mounted() {
      console.log("=======");
      console.log(this.$route.query.projectId);
    }
  };
</script>

<style lang="less" scoped>
  @import "../appStyle";

  .left-view-height {
    height: 600px;
  }

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
    background-color: white;
  }

  .hori-box-open {
    border: 1px solid rgba(51, 51, 51, 1);
    background-color: white;
  }

  .box-top {
    margin-top: 10px;
  }

  .text-center {
    text-align: center;
    line-height: 50px;
  }
</style>
