<template>
  <div class="pop-pic-view1">
    <div class="pop-pic-window1 row-normal-start">
      <div style="width: 85%; height: 100%; position: relative;" class="column-normal-center ">
        <div class="column-normal-space">
          <div style="width: 942px; height: 582px;">
            <img :src="recommendUser.activePic.url" width="100%" height="100%">
          </div>
          <div class="left-arrow button-box" @click="nextTo('left')">
            <div class="arrow-size">
              <img src="/static/works/left_arrow.jpg" height="100%" width="100%">
            </div>
          </div>
          <div class="right-arrow button-box" @click="nextTo('right')">
            <div class="arrow-size">
              <img src="/static/works/right_arrow.jpg" height="100%" width="100%">
            </div>
          </div>
        </div>
      </div>
      <div style="width: 480px; height: 704px; overflow: auto;" class="border-left" @click="gotoPage('/userPage')">
        <div style="height: 80px; padding-left: 10px;" class="row-normal-start border-bottom">
          <div style="width: 56px; height: 56px;" >
            <img :src="recommendUser.picIcon" height="100%" width="100%">
          </div>
          <div style="margin-left: 7px;">
            <div style="margin-bottom: 6px;" class="detail-title-font">{{recommendUser.userName}}</div>
            <div class="follow-style" style="display: flex; flex-direction: row; line-height: 22px;">
              <div style="margin-left: 5px;">
                + 关注
              </div>
            </div>
          </div>
        </div>
        <div style="height: 72px; padding-left: 10px;" class="row-normal-start border-bottom">
          <div style="margin-right: 32px;" class="row-normal-start">
            <div style="width: 24px; height: 24px;">
              <img src="/static/icon/like.png" width="100%" height="100%">
            </div>
            <div style="margin-left: 6px; opacity: 0.5;" class="title-font">
              278
            </div>
          </div>
          <div style="margin-right: 32px;" class="row-normal-start">
            <div style="width: 24px; height: 24px;">
              <img src="/static/icon/alumn.png" width="100%" height="100%">
            </div>
          </div>
          <div style="margin-right: 32px; opacity: 0.5;" class="row-normal-start">
            <div style="width: 24px; height: 24px;">
              <img src="/static/icon/share.png" width="100%" height="100%">
            </div>
          </div>
        </div>
        <div style="height: 125px; padding-left: 16px; padding-top: 24px;" class="border-bottom">
          <div class="title-font" style="margin-bottom: 8px;">{{recommendUser.picName}}</div>
          <div class="desc-font" style="margin-bottom: 8px;">
            {{recommendUser.picDescription}}
          </div>
          <div class="label-font">
            #儿子，#一家人，#故宫探秘之旅，#会议
          </div>
        </div>
        <!-- <div style="height: 72px; padding-left: 16px;" class="border-bottom row-normal-space">
          <div class="row-normal-start">
            <div style="width: 24px; height: 24px;">
              <img src="/static/icon/相册.png" width="100%" height="100%">
            </div>
            <div class="big-title-font" style="margin-left: 8px;">
              {{recommendUser.picAlumn}}
            </div>
          </div>
          <div style="width:12px;height:6px; margin-right: 10px; line-height: 10px;">
            <img src="/static/icon/向下.png" width="100%" height="100%">
          </div>
        </div> -->
        <div style="height: 72px; padding-left: 16px;" class="row-normal-space border-bottom">
          <div class="row-normal-start">
            <div style="width: 24px; height: 24px;">
              <img src="/static/icon/detail.png" width="100%" height="100%">
            </div>
            <div class="big-title-font" style="margin-left: 8px;">
              详情
            </div>
          </div>
          <div style="width:12px;height:6px; margin-right: 10px; line-height: 10px;">
            <img src="/static/icon/向下.png" width="100%" height="100%">
          </div>
        </div>
        <div class="border-bottom comment-box">
          <div style="width: 288px; height: 54px; padding-top: 10px;">
            <div style="width: 100%; display: flex; flex-direction: row; align-items: center;">
              <div style="width: 24px; height: 24px;">
                <img src="/static/icon/userIcon.png" width="100%" height="100%">
              </div>
              <div style="margin-left: 8px; width: 256px;">
                <el-input placeholder="发表您的见解" style="width: 250px;" v-model="commentContent"> -->
                  <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
                </el-input>
              </div>
            </div>
            <div v-for="(item, index) in recommendUser.commentList" :key="index">
              <div class="single-comment-block">
                <div style="width: 24px; height: 24px; margin-top: 5px;">
                  <img :src="item.iconUrl" width="100%" height="100%">
                </div>
                <div style="margin-left: 7px; margin-top: 5px;">
                  <div class="comment-big">{{item.userName}}</div>
                  <div class="comment-sm">{{item.comment}}</div>
                  <span class="back-font">回复:</span>
                  <span class="time-font">{{item.time}}</span>
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
  export default {
    name: 'DetailPicWindow',
    props: {
      showWindow: Boolean,
      closeDetailWindow: Function
    },
    computed: {
      recommendUser() {
        return this.userList[this.activePicIndex];
      }
    },
    data() {
      return {
        commentContent: '',
        activePicIndex: 0,
        userList: [{
            userName: '光速兔子',
            picName: '小牛在故宫',
            picDescription: '小牛在大雄宝殿，跟皇帝的龙椅来了一张合照。咋样？有没有点太子样子？有点逗，哈哈哈哈哈！',
            picIcon: '/static/icon/头像.png',
            activePic: {
              url: '/static/picShare/1.png',
              praiseCount: 13,
            },
            tagArray: ['儿子', '一家人', '故宫探秘之旅', '会议'],
            picAlumn: '一家三口游故宫',
            commentList: [{
                userName: '朱哥',
                iconUrl: '/static/icon/default-user.png',
                comment: '牛哥儿子威武，已经长这么帅了呀~~',
                time: '1个小时前'
              },
              {
                userName: '游客',
                iconUrl: '/static/icon/头像.png',
                comment: '牛哥儿子威武，已经长这么帅了呀~~',
                time: '2个小时前'
              },
              {
                userName: '朱哥',
                iconUrl: '/static/icon/头像.png',
                comment: '牛哥儿子威武，已经长这么帅了呀~~',
                time: '12个小时前'
              },
            ]
          },
          {
            userName: '董甫耸',
            picName: '雕像',
            picIcon: '/static/icon/头像1.png',
            picDescription: '这么歪的雕像会不会倒下来砸到人呀？有没有点太子样子？有点逗，哈哈哈哈哈！',
            activePic: {
              url: '/static/picShare/2.png',
              praiseCount: 278,
            },
            tagArray: ['儿子', '一家人', '故宫探秘之旅', '会议'],
            picAlumn: '巨石雕像',
            commentList: [{
              userName: '老李',
              iconUrl: '/static/icon/头像.png',
              comment: '董甫耸，你这是去哪里了？',
              time: '1个小时前'
            }, ]
          },
          {
            userName: '光速兔子',
            picName: '小牛在故宫',
            picIcon: '/static/icon/default-user.png',
            picDescription: '小牛在大雄宝殿，跟皇帝的龙椅来了一张合照。咋样？有没有点太子样子？有点逗，哈哈哈哈哈！',
            activePic: {
              url: '/static/picShare/1.png',
              praiseCount: 278,
            },
            tagArray: ['儿子', '一家人', '故宫探秘之旅', '会议'],
            picAlumn: '一家三口游故宫',
            commentList: [{
                userName: '朱哥',
                iconUrl: '/static/icon/头像.png',
                comment: '牛哥儿子威武，已经长这么帅了呀~~',
                time: '1个小时前'
              },
              {
                userName: '游客',
                iconUrl: '/static/icon/头像.png',
                comment: '牛哥儿子威武，已经长这么帅了呀~~',
                time: '2个小时前'
              },
              {
                userName: '朱哥',
                iconUrl: '/static/icon/头像.png',
                comment: '牛哥儿子威武，已经长这么帅了呀~~',
                time: '12个小时前'
              },
            ]
          },
        ],
      }
    },
    methods: {
      gotoPage(path) {
        this.$router.push(path);
      },
      nextTo(type) {
        if (type === "left") {
          if (this.activePicIndex > 0) {
            this.activePicIndex -= 1;
          }
        } else {
          if (this.activePicIndex < this.userList.length - 1) {
            this.activePicIndex += 1;
            console.log("====", this.activePicIndex);
          }
        }
      },
      showDetailPic(index) {
        this.activePicIndex = index;
        console.log('index', index);
      },
      isSelect(index) {
        return index === this.activePicIndex;
      }
    }


  }
