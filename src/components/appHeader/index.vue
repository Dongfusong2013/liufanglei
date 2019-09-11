<template>
  <div style="width: 100%;">
    <!-- <div class="top-header row-space-box" v-if="noGround">
      <div class="web-title" style="margin-left: 40px;">
        神奇的大脚
      </div>
      <div class="row-space-box" style="margin-right: 150px;">
        <div class="menueItem row-box-center" @click="gotoPage('/civilization')">
          <div class="el-icon-place"></div>
        </div>
        <div class="menueItem row-box-center">
          <div class="el-icon-bell"></div>
        </div>
        <div class="menueItem row-box-center">
          <div class="el-icon-user"></div>
        </div>
        <div class="menueItem row-box-center">
          <div class="myStyle">
          </div>
        </div>
      </div>
    </div> -->
<!-- :class="{'set-background':noGround}" -->
    <div class="top-header-size row-space-box "
      :class="{'set-backoground':noGround}"
    >
      <div class="web-title" style="margin-left: 86px; width: 107px; height: 28px;">
        <img src="/static/icon/Logo.png" height="100%" width="100%" v-if="!noGround">
        <img src="/static/icon/Logo-white.png" height="100%" width="100%" v-if="noGround">
      </div>
      <div class="row-space-box" style="margin-right: 150px;">
        <div class="menueItem"  @click="gotoPage('/')">
            <div style="font-size: 24px;" class="el-icon-s-home"></div>
        </div>
        <div class="menueItem" @click="gotoPage('/civilization')">
          <div style="width: 24px; height: 24px;">
              <img src="/static/icon/地球.png" height="100%" width="100%" v-if="!noGround">
              <img src="/static/icon/地球-white.png" height="100%" width="100%" v-if="noGround">
          </div>
        </div>
        <div class="menueItem row-box-center">
          <div style="width: 24px; height: 24px;">
              <!-- <img src="/static/icon/地球.png" height="100%" width="100%"> -->
              <div style="font-size: 24px;" class="el-icon-bell"></div>
          </div>
        </div>
        <div class="menueItem row-box-center">
          <div style="width: 24px; height: 24px;" @click="gotoPage('/userPage')">
              <!-- <img src="/static/icon/地球.png" height="100%" width="100%"> -->
              <div style="font-size: 24px;" class="el-icon-user"></div>
          </div>
        </div>
        <div class="menueItem row-box-center">
          <div class="myStyle" >
            <img src="/static/icon/头像.png" height="100%" width="100%">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'AppHeader',
    props:{
      noBackground: String
    },
    mounted() {
        console.log(this.noBackground);
    },
    computed: {
      noGround() {
        return this.noBackground === 'true';
      }
    },
    data(){
      return {
        // classObj1:{
        //   color:'white',
        //   background: 'rgba(243, 245, 246, 1)'
        // },
        // classObj2:{
        //   color:'black'
        // }
      }
    },
    methods: {
      gotoPage(path) {
         this.$router.push(path);
      }
    }
  }
</script>

 <style lang="less" scoped>

   .row-box-center{
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
   }

  .set-background{
    color:black;
    background: rgba(243, 245, 246, 1);
  }

  .web-title {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 600;
    line-height: 28px;
  }

  .myStyle {
    width: 38px;
    height: 38px;
    // border: 2px solid rgba(255, 255, 255, 1);
  }

  .top-header-size {
    width: 100%;
    height: 68px;
  }

  .menueItem {
    margin-right: 80px;
  }

  .row-space-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
