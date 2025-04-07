import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { sauceLocationsService } from "../services/SauceLocationsService.js";


export class SauceLocationsController extends BaseController {
  constructor() {
    super('api/sauceLocations')
    this.router
      .get('', this.getAllSauceLocations)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSauceLocations)
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
  async createSauceLocations(request, response, next) {
    try {
      const sauceLocationData = request.body
      const sauceLocation = await sauceLocationsService.createSauceLocations(sauceLocationData)
      response.send(sauceLocation)
    } catch (error) {
      next(error)
    }
  }
}