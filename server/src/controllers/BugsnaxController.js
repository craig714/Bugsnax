import { bugsnaxService } from "../services/BugSnaxService.js";
import BaseController from "../utils/BaseController.js";

export class BugsnaxController extends BaseController {
  constructor() {
    super('api/bugsnax')
    this.router
      .get('', this.getAllBugsnax)
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

}