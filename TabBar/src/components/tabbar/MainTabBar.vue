<template>
  <tab-bar>
    <tab-bar-item path="/home" textcolor="blue">
      <template slot="item-icon">
        <img src="../../assets/image/tabbar/all.svg" alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../assets/image/tabbar/allactive.svg" alt="">
      </template>
      <template slot="item-text">
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" textcolor="blue">
      <template slot="item-icon">
        <img src="../../assets/image/tabbar/list.svg" alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../assets/image/tabbar/listactive.svg" alt="">          
      </template>
      <template slot="item-text">
        <div>分类</div>
      </template> 
    </tab-bar-item>
    <tab-bar-item path="/cart" textcolor="blue">
      <template slot="item-icon">
        <img src="../../assets/image/tabbar/cart_empty.svg" alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../assets/image/tabbar/cart-Empty.svg" alt="">                   
      </template>
      <template slot="item-text">
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" textcolor="blue">
      <template slot="item-icon">
        <img src="../../assets/image/tabbar/user.svg" alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../assets/image/tabbar/useractive.svg" alt="">                                       
      </template>
      <template slot="item-text">
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>
