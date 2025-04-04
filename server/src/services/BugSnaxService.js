import { dbContext } from "../db/DbContext.js"

class BugsnaxService {
  async getAllBugsnax() {
    const bugsnax = await dbContext.Bugsnax.find()
    return bugsnax
  }
  async getBugsnaxById(bugsnaxId) {
    const bugsnax = await dbContext.Bugsnax.findById(bugsnaxId)
    return bugsnax
  }
  async createBugsnax(bugsnaxData) {
    const bugsnax = await dbContext.Bugsnax.create(bugsnaxData)
    console.log(bugsnax)
    return bugsnax
  }
  async updateBugsnax(bugsnaxId, bugsnaxData) {
    const bugsnaxToEdit = await dbContext.Bugsnax.findById(bugsnaxId)

    // NOTE - Write userinfo checks after auth0 is implemented

    bugsnaxToEdit.name = bugsnaxData.name ?? bugsnaxToEdit.name
    bugsnaxToEdit.picture = bugsnaxData.picture ?? bugsnaxToEdit.picture
    bugsnaxToEdit.description = bugsnaxData.description ?? bugsnaxToEdit.description
    bugsnaxToEdit.strategy = bugsnaxData.strategy ?? bugsnaxToEdit.strategy
    bugsnaxToEdit.likes = bugsnaxData.likes ?? bugsnaxToEdit.likes
    bugsnaxToEdit.dislikes = bugsnaxData.dislikes ?? bugsnaxToEdit.dislikes
    bugsnaxToEdit.fears = bugsnaxData.fears ?? bugsnaxToEdit.fears

    await bugsnaxToEdit.save()
    return bugsnaxToEdit
  }

  async deleteBugsnax(bugsnaxId) {
    const bugsnaxToDelete = await dbContext.Bugsnax.findById(bugsnaxId)
    const bugsnaxToDeleteName = bugsnaxToDelete.name
    await bugsnaxToDelete.deleteOne()
    return `${bugsnaxToDeleteName} has been deleted`
  }
}





export const bugsnaxService = new BugsnaxService()