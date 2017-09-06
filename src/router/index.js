import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Faq from '@/components/Faq'
import About from '@/components/About'
import Capabilities from '@/components/Capabilities'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/capabilities',
      name: 'Capabilities',
      component: Capabilities
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
