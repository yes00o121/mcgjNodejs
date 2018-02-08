import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import homeBody from '../views/home/home-body'
import conversationChildChild from '../views/conversation/childChild'//帖子组件
import conversationChild from '../views/conversation/child'//贴吧组件
import personalCenter from '../views/conversation/personalCenter'//个人中心组建
import error from '../views/components/error'//个人中心组建
import manga from '../views/home/mangaHome'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    //{
  //    redirect : '/home',
    //  path : '/'
    //},
    {
      path: '/',
      name : 'home',
      component: home,
      children : [
        {
          path: '/',//首页内容组件
          name : 'homeBody',
          component: homeBody,
        },
        {
          path: '/conversationChild',//贴吧主页面
          name : 'conversationChild',
          component: conversationChild,
      },{
      path: '/conversationChildChild',//帖子主页面
      name : 'conversationChildChild',
      component: conversationChildChild,
    },{
    path: '/personalCenter',//帖子主页面
    name : 'personalCenter',
    component: personalCenter
  }]
},{
  //隐藏的漫画页面
  path : '/manga',
  name : 'manga',
  component : manga
},{
  path : '/error',
  name : 'error',
  meta : {
      title : '找不到页面'
  },
  component:error
}
  ]
})
