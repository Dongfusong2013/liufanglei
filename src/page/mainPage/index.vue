
<template>
  <div class="dynamicContainer">
   <div class="headContainer">
      <HeadTop textColor="#000"></HeadTop>
   </div>   
   <div class="scrollContainer">
    <el-carousel :interval="5000" arrow="always" height="500px" ref="carousel" >      
        <el-carousel-item v-for="(item, index) in srcollPis" :key="index">     
          <div class="pic">
            <img :src="item" alt="" height="100%" width="100%"> 
          </div> 
        </el-carousel-item>       
    </el-carousel >
   </div>
   
    <div class="contentView">
      <div class="leftView">
        <div class="title">美学理念</div>
        <div class="line"></div>
        <div class="mainPic">
          <img src="/static/works/项目_004.jpg" alt="" height="100%" width="100%">
        </div>
        <div class="article">
          <div class="title">汉唐飞扬，以道营器</div>
          <div class="subtitle">汉唐飞扬，以道营器汉唐飞扬，以道营器</div>
          <div class="content">
            汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉
            唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐
            飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉
            唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬汉唐飞扬。
          </div>
        </div>
      </div>
      <div class="rightView">
        <div class="title">新闻</div>
        <div class="line"></div>        
        <div v-for="(item, index) in arctiles" :key="index">
            <ShowArticleItem  :timeTitle="item.timeTitle"
            :picSrc="item.picSrc"
            :articleTitle="item.articleTitle"
            :articleSumary="item.articleSumary"            
            />
          </div>
      </div>
    </div>
  </div>
  <!-- <div>
    dongfusong
  </div> -->
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import ShowArticleItem from "./ShowArticleItem";
// import MainContentView from '../components/MainContentView'

export default {
  name: "MainPage",
  components:{
     HeadTop,
     ShowArticleItem,    
  },
  data(){
      return {
         srcollPis:["/static/design/设计灵感_03.jpg","/static/design/设计灵感_03.jpg","/static/design/设计灵感_03.jpg"],         
          arctiles:[
            {timeTitle:'五月 2019 人民网', articleTitle:'汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事',
             picSrc:'/static/works/项目_003.jpg', articleSumary:'二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……'},
             {timeTitle:'五月 2019 人民网', articleTitle:'汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事',
             picSrc:'/static/works/项目_004.jpg', articleSumary:'二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……'},
             {timeTitle:'五月 2019 人民网', articleTitle:'汉唐飞扬设计师刘方磊开奖了：用建筑讲述中国故事',
             picSrc:'/static/works/项目_005.jpg', articleSumary:'二〇一五年，“一带一路”国际合作高峰论坛在 北京雁栖湖成功举办，在此让世界见识了……'},            
          ]
      }
  }
};
</script>

<style lang='less' scoped>
.headContainer{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.scrollContainer1{  
  background-color: #F5F5F5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  
  .pic{
     display: flex;
     flex-direction: row;
     justify-content: center;     
  }
}
.contentView {  
  display: flex;
  flex-direction: row;
  align-items: center;  

  .leftView {
    // width: 730px;
    // margin-right: 94px;
    .title {      
      font-size: 30px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(69, 69, 69, 1);
      line-height: 42px;
    }
    .line {
      margin-top: 12px;
      width: 49px;
      height: 4px;
      background-color: black;
    }
    .mainPic {
      margin-top: 36px;
      background-color: beige;
      width: 730px;
      height: 310px;
    }
    .article {
      margin-top: 36px;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 20px;
        font-family: Helvetica-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 24px;
        margin-bottom: 3px;
      }
      .subtitle {
        font-size: 16px;
        font-family: Helvetica;
        color: rgba(102, 102, 102, 1);
        line-height: 19px;
        margin-bottom: 10px;
      }
      .content {
        font-size: 16px;
        font-family: Helvetica;
        color: rgba(153, 153, 153, 1);
        line-height: 30px;
      }
    }
  }
  .rightView {
    // width: 364px;
    .title {
      // width: 363px;
      // height: 42px;
      font-size: 30px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(69, 69, 69, 1);
      line-height: 42px;
    }
    .line {
      margin-top: 12px;
      width: 49px;
      height: 4px;
      background-color: black;
    }   
  }
  .dynamicContainer {
    background-size: 100%, 100%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;    
  }
}
</style>

