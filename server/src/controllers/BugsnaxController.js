import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import { bugsnaxService } from "../services/BugSnaxService.js";
import BaseController from "../utils/BaseController.js";
// import { bugsnaxLocationService } from "../services/BugsnaxLocationService.js";
//NOTE - Research user roles
export class BugsnaxController extends BaseController {
  constructor() {
    super('api/bugsnax')
    this.router
      .get('', this.getAllBugsnax)
      .get('/:bugsnaxId', this.getBugsnaxById)
      // .get('/:locationId', this.getBugsnaxByLocation)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .use(Auth0Provider.hasRoles('admin'))
      .use(Auth0Provider.hasPermissions('write: everything'))
      .post('', this.createBugsnax)
      .put('/:bugsnaxId', this.updateBugsnax)
      .delete('/:bugsnaxId', this.deleteBugsnax)
      .post('/location/:locationId', this.createBugsnaxLocation)
  }

  /**
       * @param {import("express").Request} request
       * @param {import("express").Response} response
       * @param {import("express").NextFunction} next
       */


  async getAllBugsnax(request, response, next) {
    try {
      const bugsnax = await bugsnaxService.getAllBugsnax()
      response.send(bugsnax)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */

  async getBugsnaxById(request, response, next) {
    try {
      const bugsnaxId = request.params.bugsnaxId
      const bugsnax = await bugsnaxService.getBugsnaxById(bugsnaxId)
      response.send(bugsnax)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  // NOTE - test after location data in database
  // async getBugsnaxByLocation(request, response, next) {
  //   try {
  //     const locationId = request.params.locationId
  //     const bugsnax = await bugsnaxLocationService.getBugsnaxByLocation(locationId)
  //     response.send(bugsnax)
  //   } catch (error) {
  //     next(error)
  //   }
  // }


  async createBugsnax(request, response, next) {
    try {
      const bugsnaxData = request.body
      const bugsnax = await bugsnaxService.createBugsnax(bugsnaxData)
      response.send(bugsnax)
    } catch (error) {
      next(error)
    }
  }

  /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
  async updateBugsnax(request, response, next) {
    try {
      const bugsnaxId = request.params.bugsnaxId
      const bugsnaxData = request.body
      // const userInfo = request.userInfo <---- pass this through when we get auth0 going
      const bugsnax = await bugsnaxService.updateBugsnax(bugsnaxId, bugsnaxData)
      response.send(bugsnax)
    } catch (error) {
      next(error)
    }
  }
  /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */

  async deleteBugsnax(request, response, next) {
    try {
      const bugsnaxId = request.params.bugsnaxId
      const bugsnax = await bugsnaxService.deleteBugsnax(bugsnaxId)
      response.send(bugsnax)
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
      // const bugsnaxLocation = await bugsnaxLocationService.createBugsnaxLocation(bugsnaxLocationData)
      // response.send(bugsnaxLocation)
    } catch (error) {
      next(error)
    }
  }

}