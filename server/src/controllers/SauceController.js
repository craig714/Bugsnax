import { sauceService } from "../services/SauceService.js";
import BaseController from "../utils/BaseController.js";

export class SauceController extends BaseController {
  constructor() {
    super('api/sauce')
    this.router
      .get('', this.getAllSauces)
  }
  async getAllSauces(request, response, next) {
    try {
      const sauce = await sauceService.getAllSauces()
      response.send(sauce)
    }
    catch (error) {
      next(error);
    }
  }
}