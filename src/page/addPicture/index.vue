<template>
  <div>
    <div class="content-view" style="position: relative;">
      <div style="position: absolute; top:40px; left:60px" @click="backPage()">
        <div style="width:24px;height:17px;">
          <img src="/static/icon/back.png" width="100%" height="100%" >
        </div>
      </div>
      <div class="upload-box flex-row">
        <div class="left-control">
          <div style="padding: 16px;">
            <div class="location-title">相簿: 北京明清故宫</div>
            <div class="title-font">
              北京市东城区景山前街4号
            </div>
            <div style="margin-top: 40px;" class="title-font">
              选择要编辑的照片：
            </div>
          </div>
          <div v-if="true" class="edit-title">
            <div style="margin-top: 17px; margin-left: 16px;">
              主题
            </div>
            <el-input style="width: 260px" v-model="postForm.topic" :rows="1" type="textarea" class="article-textarea"
              autosize placeholder="输入当天主题" />

            <div style="margin-top: 17px;">
              <div style="margin-bottom: 0px; margin-left: 16px;">
                拍照时间
              </div>
              <el-date-picker style="width: 260px" v-model="postForm.makeTime" type="datetime" format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期和时间" class="time-picker" />
            </div>

            <div style="margin-top: 17px; margin-left: 16px;">
              照片名称
            </div>
            <el-input style="width: 260px" v-model="postForm.picTitle" :rows="1" type="textarea" class="article-textarea"
              autosize placeholder="请输入照片名称" />
            <div style="margin-top: 17px; margin-left: 16px;">
              照片描述
            </div>

            <div class="flex-row">
              <el-input style="width: 260px" v-model="postForm.picDescription" :rows="1" type="textarea" class="article-textarea"
                autosize placeholder="请输入照片描述" />
              <div style="margin-left: 4px;" class="sm-font">
                <div v-show="descripCount"> {{descripCount}}字</div>
              </div>
            </div>
            <div>
            </div>
          </div>

        </div>
        <div>
          <div style="height: 72px;">
            <div class="control-bar flex-row" style="margin-top: 16px; width: 100%;">
              <div class="flex-row">
                <div style="width: 32px; height: 32px;">
                  <img src="/static/icon/添加.png" width="100%" height="100%">
                </div>
                <div style="margin-left: 16px; width: 32px; height: 32px;">
                  <img src="/static/icon/减少.png" width="100%" height="100%">
                </div>
              </div>

              <div class="flex-row" style="margin-left: 60px;">
                <div style="line-height: 30px;padding-left: 10px; padding-right: 10px;
    height:32px; border: 1px solid gray; border-radius: 5px;">大小</div>
                <div style="line-height: 30px;padding-left: 10px; padding-right: 10px;
    height:32px; border: 1px solid gray; border-radius: 5px; margin-left: 20px;">排序</div>
              </div>

              <div class="flex-row" style="margin-left: 197px;">
                <div style="margin-left: 16px; width: 48px; height: 32px;">
                  <img src="/static/icon/全选.png" width="100%" height="100%">
                </div>
                <div style="margin-left: 16px; width: 82px; height: 32px; margin-right: 15px;">
                  <img src="/static/icon/详细信息.png" width="100%" height="100%">
                </div>
              </div>
              <div class="flex-row button-upload" style="margin-left: 40px;">
                <div style="margin-left: 16px; width: 150px; height: 40px;">
                  <img src="/static/icon/上传.png" width="100%" height="100%">
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>

          <div class="pic-table flex-center ">
            <div v-if="!isNew" class="pic-center-table" style="position: relative;">
              <div style="position: absolute; top:43%; left:35%" class="flex-center">
                <div style="width: 40px; height: 40px;">
                  <img src="/static/icon/上传足迹.png" height="100%" width="100%">
                </div>
                <div class="red-font" style="margin-top: 24px;">
                  拖放或点击以上传
                </div>
                <div class="desc-font" style="margin-top: 143px;">
                  推荐：使用小于32M的高质量 .jpg 文件
                </div>
              </div>
            </div>

            <div v-if="isNew" style="display: flex; flex-direction: row; flex-wrap: wrap; width: 100%; align-items: stretch; ">
              <div v-for="(item, index) in pictures1" :key='index'>
                <div style="margin-top: 10px; margin-left: 20px; display: flex;flex-direction: row; width: 100%; height: 100%;">
                  <div style="width: 100px; height: 100px; margin-right: 10px; margin-top: 10px;" @click="selectPicture(item, index)"
                    :class="{'border-selected':isSelected(index)}">
                    <img :src="item.url" width="100%" height="100%">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>

