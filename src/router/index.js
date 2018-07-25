import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      component: (resolve) => require(['../components/HelloWorld.vue'], resolve)
    },
    {
      path: '/about',
      name: 'About',
      // component: About
      component: (resolve) => require(['../components/About.vue'], resolve)
    }
  ]
})
