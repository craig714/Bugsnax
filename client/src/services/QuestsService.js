import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Quest } from "@/models/Quest.js"
import { AppState } from "@/AppState.js"

class QuestsService {
  async getAllQuests() {
    const response = await api.get('api/quests')
    logger.log('getAllQuests returned ', response.data)
    const quests = response.data.map(pojo => new Quest(pojo))
    AppState.quests = quests

  }
  async getQuestById(questId) {
    const response = await api.get(`api/quests/${questId}`)
    logger.log('getQuestById returned ', response.data)
    const quest = new Quest(response.data)

    // this.setActiveQuest(quest)
  }

  // setActiveQuest(quest) {
  //   AppState.activeQuest = quest
  //   logger.log('AppState.activeQuest is ', AppState.activeQuest)
  // }


}


export const questsService = new QuestsService()