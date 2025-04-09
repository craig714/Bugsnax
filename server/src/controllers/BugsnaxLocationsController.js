import { Auth0Provider } from "@bcwdev/auth0provider";
import { bugsnaxLocationsService } from "../services/BugsnaxLocationsService.js";
import BaseController from "../utils/BaseController.js";


export class BugsnaxLocationsController extends BaseController {
  constructor() {
    super('api/bugsnaxLocations')
    this.router
      .get('', this.getAllBugsnaxLocations)
      .get('/:bugsnaxId', this.getBugsnaxLocationByBugsnaxId)
      .get('/locations/:locationId', this.getBugsnaxLocationsByLocationId)
      .get('/:bugsnaxLocationId', this.getBugsnaxLocationById)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBugsnaxLocation)
      .put('/:bugsnaxLocationId', this.updateBugsnaxLocation)
      .delete('/:bugsnaxLocationId', this.deleteBugsnaxLocation)

  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAllBugsnaxLocations(request, response, next) {
    try {
      const bugsnaxLocations = await bugsnaxLocationsService.getAllBugsnaxLocations()
      response.send(bugsnaxLocations)
    } catch (error) {
      next(error)
    }

  }

  async getBugsnaxLocationByBugsnaxId(request, response, next) {
    try {
      const bugsnaxId = request.params.bugsnaxId
      const bugsnaxLocation = await bugsnaxLocationsService.getBugsnaxLocationByBugsnaxId(bugsnaxId)
      response.send(bugsnaxLocation)
    } catch (error) {
      next(error)
    }
  }


  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getBugsnaxLocationsByLocationId(request, response, next) {
    try {
      const locationId = request.params.locationId
      const bugsnaxLocations = await bugsnaxLocationsService.getBugsnaxLocationsByLocationId(locationId)
      response.send(bugsnaxLocations)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getBugsnaxLocationById(request, response, next) {
    try {
      const bugsnaxLocationId = request.params.bugsnaxLocationId
      const bugsnaxLocation = await bugsnaxLocationsService.getBugsnaxLocationById(bugsnaxLocationId)
      response.send(bugsnaxLocation)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createBugsnaxLocation(request, response, next) {
    try {
      const bugsnaxLocationData = request.body
      const bugsnaxLocation = await bugsnaxLocationsService.createBugsnaxLocation(bugsnaxLocationData)
      response.send(bugsnaxLocation)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async updateBugsnaxLocation(request, response, next) {
    try {
      const bugsnaxLocationId = request.params.bugsnaxLocationId
      const bugsnaxLocationData = request.body
      const bugsnaxLocation = await bugsnaxLocationsService.updateBugsnaxLocation(bugsnaxLocationId, bugsnaxLocationData)
      response.send(bugsnaxLocation)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async deleteBugsnaxLocation(request, response, next) {
    try {
      const bugsnaxLocationId = request.params.bugsnaxLocationId
      const bugsnaxLocation = await bugsnaxLocationsService.deleteBugsnaxLocation(bugsnaxLocationId)
      response.send(bugsnaxLocation)
    } catch (error) {
      next(error)
    }
  }
}