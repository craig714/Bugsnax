import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { SauceLocation } from "@/models/SauceLocation.js"
import { AppState } from "@/AppState.js"

class SauceLocationsService {



  async getLocationBySauceId(sauceId) {
    const response = await api.get(`api/sauceLocations/${sauceId}`)
    logger.log('Got sauce locations!', response.data)
    const sauceLocations = response.data.map(pojo => new SauceLocation(pojo))
    AppState.sauceLocation = sauceLocations
  }



}



export const sauceLocationsService = new SauceLocationsService()