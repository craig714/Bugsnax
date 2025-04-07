import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { sauceLocationsService } from "../services/SauceLocationsService.js";


export class SauceLocationsController extends BaseController {
  constructor() {
    super('api/sauceLocations')
    this.router
      .get('', this.getAllSauceLocations)
      .get('/locations/:locationId', this.getSauceLocationsByLocationId)
      .get('/:sauceLocationId', this.getSauceLocationById)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSauceLocations)
      .put('/:sauceLocationId', this.updateSauceLocation)
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAllSauceLocations(request, response, next) {
    try {
      const sauceLocations = await sauceLocationsService.getAllSauceLocations()
      response.send(sauceLocations)
    } catch (error) {

    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getSauceLocationsByLocationId(request, response, next) {
    try {
      const locationId = request.params.locationId
      const sauceLocation = await sauceLocationsService.getSauceLocationsByLocationId(locationId)
      response.send(sauceLocation)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getSauceLocationById(request, response, next) {
    try {
      const sauceLocationId = request.params.sauceLocationId
      const sauceLocation = await sauceLocationsService.getSauceLocationsById(sauceLocationId)
      response.send(sauceLocation)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createSauceLocations(request, response, next) {
    try {
      const sauceLocationData = request.body
      const sauceLocation = await sauceLocationsService.createSauceLocations(sauceLocationData)
      response.send(sauceLocation)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async updateSauceLocation(request, response, next) {
    try {
      const sauceLocationId = request.params.sauceLocationId
      const sauceLocationData = request.body
      const sauceLocation = await sauceLocationsService.updateSauceLocation(sauceLocationId, sauceLocationData)
      response.send(sauceLocation)
    } catch (error) {
      next(error)
    }
  }
}