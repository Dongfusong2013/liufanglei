<template>
  <div id="app">  
  
    <!-- <div class="container"> -->
     <router-view/>
     <!-- </div>   -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style lang="less" scoped>
  @import "./style/common"; 
  #app{
      width: 1400px;
      // height: 810px
      // ;
  }
</style>
