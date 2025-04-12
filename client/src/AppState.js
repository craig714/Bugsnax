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

  /** @type {import('./models/Bugsnax.js').Bugsnax}*/
  activeBugsnax: null,

  /** @type {import('./models/Tool.js').Tool[]} */
  tools: [],

  /** @type {import('./models/Sauce.js').Sauce[]} */
  sauces: [],

  /** @type {import('./models/Grumpus.js').Grumpus[]} */
  grumpuses: [],

  /** @type {import('./models/BugsnaxLocation.js').BugsnaxLocation[]}*/
  bugsnaxLocations: [],
  /** @type {import('./models/Quest.js').Quest[]} quest data from database*/
  quests: [],
  /** @type {import('./models/Location.js').Location} info on the selected location from the database*/
  activeLocation: null,

  /** @type {import('./models/GrumpusLocation.js').GrumpusLocation[]} grumpusLocation data from the database*/
  grumpusLocations: [],
  /** @type {import('./models/GrumpusLocation.js').GrumpusLocation} selected grumpusLocation from database from the database*/
  activeGrumpusLocation: null,


  activeGrumpus: null,

  activeSauce: null,
  /** @type {import('./models/SauceLocation.js').SauceLocation[]} user info from the database*/
  sauceLocations: [],
  /** @type {import('./models/Tool.js').Tool} user info from the database*/
  activeTool: null,

  like: null
})

