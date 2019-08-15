<template>
  <div style="width: 400px; height: 100px; background-color: #F0F8FF ;">
    <div style="color: blue;">
      {{user1.name}}
      <!-- <slot name="header" :data="student">
        {{student.nickName}}
      </slot> -->
      <slot>
        {{student.nickName}}
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testSlot',

    data(){
      return {
        user1:{
          name:'dfs'
        },
        student:{
          age:13,
          nickName:'hahaha'
        }

      }
    }
  }
</script>

<style>
</style>
