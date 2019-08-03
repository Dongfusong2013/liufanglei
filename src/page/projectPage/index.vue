<template>
  <div class="project-container">
    <HeadTop textColor='#000'/> 
    <div class="content">
      <ScrollPicProject/>     
    </div>
	</div>
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import ScrollPicProject from './ScrollPicProject'
    
export default {
  name: 'ProjectPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components:{
      HeadTop,
      ScrollPicProject,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .project-container{
        width: 100%;     
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;  
    }
    .content{
      display: flex;
      flex-direction: row;
      // justify-content: center;
      width: 80%;
    }
</style>
