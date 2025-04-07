import { dbContext } from "../db/DbContext.js"



class SauceLocationsService {
  async getAllSauceLocations() {
    const sauceLocations = await dbContext.SauceLocations.find()
    return sauceLocations
  }
  async createSauceLocations(sauceLocationData) {
    const sauceLocation = await dbContext.SauceLocations.create(sauceLocationData)
    return sauceLocation
  }

}

export const sauceLocationsService = new SauceLocationsService()