</script>

<style lang="less" scoped>
  .single-comment-block {
    width: 288px;
    height: 61px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }

  .comment-box {
    height: 100%;
    padding-left: 16px;
    background: rgba(246, 245, 243, 1);
    border-radius: 10px;
  }

  .button-box {
    width: 56px;
    height: 56px;
    background: rgba(246, 245, 243, 1);
    border-radius: 5px;
  }

  .comment-big {
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 22px;
    opacity: 0.6;
  }

  .row-normal-space {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .comment-sm {
    opacity: 0.6;
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 20px;
  }

  .back-font {
    opacity: 0.6;
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(11, 168, 224, 1);
    line-height: 20px;
  }

  .time-font {
    opacity: 0.6;
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 20px;
  }

  .detail-title-font {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 24px;
  }

  .big-title-font {
    opacity: 0.6;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 24px;
  }

  .title-font {

    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 22px;
  }

  .desc-font {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 20px;
  }

  .label-font {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(5, 153, 229, 1);
    line-height: 20px;
  }

  .follow-style {
    width: 52px;
    height: 24px;
    border-radius: 5px;
    border: 1px solid rgba(201, 41, 68, 1);
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(221, 45, 74, 1);
    line-height: 20px;
  }

  .border-style {
    border: solid red 2px
  }

  .border-bottom {
    border-bottom: #D3D3D3 solid 1px;
  }

  .border-left {
    border-left: #D3D3D3 solid 1px;
  }

  .pop-pic-view1 {
    // z-index: 10;
    // position: fixed;
    // top: 0px;
    // left: 0px;
    color: black;
    width: 1450px;
    height: 700px;
    background-color: rgba(220, 220, 220, 0.7);
  }


  .pop-pic-window1 {
    // z-index: 100;
    // position: fixed;
    // top: 20px;
    // left: 20px;
    color: black;
    width: 100%;
    height: 704px;

    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
  }

  .row-normal-start {
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
  }

  .row-normal-center {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .column-normal-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .column-normal-space {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .pic-desc-font {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 20px;
  }

  .pic-title-font {
    // z-index: 4;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(23, 0, 0, 1);
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .arrow-size {
    width: 28px;
    height: 48px;
  }

  .sm-arrow-size {
    width: 6px;
    height: 12px;
  }

  .picStyle {
    margin-right: 20px;
    background-color: bisque;
  }

  .left-arrow {
    opacity: 0.5;
    position: absolute;
    left: 40px;
    top: 44%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right-arrow {
    opacity: 0.5;
    position: absolute;
    right: 40px;
    top: 44%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sm-left-arrow {
    left: 0px;
    top: 44%;
  }

  .sm-right-arrow {
    right: 0px;
    top: 44%;
  }


  .slider-node {
    position: absolute;
    top: -6px;
    height: 14px;
    // left:10%;
    background-color: #939598;
    border-radius: 7px;
    z-index: 2;
    transition: left .5s, width .5s;
  }

  .time-line {
    border-top: 1px solid #939598;
    display: flex;
    color: #939598;
    height: 100%;
    width: 1280px;
  }

  .label {
    /* position: absolute; */
    font-weight: 700;
    font-size: .65rem;
    letter-spacing: .025em;
    line-height: 1;
    width: 100px;
    text-align: center;
    margin: -15px 0 0 -50px;
    padding-top: 30px;
    text-transform: uppercase;
  }

  .label:hover {
    color: black;
  }

  .time-tick:before {
    content: "";
    display: block;
    height: 12px;
    border-left: 1px solid #939598;
    margin-top: -6px;
  }

  .time-tick {
    position: absolute;
    opacity: 1;
    width: 1px;
    cursor: pointer;
    // z-index: 1;
    font-weight: 300;
    /* ?? */
    vertical-align: baseline;
  }

  .scroll-view {
    display: flex;
    justify-content: center;
    position: absolute;
    cursor: ew-resize;

    width: 87.5vw;
    height: 2rem;
    /* height: 800px; */
    vertical-align: baseline;
  }

  .toTopStyle {
    position: absolute;
    right: 80px;
    top: 20px;
    // align-self: flex-end;
  }
</style>
