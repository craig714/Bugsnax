import { sauceService } from "../services/SauceService.js";
import BaseController from "../utils/BaseController.js";

export class SauceController extends BaseController {
  constructor() {
    super('api/sauces')
    this.router
      .get('', this.getAllSauces)
      .post('', this.createSauce)
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
  async createSauce(request, response, next) {
    try {
      const sauceData = request.body
      const sauce = await sauceService.createSauce(sauceData)
      response.send(sauce)
    } catch (error) {
      next(error);
    }
  }
}