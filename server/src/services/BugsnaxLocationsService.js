import { dbContext } from "../db/DbContext.js"


class BugsnaxLocationsService {
  async getAllBugsnaxLocations() {
    const bugsnaxLocations = await dbContext.BugsnaxLocations.find()
    return bugsnaxLocations
  }

  async getBugsnaxLocationsByLocationId(locationId) {
    const bugsnaxLocations = dbContext.BugsnaxLocations.find({ locationId: locationId })
    return bugsnaxLocations
  }
  async createBugsnaxLocation(bugsnaxLocationData) {
    const bugsnaxLocation = await dbContext.BugsnaxLocations.create(bugsnaxLocationData)
    await bugsnaxLocation.populate('bugsnax')
    await bugsnaxLocation.populate('location')
    return bugsnaxLocation
  }
  async getBugsnaxLocationById(bugsnaxLocationId) {
    const bugsnaxLocation = await dbContext.BugsnaxLocations.findById(bugsnaxLocationId)
    return bugsnaxLocation
  }
  async updateBugsnaxLocation(bugsnaxLocationId, bugsnaxLocationData) {
    const bugsnaxLocationToUpdate = await dbContext.BugsnaxLocations.findById(bugsnaxLocationId)

    bugsnaxLocationToUpdate.bugsnaxId = bugsnaxLocationData.bugsnaxId ?? bugsnaxLocationToUpdate.bugsnaxId
    bugsnaxLocationToUpdate.locationId = bugsnaxLocationData.locationId ?? bugsnaxLocationToUpdate.locationId

    await bugsnaxLocationToUpdate.save()
    return bugsnaxLocationToUpdate
  }
  async deleteBugsnaxLocation(bugsnaxLocationId) {
    const bugsnaxLocation = await this.getBugsnaxLocationById(bugsnaxLocationId)
    await bugsnaxLocation.deleteOne()
    return `BugsnaxLocation with the id of ${bugsnaxLocationId} has been deleted, you monster.`
  }
}

export const bugsnaxLocationsService = new BugsnaxLocationsService()