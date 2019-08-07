<template>
  <div class="view column-box-center cover">
    <div class="bg-title-font title-margin-top">
      合作单位
    </div>
    <div class="sm-title-font content-margin-top">
      北京—杭州—厦门，营造中国与世界的沟通之所 建筑语言：功能流线，空间结构，形态外延，文化内涵
    </div>

    <div style="width: 100%;" class=" title-margin-top">
      <el-carousel :interval="5000" arrow="always" height="240px" ref="carousel">
        <el-carousel-item>
          <div class="row-box-center">
            <div class="pic-size pic-right-margin">
              <img src="/static/main/金砖.png" alt="" height="100%" width="100%">
            </div>
            <div class="pic-size pic-right-margin">
              <img src="/static/main/G20.png" alt="" height="100%" width="100%">
            </div>
            <div class="pic-size pic-right-margin">
              <img src="/static/main/一带一路.png" alt="" height="100%" width="100%">
            </div>
            <div class="pic-size pic-right-margin">
              <img src="/static/main/apec.png" alt="" height="100%" width="100%">
            </div>
          </div>
          </el-carousel-item>
           <el-carousel-item>
            <div class="row-box-center">
              <div class="pic-size pic-right-margin">
                <img src="/static/main/金砖.png" alt="" height="100%" width="100%">
              </div>
              <div class="pic-size pic-right-margin">
                <img src="/static/main/G20.png" alt="" height="100%" width="100%">
              </div>
              <div class="pic-size pic-right-margin">
                <img src="/static/main/一带一路.png" alt="" height="100%" width="100%">
              </div>
              <div class="pic-size pic-right-margin">
                <img src="/static/main/apec.png" alt="" height="100%" width="100%">
              </div>
            </div>
            </el-carousel-item>
      </el-carousel>
    </div>


    <div class="row-box-center box-right-offset" style="margin-top: 162px; margin-bottom: 79px;">

      <div class="item-right-margin column-box-center">
        <div class="sm-pic-size sm-pic-bottom">
          <img src="/static/main/1symbl.png" alt="" height="100%" width="100%">
        </div>
        <div class="sm-content-font">
          010 - 87213595
        </div>
      </div>

      <div class="item-right-margin column-box-center">
        <div class="sm-pic-size sm-pic-bottom">
          <img src="/static/main/1symbl.png" alt="" height="100%" width="100%">
        </div>
        <div class="sm-content-font">
          23429486@qq.com
        </div>
      </div>
      <div class="column-box-center">
        <div class="sm-pic-size sm-pic-bottom">
          <img src="/static/main/1symbl.png" alt="" height="100%" width="100%">
        </div>
        <div class="sm-content-font">
          北京市西城区百万庄大街11号
        </div>
      </div>
    </div>

    <div class="sm-content-font" style="margin-bottom: 61px;">
      Copyright@ 2008-2020 BlueFocus. All Rights Reserved 京ICP备19003641
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cooperators'
  }
</script>

<style lang="less" scoped>
  @import '../appStyle';

  .box-right-offset {
    margin-left: 70px;
  }

  .title-margin-top {
    margin-top: 80px;
  }

  .content-margin-top {
    margin-top: 36px;
  }

  .item-right-margin {
    margin-right: 142px;
  }

  .sm-pic-bottom {
    margin-bottom: 20px;
  }

  .sm-pic-size {
    width: 66px;
    height: 66px;
    background-color: aliceblue;
  }

  .bg-title-font {
    font-size: 30px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 42px;
  }

  .sm-title-font {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }

  .sm-content-font {
    font-size: 16px;
    font-family: Helvetica;
    color: rgba(102, 102, 102, 1);
    line-height: 19px;
  }



  .pic-right-margin {
    margin-right: 13px;
  }

  .column-box-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pic-size {
    width: 290px;
    height: 240px;
    background-color: aliceblue;
  }

  .row-box-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .view {
    width: 100%;
    // height: 618px;

  }
</style>
