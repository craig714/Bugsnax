import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { GrumpusLocation } from "@/models/GrumpusLocation.js"
import { AppState } from "@/AppState.js"

class GrumpusesLocationService {
  async getGrumpusLocationsByGrumpusId(grumpusId) {
    const response = await api.get(`api/grumpusLocations/grumpuses/${grumpusId}`)
    logger.log('getGrumpusLocationsByGrumpusId returned ', response.data)
  }
  async getLocationsByGrumpusId(grumpusId) {
    const response = await api.get(`api/grumpusLocations/${grumpusId}`)
    logger.log('Got grumpus locations!', response.data)
    const grumpusLocations = response.data.map(pojo => new GrumpusLocation(pojo))
    AppState.grumpusLocations = grumpusLocations

  }


}



export const grumpusesLocationService = new GrumpusesLocationService()