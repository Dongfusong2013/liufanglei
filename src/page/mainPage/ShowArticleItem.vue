<template>
  <div class="newItem">
          <div class="time">{{timeTitle}}</div>
          <div class="picAndContent">
            <div class="pic">
              <img :src="picSrc" alt="" height="100%" width="100%">
            </div>
            <div class="desc">
              <div class="title">
                {{articleTitle}}                            
              </div>
              <div class="content">
                {{articleSumary}}                
                </div>
            </div>
          </div>
          <div class="sep"></div>
        </div>
</template>

<script>
export default {
  name:"ShowArticleItem",
  
  props:{
     'timeTitle':'',
     'picSrc':'',
     'articleTitle':'',
     'articleSumary':''
     }
}
</script>

<style lang="less" scoped>
    .newItem {
      display: flex;
      flex-direction: column;

      .time {
        margin-top: 36px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 22px;
      }
      .picAndContent {
        margin-top: 18px;
        display: flex;
        flex-direction: row;
        .pic {
          width: 72px;
          height: 72px;
          background-color: aliceblue;
          margin-right: 14px;
        }
        .desc {
          width: 287px;
          .title {
            font-size: 18px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(69, 69, 69, 1);
            line-height: 22px;
            margin-bottom: 10px;
          }
          .content {
            font-size: 14px;
            font-family: Helvetica;
            color: rgba(153, 153, 153, 1);
            line-height: 18px;
            margin-bottom: 24px;
          }
        }
      }
      .sep {
        width: 375px;
        height: 1px;
        background-color: #e8e8e8;
      }
    }
  
</style>


