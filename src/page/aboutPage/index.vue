<template>
  <div class="container">
    <HeadTop textColor='#000'/> 
    <div class="aboutContainer">
      <ScrollPicAbout/>
    </div>
        
	</div>
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import ScrollPicAbout from './ScrollPicAbout.vue'

export default {
  name: 'AboutPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
  components:{
      HeadTop,
      ScrollPicAbout,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  
  .container{
        width: 100%;      
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        position: relative;
    }
    .aboutContainer{
       width:100%;
       height: 100%;
    }
</style>