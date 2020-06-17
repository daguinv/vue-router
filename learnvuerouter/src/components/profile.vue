<template>
  <div>
    <h1>我是profile组件</h1>
    <h2 v-for="item in $route.query" :key="item">{{item}}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'profile',
  data(){
    return {}
  },
   created(){
    console.log('profile created');
  },
  destroyed(){
    console.log('profile destroyed'); 
  },
}
</script>
<style scoped>
</style>
