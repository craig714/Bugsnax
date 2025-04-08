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
    path: '/sizzlinSands',
    name: 'SizzlinSands',
    component: loadPage('MapPage')
  },
  {
    path: '/sugarpineWoods',
    name: 'SugarpineWoods',
    component: loadPage('MapPage')
  },
  {
    path: '/frostedPeaks',
    name: 'FrostedPeaks',
    component: loadPage('MapPage')
  },
  {
    path: '/scorchedGorge',
    name: 'ScorchedGorge',
    component: loadPage('MapPage')
  },
  {
    path: '/boilingBay',
    name: 'BoilingBay',
    component: loadPage('MapPage')
  },
  {
    path: '/snackburg',
    name: 'Snackburg',
    component: loadPage('MapPage')
  },
  {
    path: '/gardenGrove',
    name: 'GardenGrove',
    component: loadPage('MapPage')
  },
  {
    path: '/simmeringSprings',
    name: 'SimmeringSprings',
    component: loadPage('MapPage')
  },
  {
    path: '/flavorFalls',
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
