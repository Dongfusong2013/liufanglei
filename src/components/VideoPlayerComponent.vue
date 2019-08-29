<template>
  <div>
    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
    </video-player>

  </div>
</template>

<script>
  import {
    videoPlayer
  } from 'vue-video-player'
  import 'video.js/dist/video-js.css'

  export default {
    name: 'VideoPlayerComponent',
    props:{
        height:String,
        width:String,
        videoSrc:String,
        picSrc:String
    },
    components: {
      videoPlayer
    },
    //watch非常重要
    watch:{
       videoSrc:function(value){
          console.log("--videoSrc---",value);
          this.playerOptions.sources[0].src = value;
       },
       picSrc:function(value){
         console.log("--picSrc---",value);
         this.playerOptions.poster = value;
       }
    },
    data() {
      return {
        playerOptions: {
          // videojs options
          height: this.height,
          width:this.width,
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: this.videoSrc,
          }],
          poster: this.picSrc,
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: true,
            fullscreenToggle: true //全屏按钮
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .video-js .vjs-big-play-button {
    left: 43%;
    top: 43%;
    width: 100px;
    height: 50px;
  }
</style>
