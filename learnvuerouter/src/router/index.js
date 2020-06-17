import Vue from 'vue'
import Router from 'vue-router'
// import home from '../components/home'
// import about from '../components/about'
// import user from '../components/user'

const home = () => import('../components/home');
const homeNews = () => import('../components/homeNews');
const homeMessage = () => import('../components/homeMessage');
const about = () => import('../components/about');
const user = () => import('../components/user');
const profile = () => import('../components/profile');
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/home',
    },
    {
      path: '/home',
      component:home,
      // 元数据（描述数组的数据）
      meta:{
        title:'首页'
      },
      children:[{
        path:'news',
        component:homeNews
      },{
        path:'message',
        component:homeMessage
      }]
    },{
      path:'/about',
      component:about,
      meta:{
        title:'关于'
      },
    },{
      path:'/user/:userId',
      component:user
    },{
      path:'/profile',
      component:profile
    }
  ],
  mode:'history'
})
// 全局导航守卫 当从一个路由跳转到另一个路由之前回调执行这个函数（前置钩子）
router.beforeEach((to,from,next)=>{
  // 从from跳到to
  // from:当前导航即将离开的路由
  // to:router即将进入的路由对象
  // console.log(from);
  // console.log(to);
  
  document.title = to.matched[0].meta.title;
  // console.log("+++");
  
  // 这里必须调用一下next函数。他才会跳转到下一个路由（跳转下一个路由用的）
  next();
})
// 后置钩子（路由跳转后回调的函数）因为这里已经跳转完，所以不需要next()
router.afterEach((to,from)=>{
  // console.log("---");
  
})

export default router