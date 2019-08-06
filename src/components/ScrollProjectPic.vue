<template>
  <div class="scrollContainer">
   <div class="pad">
       <div class="leftArrow">
          <img src="/static/works/left_arrow.jpg" class="imgArrow"/>
       </div>
   </div>

    <div class="centerScroll">          
    <slot>
       
    </slot>
    </div>
        <div class="pad">
      <div class="rightArrow">
        <img src="/static/works/right_arrow.jpg" class="imgArrow"/>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ScrollProjectPic"
};
</script>

<style lang="less" scoped>

@height: 650px;
@arrowHeight: 56px;
@topOffset: @height / 2 - @arrowHeight / 2;


.scrollContainer {
  width: 100%;
  height: @height; 
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.centerScroll{
   // flex: 1;
   background-color: aliceblue;
   width: 100%;
   height: 100%;
}

.pad{
    height: 100%;
    width: 120px;    
    position: relative;
}

.arrow {
  width: 28px;
  height: 56px;
}

.arrowPosition {
  top: @topOffset;
  position:absolute;
}

.imgArrow{
   height:100%;
   width: 100%;
}

.leftArrow {
  right: 0px;
  .arrowPosition();
  .arrow();
}

.rightArrow {
  left: 0px;
  .arrowPosition();
  .arrow();
}
</style>


