import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
          path: '/',
          redirect: '/login'
      },
      {
          path: '/readme',
          component: resolve => require(['@/common/Home.vue'], resolve),
          children: [
              {
                  path: '/userinfo',
                  name: '用户信息',
                  component: resolve => require(['../views/UserInfo.vue'], resolve),
              },
              {
                path: '/mainoptions',
                name: '基本设置',
                component: resolve => require(['../views/MainOptions.vue'], resolve),
            },
          ]
      },
      {
          path: '/login',
          component: resolve => require(['../views/Login.vue'], resolve)
      },
  ]
})
