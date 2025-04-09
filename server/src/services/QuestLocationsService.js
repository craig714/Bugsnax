import { dbContext } from "../db/DbContext.js"



class QuestLocationsService {
  async createQuestLocation(questLocationData) {
    const questLocation = await dbContext
  }

}

export const questLocationsService = new QuestLocationsService()