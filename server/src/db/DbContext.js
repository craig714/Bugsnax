import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { BugsnaxSchema } from '../models/Bugsnax.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Bugsnax = mongoose.model('Bugsnax', BugsnaxSchema)
}

export const dbContext = new DbContext()
