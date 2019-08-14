import Vue from 'vue'
import Router from 'vue-router'

import Cover from '@/page/coverPage'
import MainPage from '@/page/mainPage'
import ProjectPage from '@/page/projectPage'
import DesignPage from '@/page/designPage'
import AboutPage from '@/page/aboutPage'
import HistoryPage from '@/page/historyPage'
import NewsListPage from '@/page/newsListPage'
import ProjectInfo from '@/page/projectInfoPage'
import AdminPage from '@/page/adminPage'
import NewsDetail from '@/page/newsDetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/projectinfo',
      name: 'ProjectInfo',
      component: ProjectInfo
    },
    {
      path: '/newsList',
      name: 'newsListPage',
      component: NewsListPage
    },
    {
      path: '/main',
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
    {
      path: '/newsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage
    },
  ]
})
