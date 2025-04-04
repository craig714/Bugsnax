import { questsService } from "../services/QuestsService.js";
import BaseController from "../utils/BaseController.js";

export class QuestsController extends BaseController {
  constructor() {
    super('api/quests')
    this.router
      .get('', this.getAllQuests)
      .get('/:questId', this.getQuestById)
      .post('', this.createQuest)
      .delete('/:questId', this.deleteQuest)
      .put('/:questId', this.editQuest)
  }


  /**
         * @param {import("express").Request} request
         * @param {import("express").Response} response
         * @param {import("express").NextFunction} next
         */


  async getAllQuests(request, response, next) {
    try {
      const quests = await questsService.getAllQuests()
      response.send(quests)
    } catch (error) {
      next(error)
    }
  }


  /**
           * @param {import("express").Request} request
           * @param {import("express").Response} response
           * @param {import("express").NextFunction} next
           */
  async createQuest(request, response, next) {
    try {
      const questData = request.body
      const quest = await questsService.createQuest(questData)
      response.send(quest)
    } catch (error) {
      next(error)
    }
  }

  /**
             * @param {import("express").Request} request
             * @param {import("express").Response} response
             * @param {import("express").NextFunction} next
             */

  async getQuestById(request, response, next) {
    try {
      const questId = request.params.questId
      const quest = await questsService.getQuestById(questId)
      response.send(quest)
    } catch (error) {
      next(error)
    }
  }


  /**
           * @param {import("express").Request} request
           * @param {import("express").Response} response
           * @param {import("express").NextFunction} next
           */

  async deleteQuest(request, response, next) {
    try {
      const questId = request.params.questId
      const quest = await questsService.deleteQuest(questId)
      response.send(quest)
    } catch (error) {
      next(error)
    }
  }


  /**
          * @param {import("express").Request} request
          * @param {import("express").Response} response
          * @param {import("express").NextFunction} next
          */


  async editQuest(request, response, next) {
    try {
      const questId = request.params.questId
      const questData = request.body
      const quest = await questsService.editQuest(questId, questData)
      response.send(quest)
    } catch (error) {
      next(error)
    }
  }



}