<template>
  <div v-if="isTrue" @click="isTrue">
      dongfusong
  </div>
</template>

<script>
export default {
   name:'testComponent',
   props:{
       isTrue:{
        type :Function
       }
   }
}
</script>
