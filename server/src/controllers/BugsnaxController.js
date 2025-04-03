import { Auth0Provider } from "@bcwdev/auth0provider";
import { bugsnaxService } from "../services/BugSnaxService.js";
import BaseController from "../utils/BaseController.js";
//NOTE - Research user roles
export class BugsnaxController extends BaseController {
  constructor() {
    super('api/bugsnax')
    this.router
      .get('', this.getAllBugsnax)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBugsnax)
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
  async createBugsnax(request, response, next) {
    try {
      const bugsnaxData = request.body
      const bugsnax = await bugsnaxService.createBugsnax(bugsnaxData)
      response.send(bugsnax)
    } catch (error) {
      next(error)
    }
  }

}