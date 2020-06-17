<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'zwq',age:18,height:180}}" tag="button">档案</router-link>
   
    <!-- <button @click="clickhome">首页</button>
    <button @click="clickabout">关于</button>
    <button @click="clickuser">用户</button>
    <button @click="clickprofile">档案</button> -->
    
    <keep-alive exclude="profile,user">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'zhangsan'
    }
  },
  methods:{
    clickhome(){
      // vue-router源码里面在所有组件里面都加了一个$router属性
      this.$router.push('/home');
      // this.$route 当前活跃的路由
      // console.log(this.$route);
      
    },
    clickabout(){
      this.$router.push('/about');
      // this.$router.replace 不能前进和后退
    },
    clickuser(){
      this.$router.push('/user/' + this.userId);
    },
    clickprofile(){
      this.$router.push({
        path:'profile',
        query:{
          name:'zwq',
          age: 18,
          height:180
        }
      })
      this.test();
    }
  }
}
</script>

<style>
.router-link-active{
  color: rgb(30, 198, 210);
}
</style>
