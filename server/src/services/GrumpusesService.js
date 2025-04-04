import { dbContext } from "../db/DbContext.js"

class GrumpusesService {




  async getAllGrumpuses() {
    const grumpuses = await dbContext.Grumpuses.find()
    return grumpuses
  }

  async createGrumpus(grumpusData) {
    const grumpus = await dbContext.Grumpuses.create(grumpusData)
    return grumpus
  }


  async getGrumpusById(grumpusId) {
    const grumpus = await dbContext.Grumpuses.findById(grumpusId)
    return grumpus
  }

  async deleteGrumpus(grumpusId) {
    const grumpusToDelete = await dbContext.Grumpuses.findById(grumpusId)
    const name = grumpusToDelete.name
    await grumpusToDelete.deleteOne()
    return `${name} has been deleted!`
  }

  async editGrumpus(grumpusId, grumpusData) {
    const grumpusToEdit = await dbContext.Grumpuses.findById(grumpusId)
    grumpusToEdit.name = grumpusData.name ?? grumpusToEdit.name
    grumpusToEdit.picture = grumpusData.picture ?? grumpusToEdit.picture
    grumpusToEdit.description = grumpusData.description ?? grumpusToEdit.description
    grumpusToEdit.likes = grumpusData.likes ?? grumpusToEdit.likes
    grumpusToEdit.dislikes = grumpusData.dislikes ?? grumpusToEdit.dislikes

    await grumpusToEdit.save()
    return grumpusToEdit



    // NOTE - Write userinfo checks after auth0 is implemented


  }


}





export const grumpusesService = new GrumpusesService()