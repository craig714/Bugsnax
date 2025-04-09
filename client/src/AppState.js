import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {import('./models/Bugsnax.js').Bugsnax[]} user info from the database*/
  bugsnax: [],
  /** @type {import('./models/Grumpus.js').Grumpus[]} user info from the database*/

  grumpuses: [],

  activeBugsnax: null,
  /** @type {import('./models/BugsnaxLocation.js').BugsnaxLocation[]} user info from the database*/
  bugsnaxLocations: [],
  /** @type {import('./models/Location.js').Location[]} info on the selected location from the database*/
  locations: [],
  /** @type {import('./models/Location.js').Location} info on the selected location from the database*/
  activeLocation: null
})

