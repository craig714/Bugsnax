import { dbContext } from "../db/DbContext.js"

class GrumpusLocationsService {


  async getAllGrumpusLocations() {
    const grumpusLocations = await dbContext.GrumpusLocations.find().populate('grumpus location quest')
    return grumpusLocations
  }


  async createGrumpusLocation(grumpusLocationsData) {
    const grumpusLocation = await dbContext.GrumpusLocations.create(grumpusLocationsData)
    await grumpusLocation.populate('grumpus')
    await grumpusLocation.populate('location')
    await grumpusLocation.populate('quest')
    return grumpusLocation

  }

  async getGrumpusLocationsByQuestId(questId) {
    const grumpusLocation = await dbContext.GrumpusLocations.find({ questId: questId }).populate('grumpus location quest')
    return grumpusLocation
  }


  async getGrumpusLocationsByLocationId(locationId) {
    const grumpusLocation = await dbContext.GrumpusLocations.findById(locationId).populate('grumpus location quest')
    return grumpusLocation
  }

  async getGrumpusLocationById(grumpusLocationId) {
    const grumpusLocation = await dbContext.GrumpusLocations.findById(grumpusLocationId).populate('grumpus location quest')
    return grumpusLocation
  }


  async deleteGrumpusLocation(grumpusLocationId) {
    const grumpusLocation = await this.getGrumpusLocationById(grumpusLocationId)
    await grumpusLocation.deleteOne()
    return `Grumpus Location with the Id of ${grumpusLocationId} has been deleted!`
  }


  async editGrumpusLocation(grumpusLocationId, grumpusLocationData) {
    const grumpusToEdit = await dbContext.GrumpusLocations.findById(grumpusLocationId).populate('grumpus location quest')
    grumpusToEdit.grumpusId = grumpusLocationData.grumpusId ?? grumpusToEdit.grumpusId
    grumpusToEdit.locationId = grumpusLocationData.locationId ?? grumpusToEdit.locationId
    grumpusToEdit.questId = grumpusLocationData.questId ?? grumpusToEdit.questId

    await grumpusToEdit.save()
    return grumpusToEdit
  }






}



export const grumpusLocationsService = new GrumpusLocationsService()