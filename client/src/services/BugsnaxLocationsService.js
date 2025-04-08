import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { BugsnaxLocation } from "@/models/BugsnaxLocation.js"
import { AppState } from "@/AppState.js"

class BugsnaxLocationService {


  async getLocationsByBugsnaxId(bugsnaxId) {
    const response = await api.get(`api/bugsnaxLocations/${bugsnaxId}`)
    logger.log('Got bugsnax locations!', response.data)
    const bugsnaxLocations = response.data.map(pojo => new BugsnaxLocation(pojo))
    AppState.bugsnaxLocations = bugsnaxLocations
  }

}




export const bugsnaxLocationService = new BugsnaxLocationService()