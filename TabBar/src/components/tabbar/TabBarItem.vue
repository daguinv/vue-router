<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>        
    </div>
    <div v-else>  
      <slot name="item-icon"></slot>           
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    textcolor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive ? {color:this.textcolor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path); 
    }
  }
}
</script>
<style scoped>
.tab-item{
  flex-grow: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-item img{
  vertical-align: bottom;
  width:25px;
  height: 25px;
  margin-top: 5px;
}
</style>
