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
  },
  {
    path: '/bugsnax/:bugsnaxId',
    name: 'BugsnaxDetails',
    component: loadPage('BugsnaxDetailsPage')
  },
  {
    path: '/grumpus/:grumpusId',
    name: 'GrumpusDetails',
    component: loadPage('GrumpusesDetailsPage')
  },
  {
    path: '/sizzlinsands',
    name: 'SizzlinSands',
    component: loadPage('MapPage')
  },
  {
    path: '/sugarpinewoods',
    name: 'SugarpineWoods',
    component: loadPage('MapPage')
  },
  {
    path: '/frostedpeaks',
    name: 'FrostedPeaks',
    component: loadPage('MapPage')
  },
  {
    path: '/scorchedgorge',
    name: 'ScorchedGorge',
    component: loadPage('MapPage')
  },
  {
    path: '/boilingbay',
    name: 'BoilingBay',
    component: loadPage('MapPage')
  },
  {
    path: '/snaxburg',
    name: 'Snaxburg',
    component: loadPage('MapPage')
  },
  {
    path: '/gardengrove',
    name: 'GardenGrove',
    component: loadPage('MapPage')
  },
  {
    path: '/simmeringsprings',
    name: 'SimmeringSprings',
    component: loadPage('MapPage')
  },
  {
    path: '/flavorfalls',
    name: 'FlavorFalls',
    component: loadPage('MapPage')
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
