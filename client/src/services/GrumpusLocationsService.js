import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { GrumpusLocation } from "@/models/GrumpusLocation.js"
import { AppState } from "@/AppState.js"
import { Grumpus } from "@/models/Grumpus.js"

class GrumpusesLocationService {

  async getGrumpusLocationByQuestId(questId) {
    const response = await api.get(`api/grumpusLocations/quests/${questId}`)
    // logger.log('response.data is ', response.data)
    const grumpusLocation = response.data.map(pojo => new GrumpusLocation(pojo))
    AppState.activeGrumpusLocation = grumpusLocation
    // logger.log('AppState.activeGrumpusLocation is ', AppState.activeGrumpusLocation)
  }
  async getLocationsByGrumpusId(grumpusId) {

    const response = await api.get(`api/grumpusLocations/${grumpusId}`)
    // logger.log('Got grumpus locations!', response.data)
    const grumpusLocations = response.data.map(pojo => new GrumpusLocation(pojo))
    AppState.grumpusLocations = grumpusLocations

  }
  async getGrumpusLocationByLocationId(locationId) {
    const response = await api.get(`api/grumpusLocations/locations/${locationId}`)
    // logger.log('getGrumpusLocationByLocationId returned ', response.data)
    const grumpusLocations = response.data.map(pojo => new GrumpusLocation(pojo))
    // logger.log('grumpusLocations created ', grumpusLocations)
    const grumpuses = grumpusLocations.map(pojo => new Grumpus(pojo.grumpus))
    AppState.grumpuses = grumpuses
    // logger.log('AppState.grumpuses is now ', AppState.grumpuses)
  }

}



export const grumpusesLocationService = new GrumpusesLocationService()