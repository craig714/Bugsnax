import { dbContext } from "../db/DbContext.js"

class BugsnaxService {


  async getAllBugsnax() {
    const bugsnax = await dbContext.Bugsnax.find()
    return bugsnax
  }

}





export const bugsnaxService = new BugsnaxService()