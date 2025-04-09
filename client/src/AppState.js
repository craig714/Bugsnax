import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /**@type {import('./models/Location.js').Location[]} */
  locations: [],
  /** @type {import('./models/Bugsnax.js').Bugsnax[]}*/
  bugsnax: [],
  /** @type {import('./models/Tool.js').Tool[]} */
  tools: [],
  /** @type {import('./models/Sauce.js').Sauce[]} */
  sauces: [],
  /** @type {import('./models/Grumpus.js').Grumpus[]} */
  grumpuses: [],
  activeBugsnax: null,
  /** @type {import('./models/BugsnaxLocation.js').BugsnaxLocation[]}*/
  bugsnaxLocations: [],

  /** @type {import('./models/Location.js').Location} info on the selected location from the database*/
  activeLocation: null,

  /** @type {import('./models/GrumpusLocation.js').GrumpusLocation[]} user info from the database*/
  grumpusLocations: [],


  activeGrumpus: null,

  activeSauce: null,
  /** @type {import('./models/SauceLocation.js').SauceLocation[]} user info from the database*/
  sauceLocation: []
})

