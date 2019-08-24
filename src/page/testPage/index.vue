<template>
    <div>
      test for video ...
        <VideoPlayerComponent height="400"
        videoSrc="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"/>
    </div>
</template>

<script>
    import VideoPlayerComponent from '@/components/VideoPlayerComponent.vue'
    export default{
      name:'TestPage',
      components:{
        VideoPlayerComponent
      }
    }
</script>

<style>

</style>
