import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/map',
    name: 'Map',
    component: loadPage('MapPage')
  },
  {
    path: '/bugsnax',
    name: 'Bugsnax',
    component: loadPage('BugsnaxPage')
  },
  {
    path: '/grumpuses',
    name: 'Grumpuses',
    component: loadPage('GrumpusesPage')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: loadPage('ToolsPage')
  },
  {
    path: '/sauces',
    name: 'Sauces',
    component: loadPage('SaucesPage')
  },
  {
    path: '/quests',
    name: 'Quests',
    component: loadPage('QuestsPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
