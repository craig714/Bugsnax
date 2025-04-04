import { dbContext } from "../db/DbContext.js"

class QuestsService {




  async getAllQuests() {
    const quests = await dbContext.Quests.find()
    return quests
  }


  async createQuest(questData) {
    const quest = await dbContext.Quests.create(questData)
    return quest
  }


  async getQuestById(questId) {
    const quest = await dbContext.Quests.findById(questId)
    return quest
  }


  async deleteQuest(questId) {
    const questToDelete = await dbContext.Quests.findById(questId)
    const name = questToDelete.name
    await questToDelete.deleteOne()
    return `${name} has been deleted!`
  }


  // NOTE - Write userinfo checks after auth0 is implemented
  async editQuest(questId, questData) {
    const questToEdit = await dbContext.Quests.findById(questId)
    questToEdit.name = questData.name ?? questToEdit.name
    questToEdit.picture = questData.picture ?? questToEdit.picture
    questToEdit.description = questData.description ?? questToEdit.description
    questToEdit.grumpusId = questData.grumpusId ?? questToEdit.grumpusId
    questToEdit.steps = questData.steps ?? questToEdit.steps
    questToEdit.questType = questData.questType ?? questToEdit.questType
    questToEdit.locationId = questData.locationId ?? questToEdit.locationId
    await questToEdit.save()
    return questToEdit
  }


}



export const questsService = new QuestsService()