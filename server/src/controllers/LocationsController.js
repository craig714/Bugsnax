import { locationsService } from "../services/LocationsService.js"
import BaseController from "../utils/BaseController.js"


export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getAllLocations)
      .get('/:locationId', this.getLocationById)
      .post('', this.createLocation)
      .put('/:locationId', this.updateLocation)
      .delete('/:locationId', this.deleteLocation)

  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAllLocations(request, response, next) {
    try {
      const locations = await locationsService.getAllLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getLocationById(request, response, next) {
    try {
      const locationId = request.params.locationId
      const location = await locationsService.getLocationById(locationId)
      response.send(location)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createLocation(request, response, next) {
    // NOTE implement auth0 later
    try {
      const locationData = request.body
      const location = await locationsService.createLocation(locationData)
      response.send(location)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async updateLocation(request, response, next) {
    // NOTE implement auth0 later
    try {
      const locationId = request.params.locationId
      const locationData = request.body
      const location = await locationsService.updateLocation(locationId, locationData)
      response.send(location)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async deleteLocation(request, response, next) {
    try {
      const locationId = request.params.locationId
      const location = await locationsService.deleteLocation(locationId)
      response.send(location)
    } catch (error) {
      next(error)
    }
  }
}