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

.pic {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 210px;
  margin: 10px;
  background: linear-gradient(
    90deg,
    rgba(196, 232, 250, 1) 0%,
    rgba(250, 233, 207, 1) 100%
  );
}

.innerPic {
  width: 288px;
  height: 198px;
}
</style>




