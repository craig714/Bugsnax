
import { grumpusLocationsService } from "../services/GrumpusLocationsService.js";
import BaseController from "../utils/BaseController.js";

export class GrumpusLocationsController extends BaseController {
  constructor() {
    super('api/grumpusLocations')
    this.router
      .get('', this.getAllGrumpusLocations)
      .get('/:grumpusId', this.getGrumpusLocationsByGrumpusId)
      .get('/locations/:grumpusLocations', this.getGrumpusLocationsByLocationId)
      .get('/:grumpusLocationId', this.getGrumpusLocationById)
      .post('', this.createGrumpusLocation)
      .delete('/:grumpusLocationId', this.deleteGrumpusLocation)
      .put('/:grumpusLocationId', this.editGrumpusLocation)
  }



  /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */

  async getAllGrumpusLocations(request, response, next) {
    try {
      const grumpusLocations = await grumpusLocationsService.getAllGrumpusLocations()
      response.send(grumpusLocations)
    } catch (error) {
      next(error)
    }
  }


  /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */

  async getGrumpusLocationsByGrumpusId(request, response, next) {
    try {
      const grumpusId = request.params.grumpusId
      const grumpusLocation = await grumpusLocationsService.getGrumpusLocationsByGrumpusId(grumpusId)
      response.send(grumpusLocation)
    } catch (error) {
      next(error)
    }
  }





  /**
      * @param {import("express").Request} request
      * @param {import("express").Response} response
      * @param {import("express").NextFunction} next
      */


  async createGrumpusLocation(request, response, next) {
    try {
      const grumpusLocationsData = request.body
      const grumpusLocation = await grumpusLocationsService.createGrumpusLocation(grumpusLocationsData)
      response.send(grumpusLocation)
    } catch (error) {
      next(error)
    }
  }

  /**
       * @param {import("express").Request} request
       * @param {import("express").Response} response
       * @param {import("express").NextFunction} next
       */

  async getGrumpusLocationsByLocationId(request, response, next) {
    try {
      const locationId = request.params.locationId
      const grumpusLocations = await grumpusLocationsService.getGrumpusLocationsByLocationId(locationId)
      response.send(grumpusLocations)
    } catch (error) {
      next(error)
    }
  }


  /**
       * @param {import("express").Request} request
       * @param {import("express").Response} response
       * @param {import("express").NextFunction} next
       */


  async getGrumpusLocationById(request, response, next) {
    try {
      const grumpusLocationId = request.params.grumpusLocationId
      const grumpusLocation = await grumpusLocationsService.getGrumpusLocationById(grumpusLocationId)
      response.send(grumpusLocation)
    } catch (error) {
      next(error)
    }
  }


  /**
         * @param {import("express").Request} request
         * @param {import("express").Response} response
         * @param {import("express").NextFunction} next
         */


  async deleteGrumpusLocation(request, response, next) {
    try {
      const grumpusLocationId = request.params.grumpusLocationId
      const grumpusLocation = await grumpusLocationsService.deleteGrumpusLocation(grumpusLocationId)
      response.send(grumpusLocation)
    } catch (error) {
      next(error)
    }
  }

  /**
           * @param {import("express").Request} request
           * @param {import("express").Response} response
           * @param {import("express").NextFunction} next
           */

  async editGrumpusLocation(request, response, next) {
    const grumpusLocationId = request.params.grumpusLocationId
    const grumpusLocationData = request.body
    const grumpusLocation = await grumpusLocationsService.editGrumpusLocation(grumpusLocationId, grumpusLocationData)
    response.send(grumpusLocation)
  }



}