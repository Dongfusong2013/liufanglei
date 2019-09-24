<template>
  <div style="width: 100%;">
    <div class="top-header-size row-space-box " :class="{'set-backoground':noGround}">
      <div class="web-title" style="margin-left: 86px; width: 107px; height: 28px;">
        <img src="/static/icon/Logo.png" height="100%" width="100%" v-if="!noGround">
        <img src="/static/icon/Logo-white.png" height="100%" width="100%" v-if="noGround">
      </div>
      <div class="row-space-box" style="margin-right: 150px;">
        <div class="menueItem" @click="gotoPage('/civilization')">
          <div style="width: 24px; height: 24px;">
            <!-- 默认有背景就是选择态 -->
            <div v-if="noGround">
              <img v-if="isSelected('earth')" src="/static/icon/地球-white.png" height="100%" width="100%"><!--  -->
            </div>
            <div v-if="!noGround">
              <img v-if="isSelected('earth')" src="/static/icon/地球.png" height="100%" width="100%">
              <img v-if="!isSelected('earth')" src="/static/icon/地球-未选中.png" height="100%" width="100%">
            </div>
            </div>
          </div>
          <div class="menueItem row-box-center">
            <div style="width: 24px; height: 24px;" @click="gotoPage('/userPage')">
              <div v-if="!isSelected('user')" style="font-size: 24px;" class="el-icon-user"></div>
              <img v-if="isSelected('user')" src="/static/icon/user-选中.png" width="100%" height="100%">
            </div>
          </div>
          <div class="menueItem row-box-center">
            <div class="myStyle" @click="gotoPage('/userPage')">
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
    props: {
      noBackground: String,
      selectedType: String,
    },
    mounted() {
      console.log(this.noBackground);
    },
    computed: {
      noGround() {
        return this.noBackground === 'true';
      }

    },
    data() {
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
      },
      isSelected(type) {
        return this.selectedType === type;
      }
    }
  }
</script>

<style lang="less" scoped>
  .row-box-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .set-background {
    color: black;
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

  .row-space-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
