import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'
// import Demo3 from '@/components/Demo3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    }
  ]
})
