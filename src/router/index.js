import Vue from 'vue'
import Router from 'vue-router'

import Cover from '@/page/coverPage'
import MainPage from '@/page/mainPage'
import ProjectPage from '@/page/projectPage'
import DesignPage from '@/page/designPage'
import AboutPage from '@/page/aboutPage'
import CivilizationPage from '@/page/civilizationPage'
import ArticleList from '@/page/articleListPage'
import ProjectInfo from '@/page/projectInfoPage'
import AdminPage from '@/page/adminPage'
import ArticleDetail from '@/page/articleDetail'
import TestPage from '@/page/TestPage'
import CivilInfo from '@/page/civilInfo'
import UserPage from '@/page/userPage'
import AddPicture from '@/page/addPicture'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/testPage',
      name: 'testPage',
      component: TestPage,
    },
    {
      path: '/',
      name: 'Cover',
      component: Cover,
    },
     {
      path: '/userPage',
      name: 'UserPage',
      component: UserPage,
    },
    {
      path: '/articleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/projectinfo',
      name: 'ProjectInfo',
      component: ProjectInfo,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/articleListPage',
      name: 'ArticleList',
      component: ArticleList,
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
      path: '/addPicture',
      name: 'AddPicture',
      component: AddPicture
    },
    {
      path: '/civilization',
      name: 'civilization',
      component: CivilizationPage
    },
     {
      path: '/civilInfo',
      name: 'civilInfo',
      component:CivilInfo
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage
    },
  ]
})
