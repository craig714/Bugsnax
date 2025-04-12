import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { GrumpusLocation } from "@/models/GrumpusLocation.js"
import { AppState } from "@/AppState.js"
import { Grumpus } from "@/models/Grumpus.js"
import { Quest } from "@/models/Quest.js"

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
  async getGrumpusLocationsByLocationId(locationId) {
    let uniqueGrumpusesLocations = []
    const response = await api.get(`api/grumpusLocations/locations/${locationId}`)
    // logger.log('getGrumpusLocationByLocationId returned ', response.data)
    const grumpusLocations = response.data.map(pojo => new GrumpusLocation(pojo))
    logger.log('grumpusLocations created ', grumpusLocations)
    grumpusLocations.forEach(grumpusLocation => {
      const currentUniqueGrumpusesLocationsLength = uniqueGrumpusesLocations.length
      let containsGrumpusLocation = false

      for (let i = 0; i <= currentUniqueGrumpusesLocationsLength; i++) {
        containsGrumpusLocation = uniqueGrumpusesLocations[i]?.grumpusId == grumpusLocation.grumpusId
        if (containsGrumpusLocation) break
      }
      if (!containsGrumpusLocation) uniqueGrumpusesLocations.push(grumpusLocation)
    })
    logger.log('uniqueGrumpus is now ', uniqueGrumpusesLocations)

    AppState.grumpusLocations = grumpusLocations
    // logger.log('grumpusLocations created ', grumpusLocations)
    const grumpuses = uniqueGrumpusesLocations.map(pojo => new Grumpus(pojo.grumpus))
    AppState.grumpuses = grumpuses
    // logger.log('AppState.grumpuses is now ', AppState.grumpuses)
  }
  findQuestsForThisLocation(locationId) {
    // debugger
    const foundQuests = AppState.grumpusLocations.find(grumpusLocation => grumpusLocation.locationId == locationId)
    if (Array.isArray(foundQuests)) {
      const quests = foundQuests.map(pojo => new Quest(pojo.quest))
      logger.log('findQuestsForThisLocation found array', quests)
      AppState.quests = quests
    }
    if (!Array.isArray(foundQuests)) {
      const quest = new Quest(foundQuests.quest)
      logger.log('findQuestsForThisLocation found single', quest)
      AppState.quests.push(quest)
    }

  }

}



export const grumpusesLocationService = new GrumpusesLocationService()