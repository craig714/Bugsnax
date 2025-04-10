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
    path: '/sauce/:sauceId',
    name: 'SauceDetails',
    component: loadPage('SaucesDetailsPage')
  },
  {
    path: '/tools/:toolId',
    name: 'ToolDetails',
    component: loadPage('ToolsDetailsPage')
  },
  {
    path: '/sizzlinsands',
    name: 'Sizzlin Sands',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/sugarpinewoods',
    name: 'Sugarpine Woods',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/frostedpeak',
    name: 'Frosted Peak',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/scorchedgorge',
    name: 'Scorched Gorge',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/boilingbay',
    name: 'Boiling Bay',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/snaxburg',
    name: 'Snaxburg',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/gardengrove',
    name: 'Garden Grove',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/simmeringsprings',
    name: 'Simmering Springs',
    component: loadPage('LocationDetailsPage')
  },
  {
    path: '/flavorfalls',
    name: 'Flavor Falls',
    component: loadPage('LocationDetailsPage')
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
