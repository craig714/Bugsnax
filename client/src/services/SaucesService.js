import { Sauce } from "@/models/Sauce.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"

class SaucesService {


  async createSauce(sauceData) {
    const response = await api.post('api/sauces', sauceData)
    const sauce = new Sauce(response.data)
    AppState.sauces.push(sauce)
  }


  async getAllSauces() {
    const response = await api.get(`api/sauces`)
    // logger.log('Got All sauces!', response.data)
    const sauce = response.data.map(pojo => new Sauce(pojo))
    AppState.sauces = sauce
  }


  async getSaucesById(sauceId) {
    const response = await api.get(`api/sauces/${sauceId}`)
    // logger.log('Got Sauce by Id', response.data)
    const sauce = new Sauce(response.data)
    AppState.activeSauce = sauce
  }

  async getSaucesByIdLike(sauceId) {
    const response = await api.get(`api/sauces/${sauceId}`)
    // logger.log('Got Sauce by Id', response.data)
    const sauce = new Sauce(response.data)
    AppState.like = sauce
    logger.log('like is now ', AppState.like)
  }

}




export const saucesService = new SaucesService()