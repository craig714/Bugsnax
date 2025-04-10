import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { GrumpusLocation } from "@/models/GrumpusLocation.js"
import { AppState } from "@/AppState.js"

class GrumpusesLocationService {
  async getGrumpusLocationByQuestId(questId) {
    const response = await api.get(`api/grumpusLocations/quests/${questId}`)
    logger.log('response.data is ', response.data)
    const grumpusLocation = response.data.map(pojo => new GrumpusLocation(pojo))
    AppState.activeGrumpusLocation = grumpusLocation
    logger.log('AppState.activeGrumpusLocation is ', AppState.activeGrumpusLocation)
  }
  async getLocationsByGrumpusId(grumpusId) {
    debugger
    const response = await api.get(`api/grumpusLocations/${grumpusId}`)
    logger.log('Got grumpus locations!', response.data)
    const grumpusLocations = response.data.map(pojo => new GrumpusLocation(pojo))
    AppState.grumpusLocations = grumpusLocations

  }


}



export const grumpusesLocationService = new GrumpusesLocationService()