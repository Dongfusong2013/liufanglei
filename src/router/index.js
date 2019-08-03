import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/page/mainPage'
import ProjectPage from '@/page/projectPage'
import DesignPage from '@/page/designPage'

import AboutPage from '@/page/aboutPage'
import HistoryPage from '@/page/historyPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    }, 
    {
      path: '/project',
      name: 'ProjectPage',
      component: ProjectPage
    },
    {
      path: '/design',
      name: 'DesignPage',
      component: DesignPage
    },
    {
      path: '/history',
      name: 'HistoryPage',
      component: HistoryPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },    
    
  ]
})
