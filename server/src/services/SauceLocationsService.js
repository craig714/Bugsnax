import { dbContext } from "../db/DbContext.js"



class SauceLocationsService {
  async getAllSauceLocations() {
    const sauceLocations = await dbContext.SauceLocations.find().populate('sauce location')
    return sauceLocations
  }
  async getSauceLocationsByLocationId(locationId) {
    const sauceLocations = await dbContext.SauceLocations.find({ locationId: locationId }).populate('sauce location')
    return sauceLocations
  }
  async getSauceLocationsById(sauceLocationId) {
    const sauceLocation = (await dbContext.SauceLocations.findById(sauceLocationId)).populate('sauce location')
    return sauceLocation
  }
  async createSauceLocations(sauceLocationData) {
    const sauceLocation = await dbContext.SauceLocations.create(sauceLocationData)
    await sauceLocation.populate('sauce')
    await sauceLocation.populate('location')
    return sauceLocation
  }

}

export const sauceLocationsService = new SauceLocationsService()