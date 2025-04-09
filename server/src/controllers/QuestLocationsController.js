import { questLocationsService } from "../services/QuestLocationsService.js";
import BaseController from "../utils/BaseController.js";



export class QuestLocationsController extends BaseController {
  constructor() {
    super('api/questLocations')
    this.router
      .post('', this.createQuestLocation)
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createQuestLocation(request, response, next) {
    try {
      const questLocationData = request.body
      const questLocation = await questLocationsService.createQuestLocation(questLocationData)
      response.send(questLocation)
    } catch (error) {
      next(error)
    }
  }
}