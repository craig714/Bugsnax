import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /**@type {import('./models/Location.js').Location[]} */
  location: [],
  /** @type {import('./models/Bugsnax.js').Bugsnax[]}*/
  bugsnax: [],
  /** @type {import('./models/Tool.js').Tool[]} */
  tool: [],
  /** @type {import('./models/Sauce.js').Sauce[]} */
  sauce: [],
  /** @type {import('./models/Grumpus.js').Grumpus[]} */
  grumpuses: [],
  activeBugsnax: null,
  /** @type {import('./models/BugsnaxLocation.js').BugsnaxLocation[]}*/
  bugsnaxLocations: [],
})

