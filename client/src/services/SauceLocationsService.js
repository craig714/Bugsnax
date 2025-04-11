import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { SauceLocation } from "@/models/SauceLocation.js"
import { AppState } from "@/AppState.js"
import { Sauce } from "@/models/Sauce.js"

class SauceLocationsService {
  async getSaucesByLocationId(locationId) {
    debugger
    const response = await api.get(`api/sauceLocations/locations/${locationId}`)
    // logger.log('getSaucesByLocationId returned ', response.data)
    const sauceLocations = response.data.map(pojo => new SauceLocation(pojo))
    logger.log('sauceLocations created ', sauceLocations)
    const sauces = sauceLocations.map(pojo => new Sauce(pojo.sauce))
    AppState.sauces = sauces
    logger.log('AppState.sauces is now ', AppState.sauces)
  }

  async getLocationBySauceId(sauceId) {
    const response = await api.get(`api/sauceLocations/${sauceId}`)
    logger.log('Got sauce locations!', response.data)
    const sauceLocations = response.data.map(pojo => new SauceLocation(pojo))
    AppState.sauceLocations = sauceLocations
  }



}



export const sauceLocationsService = new SauceLocationsService()