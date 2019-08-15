<template>
  <div>
    <div class="leftArrow">
      <img src="/static/index/left-white.png" width="28px" height="56px" v-if="!isFirst()" @click="prePic()" />
    </div>
    <div class="rightArrow">
      <img src="/static/index/right-white.png" width="28px" height="56px" v-if="!isLast()" @click="nextPic()" />
    </div>
    <Frame isPaddingView='true'>
        <slot>

        </slot>
    </Frame>
  </div>
</template>

<script>
  export default {
    name: "ScrollFrame",
    props:{
      isFirst:{type:Function},
      isLast:{type:Function},
      prePic:{type:Function},
      nextPic:{type:Function},
    }
  };
</script>

<style lang="less" scoped>

</style>
