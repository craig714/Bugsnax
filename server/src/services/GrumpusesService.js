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






}





export const grumpusesService = new GrumpusesService()