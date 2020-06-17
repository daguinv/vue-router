<template>
  <div>
    <h2>我是关于组件</h2>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return {
      
    }
  },
  created(){
    console.log('about created');
  },
  destroyed(){
    console.log('about destroyed'); 
  },
}
</script>
<style scoped>
</style>