</template>

<script>
  import AppHeader from '@/components/appHeader/index.vue'
  import MDinput from '@/components/MDinput/index.vue'

  export default {
    name: 'AddPicture',
    components: {
      AppHeader,
      MDinput
    },
    props: {
      topic: String,
    },
    mounted() {
      window.scrollTo(0, 0);
      const query = this.$route.query;
      // this.postForm.topic = query.topic;
      this.isNew = true;
    },
    data() {
      return {
        isNew: Boolean,
        selectedPicIndex: 0,
        pictures1: [{
            picName: '五角的故宫',
            time: 1990,
            url: '/static/user_location/1.png',
            width: 316,
            height: 208,
            description: '第一次带小小牛去故宫',
            // timeStr:''
          },
          {
            picName: '小小牛',
            time: 1992,
            url: '/static/user_location/2.png',
            width: 280,
            height: 194,
            description: '第一次带小小牛去故宫',
          },
          {
            picName: '建筑美景',
            time: 1993,
            url: '/static/user_location/3.png',
            width: 338,
            height: 191,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            picName: '故宫一片',
            time: 1994,
            url: '/static/user_location/4.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录美丽',
          },
          {
            picName: '嘻嘻的一个场景',
            time: 1995,
            url: '/static/user_location/5.png',
            width: 204,
            height: 187,
            description: '故宫掠影：记录的美丽',
          },
          {
            picName: '故宫一片',
            time: 2000,
            url: '/static/user_location/6.png',
            width: 204,
            height: 187,
            description: '故宫掠影：记录故宫',
          },
          {
            picName: '建筑美景',
            time: 2003,
            url: '/static/user_location/7.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            picName: '嘻嘻的一个场景',
            time: 2005,
            url: '/static/user_location/8.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2005,
            url: '/static/user_location/9.png',
            width: 316,
            height: 208,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2008,
            url: '/static/user_location/10.png',
            width: 280,
            height: 194,
            description: '故宫掠影：记录故宫的美丽',
          }

        ],
        postForm: {
          topic: '带孩子去故宫游玩',
          picTitle: '第一次带小孩',
          picDescription: '',
          makeTime: '2010-10-4',
          name: ''
        }
      }
    },
    computed: {
      descripCount() {
        return this.postForm.picDescription.length;
      }
    },
    methods: {
      selectPicture(item, index) {
        this.postForm.picTitle = item.picName;
        this.postForm.picDescription = item.description;
        this.postForm.makeTime = item.time;
        return this.selectedPicIndex = index;
      },
      isSelected(index) {
        return index === this.selectedPicIndex;
      },
      backPage() {
        console.log("back page...");
        this.$router.go(-1);
      },

    }
  }
</script>

<style lang="scss" scoped>
  // @import "~@/styles/mixin.scss";

  .history-container {
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .border-selected {
    border: solid 2px darkcyan;
  }

  .edit-title {
    font-size: 18px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 28px;
  }

  .pic-center-table {
    width: 776px;
    height: 550px;
    border-radius: 20px;
    border: 2px dashed rgba(211, 211, 211, 1);
  }

  .desc-font {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 24px;
    opacity: 0.3;
  }

  .red-font {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(221, 45, 74, 1);
    line-height: 28px;
  }

  .sm-font {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(221, 45, 74, 1);
    line-height: 14px;
  }

  .button-upload {
    width: 150px;
    height: 40px;
    background: rgba(201, 41, 68, 1);
    border-radius: 5px;

    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
  }

  .control-bar {
    width: 840px;
    height: 56px;
    background: rgba(255, 255, 255, 1);
  }

  .pic-table {
    width: 840px;
    height: 614px;
    background: rgba(246, 245, 243, 1);
    border-radius: 20px;
  }

  .title-font {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 28px;
    opacity: 0.6;
  }

  .location-title {
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(221, 45, 74, 1);
    line-height: 32px;
  }

  .normal-title {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 28px;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .upload-box {
    width: 1200px;
    height: 703px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    padding-bottom: 20px;
    margin-top: 24px;
  }


  .content-view {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgba(246, 245, 243, 1);
    width: 100%;
    height: 900px;
  }

  .page-view {
    width: 100%;
    height: 100%;
  }

  .left-control {
    padding: 16px;
    width: 312px;
    height: 672px;
  }

  .article-textarea /deep/ {
    textarea {
      padding-right: 40px;
      resize: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #bfcbd9;
    }
  }

  .time-picker /deep/ {
    input {
      border-width: 0px;
      border-bottom: 1px solid #bfcbd9;
    }
  }
</style>
