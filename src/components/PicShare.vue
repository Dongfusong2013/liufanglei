<template>
  <div class="pic-wrapper">
    <div v-for="(item, index) in userShares" :key="index">
      <div :style="{width:item.width + 'px', height:item.height + 'px',  marginTop:'8px', flex:item.width}" @click="gotoMoreUserPage('/moreUserPage')">
        <img :src="item.url" height="100%" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
  import DetailPicWindow from '@/components/DetailPicWindow.vue'
  export default {
    name: 'PicShare',
    components:{
      DetailPicWindow,
    },
    methods:{
      gotoMoreUserPage(path){
          this.$router.push(path);
      },
    },
    data() {
      return {
        showWindow : false,
        userShares: [{
            width: 297,
            height: 224,
            url: '/static/picShare/1.png',
          },
          {
            width: 240,
            height: 224,
            url: '/static/picShare/2.png',
          },
          {
            width: 218,
            height: 224,
            url: '/static/picShare/3.png',
          },
          {
            width: 145,
            height: 224,
            url: '/static/picShare/4.png',
          },
          {
            width: 332,
            height: 224,
            url: '/static/picShare/5.png',
          },
          {
            width: 358,
            height: 237,
            url: '/static/picShare/5.png',
          },
          {
            width: 156,
            height: 237,
            url: '/static/picShare/6.png',
          },
          {
            width: 370,
            height: 237,
            url: '/static/picShare/7.png',
          },
          {
            width: 356,
            height: 237,
            url: '/static/picShare/8.png',
          },
          {
            width: 963,
            height: 198,
            url: '/static/picShare/11.png',
          },
          {
            width: 293,
            height: 198,
            url: '/static/picShare/10.png',
          },

        ]

      }
    }
  }
</script>

<style>
  .pic-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 86px;
    padding-right: 86px;
    padding-bottom: 127px;
  }
</style>
