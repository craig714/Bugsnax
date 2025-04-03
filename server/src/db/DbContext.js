import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { BugsnaxSchema } from '../models/Bugsnax.js';
import { LocationSchema } from '../models/Location.js'
import { SauceSchema } from '../models/Sauce.js';
import { GrumpusSchema } from '../models/Grumpus.js';
import { ToolSchema } from '../models/Tool.js';
import { QuestSchema } from '../models/Quest.js';
import { BugsnaxLocationSchema } from '../models/BugsnaxLocation.js';
import { GrumpusLocationSchema } from '../models/GrumpusLocation.js';
import { SauceLocationSchema } from '../models/SauceLocation.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema)
  Bugsnax = mongoose.model('Bugsnax', BugsnaxSchema)
  Locations = mongoose.model('Location', LocationSchema)
  Sauces = mongoose.model('Sauce', SauceSchema)
  Grumpuses = mongoose.model('Grumpus', GrumpusSchema)
  Tools = mongoose.model('Tool', ToolSchema)
  Quests = mongoose.model('Quest', QuestSchema)
  BugsnaxLocations = mongoose.model('BugsnaxLocation', BugsnaxLocationSchema)
  GrumpusLocations = mongoose.model('GrumpusLocation', GrumpusLocationSchema)
  SauceLocations = mongoose.model('SauceLocation', SauceLocationSchema)
}

export const dbContext = new DbContext()
