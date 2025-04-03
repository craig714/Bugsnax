import { dbContext } from "../db/DbContext.js"

class BugsnaxService {


  async getAllBugsnax() {
    const bugsnax = await dbContext.Bugsnax.find()
    return bugsnax
  }

  async createBugsnax(bugsnaxData) {
    const bugsnax = await dbContext.Bugsnax.create(bugsnaxData)
    console.log(bugsnax)
    return bugsnax
  }
}





export const bugsnaxService = new BugsnaxService()