import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: {
        title: '首页'
      },
      // 路由懒加载方式 打包后的文件每一个组件都会单独打包成一个js文件
      component: () => import('../components/Home'),
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: () => import('../components/HomeNews')
        },
        {
          path: 'message',
          component: () => import('../components/HomeMessage')
        }
      ]
    },
    {
      path: '/about',
      meta: {
        title: '关于'
      },
      component: () => import('../components/About')
    },
    {
      path: '/user/:userId',
      meta: {
        title: '用户'
      },
      component: () => import('../components/User')
    },
    {
      path: '/profile',
      meta: {
        title: '我的'
      },
      component: () => import('../components/Profile')
    }
  ],
  mode: 'history'
})

router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
