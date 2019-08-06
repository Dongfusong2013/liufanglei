<template>
  <div class="news-container">
    <HeadTop textColor='#000'/> 
    <div class="scroll-container">
    <ScrollPicNews/>
    </div>
	</div>
  
</template>

<script>
import HeadTop from '../components/HeadTop.vue'
import ScrollPicNews from '../components/ScrollPicNews.vue'

export default {
  name: 'NewsPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components:{
      HeadTop,
      ScrollPicNews,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

    .news-container{
        width: 100%;        
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .scroll-container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;        
      height: 100%;
    }
    
</style>
