import { grumpusesService } from "../services/GrumpusesService.js";
import BaseController from "../utils/BaseController.js";

export class GrumpusesController extends BaseController {
  constructor() {
    super('api/grumpus')
    this.router
      .get('', this.getAllGrumpuses)
      .get(':grumpusId', this.getGrumpusById)
      .post('', this.createGrumpus)
  }


  /**
          * @param {import("express").Request} request
          * @param {import("express").Response} response
          * @param {import("express").NextFunction} next
          */


  async getAllGrumpuses(request, response, next) {
    try {
      const grumpuses = await grumpusesService.getAllGrumpuses()
      response.send(grumpuses)
    } catch (error) {
      next(error)
    }
  }

  async getGrumpusById(request, response, next) {
    try {

    } catch (error) {
      next(error)
    }
  }



  /**
           * @param {import("express").Request} request
           * @param {import("express").Response} response
           * @param {import("express").NextFunction} next
           */



  async createGrumpus(request, response, next) {
    try {
      const grumpusData = request.body
      const grumpus = await grumpusesService.createGrumpus(grumpusData)
      response.send(grumpus)
    } catch (error) {
      next(error)
    }
  }





}