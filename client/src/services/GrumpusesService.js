import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Grumpus } from "@/models/Grumpus.js"
import { AppState } from "@/AppState.js"

class GrumpusesService {

  async getAllGrumpuses() {
    const response = await api.get('api/grumpus')
    // logger.log('Got all grumpuses!', response.data)
    const grumpus = response.data.map(pojo => new Grumpus(pojo))
    AppState.grumpuses = grumpus
  }

  async getGrumpusesById(grumpusId) {
    const response = await api.get(`api/grumpus/${grumpusId}`)
    // logger.log('Got Grumpus by Id', response.data)
    const grumpus = new Grumpus(response.data)
    AppState.activeGrumpus = grumpus
  }

  async createGrumpus(grumpData) {
    const response = await api.post('api/grumpus', grumpData)
    const grumpus = new Grumpus(response.data)
    AppState.grumpuses.push(grumpus)
  }

}

export const grumpusesService = new GrumpusesService()