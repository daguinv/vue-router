<template>
  <div>
    <ul>
      <li v-for="item in news" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeNews',
  data(){
    return {
      news:['新闻1','新闻2','新闻3','新闻4']
    }
  },
  created(){
    console.log('homeNews created');
    
  },
  destroyed(){
    console.log('homeNews destroyed');
    
  }
}
</script>
<style scoped>
</style>
