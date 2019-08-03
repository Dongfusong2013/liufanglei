<template>
  <div class="container">
    <HeadTop textColor='#000'/> 
    home
	</div>
</template>

<script>
import HeadTop from '../components/HeadTop.vue'
    
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
  components:{
      HeadTop,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

    .container{
        width: 100%;     
        // background: #00FF00 url('/static/home/首页_02.png') no-repeat fixed top;
        background-size: 100% 100%
    }
</style>
