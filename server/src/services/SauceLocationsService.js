import { dbContext } from "../db/DbContext.js"



class SauceLocationsService {
  async createSauceLocations(sauceLocationData) {
    const sauceLocation = await dbContext.SauceLocations.create(sauceLocationData)
    return sauceLocation
  }

}

export const sauceLocationsService = new SauceLocationsService()