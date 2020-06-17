<template>
  <div>
    <h2>我是首页标题</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <keep-alive>
    <router-view></router-view>
      
    </keep-alive>
    <button @click="num++">{{num}}</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      num:0,
      path:'/home/news'
    }
  },
  created(){
    console.log('home created');
  },
  destroyed(){
    console.log('home destroyed'); 
  },
  // updated(){
  //   console.log('刷新');
  // },
  activated(){
    this.$router.push(this.path)
  },
  deactivated(){
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.path = this.$route.path
    next();
  },
  methods:{

  }
}
</script>
<style scoped>
</style>
