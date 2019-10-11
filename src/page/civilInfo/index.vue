<template>
  <div class="history-container">
    <div style="position: absolute; top:0; width:100%; z-index: 10;">
      <AppHeader noBackground="true" selectedType="earth" />
    </div>
    <LocationShow :bgUrl="bgUrl" :name="name"></LocationShow>
    <div style="width: 100%; height: 100%;">
      <div class="view-title view-pos">
        历史文明
      </div>
      <div style="margin-left: 30px;">
        <ScrollTimeView personFlg="false" :pictures1="pictures1" :pictures2="pictures1"></ScrollTimeView><!--  -->
      </div>
    </div>
    <div class="view-title share-pos">
      <div style="margin-left: 86px; margin-top: 0px; ">
        用户分享
      </div>
      <div style="margin-top: 40px; ">
        <PicShare></PicShare>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/appHeader';
  import ScrollTimeView from '@/components/ScrollTimeView';
  import PicShare from '@/components/PicShare.vue'
  import LocationShow from '@/components/LocationShow.vue'
  import {fetchDatePics} from '@/api/album.js'

  import {
    mapState,
    mapMutations
  } from "vuex";

  export default {
    name: 'Civilnfo',
    computed: {
      ...mapState('civilInfoData', ['bgUrl', 'name', 'id']),
    },

    mounted(){
     fetchDatePics(1, this.id).then((data)=>{
           this.pictures1 = data.data;
           console.log("----mounted",this.pictures1);
      })
    },

    data() {
      return {
        pictures1: [{
            time: 1990,
            url: '/static/public_location/1.png',
            width: 316,
            height: 208,
            description: '故宫遵循《周礼·考工记》为建设原则',
            // timeStr:''
          },
          {
            time: 1992,
            url: '/static/public_location/2.png',
            width: 280,
            height: 194,
            description: '历时十四年，永乐十八年故宫建成，朱棣迁都故宫',
          },
          {
            time: 1993,
            url: '/static/public_location/3.png',
            width: 330,
            height: 200,
            description: '600年间，太和殿为何规模缩小了一半【图集】',
          },
          {
            time: 1994,
            url: '/static/public_location/4.png',
            width: 140,
            height: 208,
            description: '明崇祯十七年十月，清世祖顺治帝迁都…',
          },
          {
            time: 1995,
            url: '/static/public_location/5.png',
            width: 204,
            height: 187,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2000,
            url: '/static/public_location/6.png',
            width: 204,
            height: 187,
            description: '1949年解放，毛主席登上故宫天安门城楼，新中国成立',
          },
          {
            time: 2003,
            url: '/static/public_location/7.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2005,
            url: '/static/public_location/4.png',
            width: 171,
            height: 207,
            description: '故宫掠影：记录故宫的美丽',
          },
          {
            time: 2005,
            url: '/static/public_location/4.png',
            width: 316,
            height: 208,
            description: '故宫掠影：记录故宫的美丽',
          },
        ],
        pictures2: [{
            time: 2008,
            url: '/static/public_location/5.png',
            width: 280,
            height: 194,
            description: '明故宫以南京皇宫（南京故宫）为设计蓝本，于1406年开始动工兴建',
          },
          {
            time: 2009,
            url: '/static/public_location/7.png',
            width: 171,
            height: 207,
            description: '故宫在明朝被称为“紫禁城”',
          },
          {
            time: 2010,
            url: '/static/public_location/8.png',
            width: 316,
            height: 208,
            description: '李自成1644年攻入故宫，大明皇帝崇祯吊死，随后李自成火烧紫禁城',
          },
          {
            time: 2012,
            url: '/static/public_location/9.png',
            width: 280,
            height: 194,
            description: '1949年解放，毛主席登上故宫天安门城楼，新中国成立',
          },
          {
            time: 2013,
            url: '/static/public_location/3.png',
            width: 338,
            height: 191,
            description: '故宫掠影：记录美丽',
          },
          {
            time: 2020,
            url: '/static/public_location/1.png',
            width: 316,
            height: 208,
            description: '故宫掠影：记录丽',
          },
        ]
      }
    },
    components: {
      AppHeader,
      LocationShow,
      ScrollTimeView,
      PicShare,
    },
    created() {
      // var location = this.$route.query.location;

      console.log("create....", this.name, this.civilData);
    },
    methods: {
      gotoPage(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style lang="less" scoped>
  // @import '../appStyle.less';

  .share-pos {
    margin-top: 180px;
    width: 100%;
    height: 800px;
    box-sizing: border-box;
    // background-color: aliceblue;
  }

  .backgroundImg {
    width: 100%;
    height: 800px;
  }

  .view-pos {
    color: #000000;
    margin-left: 86px;
    margin-top: 40px;
    margin-bottom: 27px;
  }

  .view-title {
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(23, 0, 0, 1);
    line-height: 32px;
  }


  .sm-title {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
  }

  .history-container {
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
</style>
