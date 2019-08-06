<template>
    <div class="pic">
            <div class="innerPic">
              <img :src="picItem" height="100%" width="100%" alt />
            </div>
          </div>
</template>

<script>

export default {
  name:'PicItem',
  props:{
     picItem:{type:String}
  }
}
</script>

<style lang="less" scoped>


</style>
