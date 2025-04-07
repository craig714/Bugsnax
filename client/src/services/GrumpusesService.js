import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Grumpus } from "@/models/Grumpus.js"
import { AppState } from "@/AppState.js"

class GrumpusesService {

  async getAllGrumpuses() {
    const response = await api.get('api/grumpus')
    logger.log('Got all grumpuses!', response.data)
    const grumpus = response.data.map(pojo => new Grumpus(pojo))
    AppState.grumpuses = grumpus
  }

}

export const grumpusesService = new GrumpusesService()