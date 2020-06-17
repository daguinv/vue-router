<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息,嘿嘿嘿</p>
    <h3>{{userId}}</h3>
  </div>
</template>

<script>
export default {
  name: 'user',
  data(){
    return {}
  },
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  created(){
    console.log('user creared');
    
  },
  destroyed(){
    console.log('user destroyed');
    
  }
}
</script>
<style scoped>
</style>
