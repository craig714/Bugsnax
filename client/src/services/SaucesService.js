import { Sauce } from "@/models/Sauce.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class SaucesService {
  async createSauce(sauceData) {
    const response = await api.post('api/sauces', sauceData)
    const sauce = new Sauce(response.data)
    AppState.sauce.push(sauce)
  }


}




export const saucesService = new SaucesService()