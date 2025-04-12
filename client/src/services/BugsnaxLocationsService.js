import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { BugsnaxLocation } from "@/models/BugsnaxLocation.js"
import { AppState } from "@/AppState.js"
import { Bugsnax } from "@/models/Bugsnax.js"

class BugsnaxLocationService {
  async getBugsnaxLocationsByLocationId(locationId) {
    const response = await api.get(`api/bugsnaxLocations/locations/${locationId}`)
    // logger.log('getBugsnaxLocationsByLocationId returned ', response.data)
    const bugsnaxLocations = response.data.map(pojo => new BugsnaxLocation(pojo))
    const bugsnax = bugsnaxLocations.map(pojo => new Bugsnax(pojo.bugsnax))
    AppState.bugsnaxLocations = bugsnaxLocations
    AppState.bugsnax = bugsnax
    // logger.log('AppState.bugsnaxLocations is ', AppState.bugsnaxLocations)
    logger.log('AppState.bugsnax is ', AppState.bugsnax)
  }


  async getLocationsByBugsnaxId(bugsnaxId) {
    const response = await api.get(`api/bugsnaxLocations/${bugsnaxId}`)
    // logger.log('Got bugsnax locations!', response.data)
    const bugsnaxLocations = response.data.map(pojo => new BugsnaxLocation(pojo))
    AppState.bugsnaxLocations = bugsnaxLocations
  }

}




export const bugsnaxLocationService = new BugsnaxLocationService()