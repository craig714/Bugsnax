import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class QuestsService {
  async getAllQuests() {
    const response = await api.get('api/quests')
    logger.log('getAllQuests returned ', response.data)

  }



}


export const questsService = new QuestsService()