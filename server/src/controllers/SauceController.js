import { Auth0Provider } from "@bcwdev/auth0provider";
import { sauceService } from "../services/SauceService.js";
import BaseController from "../utils/BaseController.js";

export class SauceController extends BaseController {
  constructor() {
    super('api/sauces')
    this.router
      .get('', this.getAllSauces)
      .get('/:sauceId', this.getSauceById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .use(Auth0Provider.hasRoles('admin'))
      .post('', this.createSauce)
      .put('/:sauceId', this.updateSauce)
      .delete('/:sauceId', this.deleteSauce)
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
  async updateSauce(request, response, next) {
    try {
      const sauceId = request.params.sauceId
      const sauceData = request.body
      const sauce = await sauceService.updateSauce(sauceId, sauceData)
      response.send(sauce)
    }
    catch (error) {
      next(error);
    }
  }
  async getSauceById(request, response, next) {
    try {
      const sauceId = request.params.sauceId
      const sauce = await sauceService.getSauceById(sauceId)
      response.send(sauce)
    }
    catch (error) {
      next(error);
    }
  }
  // async getSauceByLocation(request, response, next) {
  //   try {
  //     const locationId = request.params.locationId
  //     const sauce = await  
  //     response.sent(sauce)
  //   }
  //   catch (error){
  //     next(error);
  //   }
  // }
  async deleteSauce(request, response, next) {
    try {
      const sauceId = request.params.sauceId
      const sauce = await sauceService.deleteSauce(sauceId)
      response.send(sauce)
    }
    catch (error) {
      next(error);
    }
  }
}